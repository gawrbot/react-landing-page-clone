/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const headerStyles = css`
  background-color: white;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 96px;
  padding-left: 96px;
  box-shadow: 2px 2px 10px lightgrey;
  width: 100vw;
  height: 80px;
  text-size-adjust: 100%;
  z-index: 2;

  img {
    display: flex;
    justify-content: flex-start;
    width: 112px;
    height: 39px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      padding: 12px 32px;
      text-decoration: none;
      text-align: center;
      color: #000;
      white-space: nowrap;
      font-size: 16px;

      line-height: 24px;
      border-radius: 8px;
      :hover {
        transform: matrix(1, 0, 0, 1, 0, -6);
        background-color: lightgrey;
      }
    }
    a:last-child {
      border-radius: 8px;
      border: solid 0px;
      color: white;
      background-color: black;
      box-shadow: 6px 6px rgba(0, 0, 0, 0.3);
      font-size: 700;
      font-weight: 700;
      :hover {
        transform: matrix(1, 0, 0, 1, 0, -6);
      }
    }
  }
`;

const introStyles = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  vertical-align: middle;
  padding: 100px 24px 78px 24px;
  width: 100vw;
`;

const imageLeftStyles = css`
  position: absolute;
  top: 112px;
  left: -32px;
  bottom: 884.771px;
  width: 240px;
`;

const mainHeadingStyles = css`
  font-size: 72px;
  font-weight: 800;
  /* width: 672px;
  height: 144px; */
  line-height: 72px;
  text-align: center;
  display: block;
`;

const imageRightStyles = css`
  position: absolute;
  top: 112px;
  right: -48px;
  width: 240px;
  bottom: 931px;
`;

const chatBoxStyles = css`
  border-radius: 60px;
  width: 54px;
  height: 54px;
  position: fixed;
  bottom: 0px;
  right: 0px;
  margin-right: 24px;
  margin-bottom: 20px;
`;

function App() {
  return (
    <>
      <header css={headerStyles}>
        <img
          src="https://hagrid.io/assets/images/hagrid-logo-alt.svg"
          alt="logo"
        />
        <nav>
          <a href="abc">Integrations</a>
          <a href="abc">Pricing</a>
          <a href="abc">Log In</a>
          <a href="abc">Try For Free</a>
        </nav>
      </header>

      <div css={introStyles}>
        <img
          css={imageLeftStyles}
          alt=""
          src="https://hagrid.io/assets/images/scribble-3.svg"
        />
        <img
          css={imageRightStyles}
          alt=""
          src="https://hagrid.io/assets/images/scribble-2.svg"
        />
        <h1 css={mainHeadingStyles}>
          Social Q&A for <br />
          any website
        </h1>
      </div>
      <div>
        <img
          css={chatBoxStyles}
          alt="Chatbot"
          src="https://image.crisp.chat/process/thumbnail/?url=https%3A%2F%2Fstorage.crisp.chat%2Fusers%2Favatar%2Foperator%2Fa67e03ac6c9f6000%2Fvivek_rk5ivb.png&width=240&height=240&1662292816038"
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
