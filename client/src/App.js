import React, {useState} from 'react';
import Dropdown from './components/Dropdown';
import './styles/app.css';

const copyFors = ['Website','Mobile Application','Software', 'Presentation', 'Social Media Post'];
const companyNames = ['BrainWrite'];
const copyTypes = ['Heading', 'Sub-heading', 'Product Description', 'Customer Review'];
const tones = ['Formal', 'Informative', 'Persuasive'];

function App(){
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };

  return (
    <div>
      <label className='s-label'>Copy For</label>
      <div>
        <Dropdown items={copyFors}/>
      </div>
      <label className='s-label'>Company/Product Name</label>
      <div>
        <Dropdown items={companyNames}/>
      </div>
      <label className='s-label'>Copy Type</label>
      <div>
        <Dropdown items={copyTypes}/>
      </div>
      <label className='s-label'>Short Description</label>
      {/* <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      <label className='s-label'>Tone</label>
      <div>
        <Dropdown items={tones}/>
      </div>
      <button onClick={handleSubmit}>Write For Me</button>
      <div>{response}</div> */}
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
      <div>{response}</div>
    </div>
  );
}

export default App