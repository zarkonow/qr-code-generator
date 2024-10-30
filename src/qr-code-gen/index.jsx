import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {

    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')

function handleGenerateQrCode(){
    setQrCode(input)
    console.log(qrCode)  
}

  return (
    <div>
      <h1>QR CODE GENERATOR</h1>
      <div>
        <input onChange={(e)=> setInput(e.target.value)} type="text" name="qr-code" placeholder="Enter your value here" />
        <button disabled={input && input.trim() !== ''} onClick={handleGenerateQrCode}>Generate</button>
      </div>
      <div>
        <QRCode id="qr-code-value" value="" />
      </div>
    </div>
  );
}
