/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useQRCode } from 'next-qrcode';

function App({value}) {
  const { Image } = useQRCode();

  return (
    <Image
      text={value}
      options={{
        type: 'image/jpeg',
        quality: 0.3,
        level: 'L',
        margin: 3,
        scale: 4,
        width: 300,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      }}
      logo={{
        src: 'https://next-qrcode.js.org/github.png',
        options: {
          width: 35,
          x: undefined,
          y: undefined,
        },
      }}
    />
  );
}

export default App;
