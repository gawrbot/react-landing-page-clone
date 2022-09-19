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

  img {
    display: flex;
    justify-content: flex-start;
    width: 112px;
    height: 39px;
  }

  nav {
    width: 556px;
    height: 48px;

    a {
      padding: 32px 12px;
      width: 99px;
      height: 24px;
    }
  }
`;

const buttonStyles = css``;

function App() {
  return (
    <div>
      <header css={headerStyles}>
        <img
          src="https://hagrid.io/assets/images/hagrid-logo-alt.svg"
          alt="logo"
        />
        <nav>
          <a href="abc">Integrations</a>
          <a href="abc">Pricing</a>
          <a href="abc">LogIn</a>
          <a href="abc">Try For Free</a>
        </nav>
      </header>
    </div>
  );
}

export default App;
