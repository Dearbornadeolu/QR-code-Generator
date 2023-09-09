# QR Code Generator

This is a simple React application that allows you to generate QR codes from URLs. You can enter a URL, click the "Generate" button, and a QR code will be created for you. You can also download the generated QR code as a PNG image.

## live page
https://qr-code-generator-one-pied.vercel.app/

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

Follow these steps to get the application up and running:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Dearbornadeolu/qr-code-generator.git
   ```

2. Change to the project's directory:

   ```bash
   cd qr-code-generator
   ```

3. Install the project dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

1. Enter the URL for which you want to generate a QR code in the input field.

2. Click the "Generate" button.

3. A QR code will be displayed on the screen.

4. You can also download the generated QR code as a PNG image by clicking the "Download" link.

## Customization

You can customize the generated QR code by modifying the `GenerateQRCode` function in the `App.js` file. Currently, it is set to the following parameters:

- `width`: 800 pixels
- `margin`: 2 pixels
- `color`: Dark blue (#335383)

You can adjust these parameters to suit your preferences.

```javascript
const GenerateQRCode = () => {
  QRCode.toDataURL(url, {
    width: 800,
    margin: 2,
    color: {
      dark: "#335383ff",
    },
  }, (err, url) => {
    if (err) return console.error(err);
    console.log(url);
    setQrcode(url);
  });
};
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project uses the [qrcode](https://www.npmjs.com/package/qrcode) library for generating QR codes.
- Created with ❤️ by Dearborn Adeyeni.
