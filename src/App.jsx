import React, { useEffect, useState } from 'react';
import { ColorfulMessages } from './components/ColorfulMessages';

const App = () => {
  console.log('FIRST!');
  const [num, setNum] = useState(0);
  const [faceshowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwichShowFlag = () => {
    setFaceShowFlag(!faceshowFlag);
  };
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceshowFlag || setFaceShowFlag(true);
      } else {
        faceshowFlag && setFaceShowFlag(false);
      }
    }  
  }, [num]);

  return(
      <>
        <h1 style={{ color: 'red' }}>こんにちは</h1>
        <ColorfulMessages color="blue">
          お元気ですか？
        </ColorfulMessages>
        <ColorfulMessages color="pink" font="bold">
          元気だよ！
        </ColorfulMessages>
        <p></p>
        <button onClick={onClickCountUp}>
          COUNT UP!!
        </button>
        <br />
        <button onClick={onClickSwichShowFlag}>
          on/off
        </button>
        <p>{num}</p>
        {faceshowFlag && <p>🤪</p>}
        
      </> 
    );
};

export default App;
