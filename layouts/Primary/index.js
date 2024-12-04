import { Box } from '@mui/material';
import BackgroundImage from '../../public/bg-pattern.svg';
const PrimaryLayout = ({ children }) => {
  const backgroundProps = {
    backgroundImage: `url(${BackgroundImage.src})`,
    backgroundRepeat: 'repeat',
    backgroundColor: '#222326',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', ...backgroundProps }}>
      {children}
    </Box>
  );
};

export default PrimaryLayout;
