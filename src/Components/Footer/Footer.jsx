import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <img src="/img/surgut.svg" alt="Герб сургута" />
      <img src="/img/surgut-district.svg" alt="Герб сургского района" />
      <img src="/img/sielom.svg" alt="Герб института СИЭУиП" />
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  position: absolute;
  bottom: 30px;
  right: 30px;

  img {
    margin: 0 10px;
  }
`;

export default Footer;
