import { apply, theme } from "twind";
import { css } from "twind/css#css_directive";

export const Colors = {
  primary: "#EF233C",
  black: "#101119",
  secondary: "#7C8AA2",
  blue: {
    200: "#dbeafe",
    500: "#3b82f6",
    900: "#2B2D42",
  },
  mainBg: "#EDF2F4",
  white: "#ffffff",
  darkBg: "#13111a",
  yellow: {
    200: "#FFFAD6",
    500: "#F5D800",
  },
  red: {
    200: "#FADBDE",
    500: "#E42535",
  },
  green: {
    200: "#dbfedb",
    500: "#77d124",
  },
};

export const GlobalStyle = css`
  ${{
  "@import":
    'url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap")',
  "@font-face": [
    {
      fontFamily: "Montserrat",
    },
  ],
}}
  html {
    width: 100%;
    overflow-x: hidden;
  }
  body {
    font-family: 'Montserrat';
    background-color: ${theme(`colors.mainBg`)};
    width: 100%;
    ${apply`dark:bg-darkBg text-blue-900 dark:text-white`};
    position: relative;
    overflow: hidden;
  }

  .figure {
    position: absolute;
    top: -45vh;
    right: -15vw;
    width: 50vw;
    max-width: 720px;
    height: auto;
    z-index: 9;
    @media (max-width: 960px) {
      top: -150px;
    }

    @media (max-width: 600px) {
      width: 75%;
      top: -180px;
      right: -200px;
    }

    @media (max-width: 450px) {
      right: -80px;
    }
  }
`;
