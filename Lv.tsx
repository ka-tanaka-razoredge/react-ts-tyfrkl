import React, { useState, useRef, useEffect } from 'react';


interface LvProps {
  text: string,
};

export const Lv = React.forwardRef((props: LvProps, ref) => {

  // [変数, 変数に値をセットする関数]
  const [text, setText] = useState('');

  addEventListener('An item arrives', (e) => {
  });

  useEffect(() => {
    ref.current.addEventListener('An item arrives', (e) => {
      console.log(e);
    });
  }, []);

  return (
    <div ref={ref} style={{border: '1px solid black'}}>
      {props.text}
    </div>
  );
});

/*

複数のrefを設定する

*/