import React, { Component, useCallback, useState, useRef } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import { Lv } from './Lv';

interface AppProps { }
interface AppState {
  name: string;
}

const App = () => {
//const App<AppProps, AppState> = () => {

  const lv = useRef(null);
  const [text, setText] = useState('');
  
  const appendChild = (e) => {
    lv.current.dispatchEvent(new CustomEvent('An item arrives', {detail: {}}));
  };

  return (
    <div>
      <button onClick={(e) => {appendChild(e);}}>trigger</button>
      <Hello name='' />
      <p>
        Start editing to see some magic happen :)
      </p>
      <Lv ref={lv} text={text} />
    </div>
  );
}

render(<App />, document.getElementById('root'));

/*
`
App: ListView
  Lv: list
`

*/
