import React, { useState } from 'react';


export default function TODO() {
  const [text, settext] = useState('');
  const [capture, setcapture] = useState([]);

  const handleclick = (e) => {
    
    const result = [text, ...capture];
    //  console.log(result);
    
    setcapture(result);
    localStorage.setItem('result', JSON.stringify(result));
  };
 // console.log(capture);
  const handleChange = (e) => {
    settext(e.target.value);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <input type="text" value={text} name="name" onChange={handleChange} />
      <input onClick={handleclick} type="submit" />

      <ul>
        {capture.map((ele, id) => {
          return <li key={id}>{ele}</li>;
        })}
      </ul>
    </div>
  );
}
