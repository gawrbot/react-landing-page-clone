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
  box-shadow: 0.5px 0.5px 10px rgb(170, 170, 170);
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
    margin-right: 10px;
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
      background-color: #28231d;
      box-shadow: 6px 6px rgba(0, 0, 0, 0.3);
      font-size: 700;
      font-weight: 800;
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
  padding: 160px 20px 78px 20px;
  width: 100vw;
`;

const imageLeftStyles = css`
  position: absolute;
  top: 190px;
  left: -32px;
  bottom: 884.771px;
  width: 240px;
`;

const mainHeadingStyles = css`
  font-size: 72px;
  font-weight: 800;
  line-height: 72px;
  text-align: center;
  display: block;
`;

const introSentenceStyles = css`
  font-weight: 200;
  line-height: 0px;
  font-size: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: block;
  margin: 0 auto;
`;

const introButton = css`
  margin-top: 60px;
  margin-bottom: 30px;
  padding: 26px 48px;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  font-size: 18px;
  line-height: 24px;
  border-radius: 8px;
  border: solid 0px;
  color: white;
  background-color: #28231d;
  box-shadow: 8px 8px rgba(0, 0, 0, 0.3);
  font-weight: 800;
  :hover {
    transform: matrix(1, 0, 0, 1, 0, -6);
  }
`;

const trialStyles = css`
  color: #28231d;
  font-weight: 400;
  line-height: 0px;
  font-size: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: block;
  margin: 0 auto;
`;

const imageRightStyles = css`
  position: absolute;
  top: 190px;
  right: -40px;
  width: 240px;
  bottom: 931px;
`;

const examplesStyles = css`
  display: flex;
  justify-content: space-around;
  height: 620px;
  width: auto;
  align-items: center;
  img {
    box-shadow: 0.5px 0.5px 10px rgb(170, 170, 170);
    border-radius: 20px;
    margin: 0px 20px;
  }
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

      <section css={introStyles}>
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
        <p css={introSentenceStyles}>No-code widget, to get visitors talking</p>
        <a css={introButton} href="abc">
          Try For Free
        </a>
        <p css={trialStyles}>14 day trial. No credit card needed</p>
      </section>
      <section css={examplesStyles}>
        <img
          css={examplesStyles}
          alt="use example boutique"
          src="https://hagrid.io/assets/images/hero-img-1.svg"
        />
        <img
          css={examplesStyles}
          alt="use example open analytics"
          src="https://hagrid.io/assets/images/hero-img-2.svg"
        />
        <img
          css={examplesStyles}
          alt="use example daily planet"
          src="https://hagrid.io/assets/images/hero-img-3.svg"
        />
      </section>
      <div>
        <img
          css={chatBoxStyles}
          alt="Chatbot"
          src="https://image.crisp.chat/process/thumbnail/?url=https%3A%2F%2Fstorage.crisp.chat%2Fusers%2Favatar%2Foperator%2Fa67e03ac6c9f6000%2Fvivek_rk5ivb.png&width=240&height=240&1662292816038"
        />
      </div>
    </>
  );
}

export default App;
