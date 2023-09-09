import  QRCode  from 'qrcode'
import { useState } from 'react'
import './App.css'

function App() {

  const [url, setUrl] = useState("")
  const [qrcode, setQrcode] = useState("")

  const GenerateQRCode = ()=>{
    QRCode.toDataURL(url,{
      width : 800,
      margin: 2,
      color: {
        dark: "#335383ff"
      }
    }, (err, url)=>{
      if (err) return console.error(err)
      console.log(url)
    setQrcode(url)
    })
  }

  return (
    <div className='name'>
      <div className='body'>
      <h1>QR Code Generator</h1>   
      <input type="text"
       name="" 
       id=""
       placeholder='....'
       value={url}
       onChange={(evt) => setUrl(evt.target.value)}
      />   
      <button onClick={GenerateQRCode}>Generate</button>
      </div>
      {qrcode && <>
        <img src={qrcode}  />
        <a href={qrcode} download="qrcode.png">Download</a>

      </> }
     
    </div>
  )
}

export default App
