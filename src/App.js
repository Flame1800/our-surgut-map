import styled, { createGlobalStyle } from "styled-components";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Map from "./Components/Map/Map";
import React, { memo, useState } from "react";

function App() {
  return (
    <React.StrictMode>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <Map />
        <Footer />
      </Wrapper>
    </React.StrictMode>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  @font-face {
    // название шрифта(чтобы не запутаться лучше указать название папки со шрифтом) 
    font-family: "Sverdlovsk";
    // адрес шрифта и тип 
    src: url("/fonts/Sverdlovsk.otf") format("truetype");
    font-style: normal;
    font-weight: normal;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Raleway', sans-serif;
  }

  .marker-name {
    position: absolute;
    text-align: center;
    display: none;
    width: 200px;
    top: 50px;
    right: -160%;
    background: #fff;
    padding: 10px 5px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  .marker {
    background-image: url('/img/geo.svg');
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      .marker-name {
        display: flex !important;
      }
    }
  }

  .mapboxgl-popup-close-button {
    right: 20px !important;
    top: 30px !important;
    font-size: 30px !important;
    outline: none !important;
    border-radius: 50%;
    line-height: 0;

    &:hover {
      color: #f3a90d;
    }
  }

  .mapboxgl-popup {
    max-width: 400px !important;
    font-family: 'Raleway', sans-serif !important;
  }

  .mapboxgl-popup-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid rgba(213, 169, 107, 0.94);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 29px !important;
    padding: 30px !important;
    text-align: center;


    img {
      width: 260px;
      margin-bottom: 30px;
    }

    .title {
      font-size: 18px;
      margin-bottom: 10px;
    }

    .date {
      font-weight: 600;
      font-size: 16px;
      color: #6c6c6c;
    }

    .type {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 20px;
    }

    .address {
      font-weight: 600;
      color: #575757;
    }

  }


`;

export default memo(App);
