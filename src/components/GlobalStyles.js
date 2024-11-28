import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #00FFFF, #ADD8E6); /* Aqua and Light Blue gradient */
    color: #fff;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
  }

  h1 {
    text-align: center;
    margin-top: 30px;
    font-size: 3em;
    color: #ffffff;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  }

  input {
    padding: 10px;
    font-size: 1.2em;
    border-radius: 10px;
    border: none;
    margin: 10px;
    width: 200px;
    outline: none;
    text-align: center;
  }

  button {
    padding: 10px;
    font-size: 1.2em;
    background-color: #20B2AA; /* Light Sea Green (Aqua shade) */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  button:hover {
    background-color: #3CB371; /* Medium Sea Green */
    transform: scale(1.05); /* Slight scale-up effect */
  }

  .weather-container {
    text-align: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 15px;
    margin-top: 20px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  }
`;

export default GlobalStyles;
