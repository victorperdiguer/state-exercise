import React, { useState } from 'react';

const Switch = () => {
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState('light');

  const modeDark = () => {
    setCounter(counter+1);
    setTheme('dark')
  }
  const modeLight = () => {
    setCounter(counter+1);
    setTheme('light')
  }

  return (
    <div className={'switch' + " " + theme}>
      <h2>Theme picker: {theme}</h2>
      <h4>Times changed: {counter}</h4>
      <button onClick={modeDark}>Dark mode</button>
      <button onClick={modeLight}>Light mode</button>
    </div>
  )
}

export default Switch;
