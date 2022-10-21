import React, { useState } from "react";
import styled from "styled-components";
import AboutUs from "../AboutUs/AboutUs";

const Header = () => {
  const [modal, setModal] = useState(false);

  return (
    <HeaderStyle>
      <Logo>НАШ СУРГУТ</Logo>
      <Title>
        Объекты культурного наследия местного (муниципального) значения гор.
        Сургута и Сургутского района ХМАО-Югры
      </Title>
      <Button onClick={() => setModal(true)}>О нас</Button>
      {modal && <AboutUs setModal={setModal} />}
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  height: 40px;
`;

export const Logo = styled.div`
  font-size: 46px;
  font-family: "Sverdlovsk", "sans-serif";
  color: #975e08;
`;

export const Title = styled.div`
  max-width: 420px;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
`;

const Button = styled.button`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d4a96b;
  border: 1px solid #d4a96b;
  width: 180px;
  transition: 0.2s;
  background: #fff;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  font-style: italic;

  &:hover {
    background: #d4a96b;
    color: #fff;
  }
`;

export default Header;
