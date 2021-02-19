import React, { useState, useEffect } from 'react';
// import rgbToHex from './utils';
import { IoMdCopy } from 'react-icons/io';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  //every item would be separated by coma
  const bcg = rgb.join(',');
  // const hexColor = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      <button
        className="copy-btn"
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hexValue);
        }}
      >
        <IoMdCopy size={30} className={`copy-btn ${index > 10 && 'light'}`} />
      </button>

      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
