/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          color: #000;
          font-family: 'Be Vietnam Pro', sans-serif;
          font-size: 16px;
          background-color: rgba(253, 239, 239, 1);
          background-image: url('https://hagrid.io/static/media/texture.69b7de99892a7b6af46c.png');
          font-weight: 700;
          line-height: 24px;
          overflow-x: hidden;
          position: relative;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
