import React, { useRef } from 'react';
import logo from './assets/images/react-logo.png';

export default function App() {
  const imgRef = useRef(10);

  const onKeyDownInput = (e) => {
    console.log('keydown:' + e.target.value);
  };

  const onKeyUpInput = (e) => {
    if (e.key === 'Enter') {
      console.log('keyup:' + e.target.value);
    }
  };

  const onChangeInput = (e) => {
    console.log('change:' + e.target.value);
  };

  const onFocusInput = (e) => {
    console.log('focus');
  };

  const onBlurInput = (e) => {
    console.log('Blur');
  };

  const onMouseOverImg = (e) => {
    console.log(imgRef.current);
    const offsetTop = imgRef.current.offsetTop;
    const offsetLeft = imgRef.current.offsetLeft;
    console.log(
      'mouseover',
      `x=${e.clientX - offsetLeft}, y=${e.clientY - offsetTop}`,
    );
  };

  const onMouseMoveImg = (e) => {
    const offsetTop = imgRef.current.offsetTop;
    const offsetLeft = imgRef.current.offsetLeft;
    console.log(
      'mousemove',
      `x=${e.clientX - offsetLeft}, y=${e.clientY - offsetTop}`,
    );
  };
  const onMouseOutImg = (e) => {
    console.log('mouseout', `x=${e.clientX}, y=${e.clientY}`);
  };

  const onMouseDownImg = (e) => {
    console.log('mouseDown', `x=${e.clientX}, y=${e.clientY}`);
  };

  const onMouseUpImg = (e) => {
    console.log('mouseUp', `x=${e.clientX}, y=${e.clientY}`);
  };

  const onClickImg = (e) => {
    console.log('Click', `x=${e.clientX}, y=${e.clientY}`);
  };

  const onDoubleClickImg = (e) => {
    console.log('dblclick', `x=${e.clientX}, y=${e.clientY}`);
  };

  return (
    <>
      <h2>Event Handler 예제</h2>
      <input
        type="text"
        placeholder="메세지를 입력 하세요"
        onKeyDown={onKeyDownInput}
        onKeyUp={onKeyUpInput}
        onChange={onChangeInput}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
      />
      <br />
      <br />
      <img
        ref={imgRef}
        style={{
          cursor: 'pointer',
          width: 190,
          border: '1px solid #ccc',
        }}
        src={logo}
        onMouseOver={onMouseOverImg}
        onMouseMove={onMouseMoveImg}
        onMouseOut={onMouseOutImg}
        onMouseDown={onMouseDownImg}
        onMouseUp={onMouseUpImg}
        onClick={onClickImg}
        onDoubleClick={onDoubleClickImg}
      />
    </>
  );
}
