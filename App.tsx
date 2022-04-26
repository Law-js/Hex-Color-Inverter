import './style.css';
import React from 'react';
export default function App() {
  const invertHex = (hex: string) => {
    if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
    }

    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
    }

    let r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
      g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
      b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);

    console.log(
      ':: original hex',
      hex,
      ':: invert hex',
      '#' + padZero(r) + padZero(g) + padZero(b)
    );
    return '#' + padZero(r) + padZero(g) + padZero(b);
  };

  const padZero = (str: string, len: number = 2) => {
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
  };
  return (
    <div className="App">
      <div
        style={{
          width: '50%',
          height: '100vh',
          backgroundColor: '#2b8515',
          color: invertHex('#2b8515'),
        }}
      >
        Hello World !
      </div>
      <div
        style={{
          width: '50%',
          height: '100vh',
          backgroundColor: '#903350',
          color: invertHex('#903350'),
        }}
      >
        Hello upside down world !
      </div>
    </div>
  );
}
