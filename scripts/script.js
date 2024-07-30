
import QrCodeWithLogo from 'https://cdn.skypack.dev/qr-code-with-logo';

const myCanvas = document.createElement('canvas');
document.body.appendChild(myCanvas);
console.log('Canvas created and appended to body');

QrCodeWithLogo.toCanvas({
  canvas: myCanvas,
  content: 'https://github.com/legendPerceptor', // change for your URL
  width: 380,
  logo: {
    src: '/photo.jpg', // Ensure this path is correct, put the image in the public folder as we use the Express framework.
    radius: 8
  }
}).then(() => {
  console.log('QR Code generated successfully');
}).catch(err => {
  console.error('Failed to generate QR Code', err);
});