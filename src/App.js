import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateText1, updateText2 } from './actions/textAction';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const dispatch = useDispatch();
  const text1 = useSelector((state) => state.text1);
  const text2 = useSelector((state) => state.text2);

  const handleTextField1Change = (e) => {
    setInput1(e.target.value);
  };

  const handleTextField2Change = (e) => {
    setInput2(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(updateText1(input1));
    dispatch(updateText2(input2));
    console.log('Redux Store State:', { text1, text2 });
  };

  return (
    <div style={{ padding: '20px' }}>
      <div>
        <label>Text Field 1: </label>
        <input type="text" value={input1} onChange={handleTextField1Change} />
      </div>
      <div>
        <label>Text Field 2: </label>
        <input type="text" value={input2} onChange={handleTextField2Change} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      
    </div>
  );
}

export default App;
