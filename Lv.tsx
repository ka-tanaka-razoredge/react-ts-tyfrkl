import React, { useState } from 'react';


interface LvProps {
  text: string,
};

export const Lv = React.forwardRef((props: LvProps, ref: React.Ref<HTMLDivElement>) => {

  // [変数, 変数に値をセットする関数]
  const [text, setText] = useState('');

  return (
    <div ref={ref} style={{border: '1px solid black'}}>
      {props.text}
    </div>
  );
});