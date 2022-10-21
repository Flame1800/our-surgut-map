import React from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";

const persons = [
  {
    title: "Назаренко Т.А.",
    subtitle: "преподаватель истории и обществознания (научный руководитель)",
  },
  {
    title: "Славинских А.О.",
    subtitle: "преподаватель истории и обществознания (научный руководитель)",
  },
  {
    title: "Мухаметшафиков Р.Р.",
    subtitle:
      "преподаватель кафедры информационных систем и программирования (разработчик сайта)",
  },
  {
    title: "Осетров Дмитрий",
    subtitle: "студент гр. СиСа 21/9-1 (Наш теоретик)",
  },
  {
    title: "Величко Валерия",
    subtitle: "студентка гр. ГД 21/9-1 (Наш дизайнер сайта)",
  },
  {
    title: "Якимов Даниил",
    subtitle: "студент гр. НКС – 22/9-1 (Наш создатель 3D-макетов)",
  },
];

const AboutUs = ({ setModal }) => {
  return (
    <Wrapper>
      <Close
        onClick={() => setModal(false)}
        type="button"
        aria-label="Close popup"
        aria-hidden="true"
      >
        ×
      </Close>
      <Content>
        <MapLogo>НАШ СУРГУТ</MapLogo>
        <MapTitle>
          Объекты культурного наследия местного (муниципального) значения гор.
          Сургута и Сургутского района ХМАО-Югры
        </MapTitle>
        <Text>Команда СИЭУиП</Text>
        <List>
          {persons.map(({ title, subtitle }) => {
            return (
              <PersonCard>
                <PersonName>{title}</PersonName>
                <SubTitle>{subtitle}</SubTitle>
              </PersonCard>
            );
          })}
        </List>
        <Footer />
      </Content>
    </Wrapper>
  );
};

const Close = styled.button`
  right: 60px;
  top: 50px;
  font-size: 50px;
  outline: none;
  border-radius: 50%;
  line-height: 0;
  position: absolute;
  border: none;
  cursor: pointer;

  &:hover {
    color: #f3a90d;
  }
`;

const MapLogo = styled.div`
  font-size: 80px;
  margin-bottom: 30px;
  font-family: "Sverdlovsk", "sans-serif";
  color: #975e08;
`;

const MapTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  max-width: 600px;
  margin-bottom: 40px;
`;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background: #fff;
  display: flex;
  justify-content: center;
  z-index: 100;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 40px;
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #1e1e1e;
`;

const List = styled.div`
  margin-top: 20px;
  text-align: left;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const PersonCard = styled.div`
  line-height: 30px;
  background: #fff;
  border: 1px solid rgba(213, 169, 107, 0.94);
  border-radius: 29px !important;
  padding: 30px !important;
  text-align: center;
  max-width: 400px;
  width: 100%;
  margin: 10px;
`;

const PersonName = styled.div`
  font-size: 21px;
  font-weight: 500;
`;

const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
`;

export default AboutUs;
