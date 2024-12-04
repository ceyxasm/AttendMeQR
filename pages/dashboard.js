import PrimaryLayout from '../layouts/Primary';
import QR from '../components/QR';
import { Button, Typography, CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getDoc, deleteDoc, doc } from 'firebase/firestore';
import db from '../lib/firebase';
import { firebaseConstants, generateString } from '../utils';
const Dashboard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [qr, setQR] = useState('INVALID');
  let qrInterval;
  const handleStop = () => {
    // delete token from local storage
    // create doc ref
    const docId = localStorage.getItem('token');
     // delete doc with docId
    const docRef = doc(db, firebaseConstants.collection, docId);
    deleteDoc(docRef)
    localStorage.removeItem('token');
    router.push('/');
  };

  const getData = async () => {
    console.log('run');
    const docId = localStorage.getItem('token');
    const docRef = doc(db, firebaseConstants.collection, docId);
    // get
    // get doc
    const docSnap = await getDoc(docRef);
    const data = await docSnap.data();
    qrInterval = setInterval(() => {
      const qrString = generateString(data.classId);
      console.log(qrString);
      setQR(qrString);
    }, 2000);  // 5sec -> 3sec 
  };

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    if (!localToken) router.push('/');
    else {
      getData();
    }

    setLoading(false);
    return () => {
      clearInterval(qrInterval);
    };
  }, []);

  if (loading)
    return (
      <PrimaryLayout>
        <CircularProgress />
      </PrimaryLayout>
    );
  return (
    <PrimaryLayout>
      <QR value={qr} />
      <Typography variant="body1" color="GrayText">
        Scan this QR code to mark your attendance
      </Typography>
      <Button
        variant="contained"
        fullWidth
        maxWidth={300}
        onClick={handleStop}
        sx={{ maxWidth: 300, my: 2, p: 1.5 }}
      >
        Stop
      </Button>
    </PrimaryLayout>
  );
};

export default Dashboard;
