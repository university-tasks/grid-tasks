import React from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import style from "./style.module.css";

const App: React.FC = () => {

  const algorithms = ["sha256", "streebog"]

  const [textToEncrypt, setTextToEncrypt] = React.useState<string>("");
  const [algorithm, setAlgorithm] = React.useState<string>(algorithms[0]);
  const [encryptedText, setEncryptedText] = React.useState<string>("");

  const handleTextToEncryptForm = (event: any) => setTextToEncrypt(event.target.value);
  const handleAlgorithmChange = (event: any) => setAlgorithm(event.target.value);

  const getEncryptedText = async () => {
    const encrypted = (await axios.get(`api/${algorithm}/${textToEncrypt}`)).data
    setEncryptedText(encrypted);
  }

  return (
    <div className={style.app} >
      <Form className={style.stack} >
        <Form.Group>
          <Form.Label className={style.stackItem} >Text to encrypt</Form.Label>
          <Form.Control defaultValue={textToEncrypt} onChange={handleTextToEncryptForm} className={style.stackItem} type="text" placeholder="Some text..." />
          <Form.Select className={style.stackItem} onChange={handleAlgorithmChange}>
            {algorithms.map((algorithm, index) => <option key={index} value={algorithm}>{algorithm}</option>)}
          </Form.Select>
          <Button onClick={getEncryptedText} style={{ width: "100%" }} className={style.stackItem}>Encrypt</Button>
          {
            encryptedText
              ? <>
                <Form.Label className={style.stackItem} >Encrypted text</Form.Label>
                <Form.Control value={encryptedText} className={style.stackItem} type="text" placeholder="Some text..." />
              </>
              : <></>
          }
        </Form.Group>
      </Form>
    </div>
  );
}

export default App;
