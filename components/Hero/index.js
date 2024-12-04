import { Typography, Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { firebaseConstants, getHash } from '../../utils';
import db from '../../lib/firebase';
import { getDocs, doc,query,where,collection } from 'firebase/firestore';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

const Hero = () => {
  const router = useRouter();
  const [input, setInput] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleJoin = async () => {
    const collectionRef = collection(
      db,
      firebaseConstants.collection 
    );
    const q=query(collectionRef,where(firebaseConstants.field,'==',input));

    const docSnaps = await getDocs(q);
    let docSnap=null;
    docSnaps.forEach((doc)=>{
      if(doc.exists()&&doc.data()[firebaseConstants.field]===input)
      {
        docSnap=doc;
      }
    });
    if (docSnap) {
      console.log('Document data:', docSnap.data());
      // check if input === docSnap.data()[firebaseConstants.field]
      if (input === docSnap.data()[firebaseConstants.field]) {
        enqueueSnackbar('Valid code', { variant: 'success' });
        const token = docSnap.id;
        console.log(token);
        // save to local storage
        localStorage.setItem('token', token);
        router.push('/dashboard');
      } else {
        enqueueSnackbar('Invalid code', { variant: 'error' });
      }
    } else {
      enqueueSnackbar('Something went wrong', { variant: 'error' });
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" fontWeight={100}>
        Attend.me
      </Typography>
      <Typography variant="body1" color={'GrayText'}>
        No proxy sorry :(
      </Typography>
      <TextField
        id="outlined-basic"
        fullWidth
        variant="outlined"
        sx={{ my: 2 }}
        value={input}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        fullWidth
        sx={{ p: 1.5, borderRadius: 3 }}
        onClick={handleJoin}
      >
        Join
      </Button>
    </Box>
  );
};

export default Hero;
