import React from 'react';
import ColorfulMessages from './components/ColorfulMessages';

const App = () => {
  const onClickButton = () => alert();
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
        <button onClick={onClickButton}>
          ボタン
        </button>
      </> 
    );
};

export default App;
