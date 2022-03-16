import React from "react";
import useRandom from "../../hooks/useRandom";
import styled from "styled-components";
import Dice from "../../images/icon-dice.svg";
import DividerMobile from "../../images/pattern-divider-mobile.svg";
import DividerDesktop from "../../images/pattern-divider-desktop.svg";

const MainCard = styled.article`
  background-color: var(--Dark-Grayish-Blue);
  color: var(--Light-Cyan);
  margin: 5rem 2rem;
  @media (min-width: 1000px) {
    margin: 20rem 20rem;
  }
  padding: 3rem 2rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
const IdData = styled.span`
  color: var(--Neon-Green);
  font-size: 18px;
`;
const Info = styled.h1`
  margin: 15px 0 10px 0;
  text-align: center;
`;
const DivImage = styled.div`
  background-color: var(--Neon-Green);
  position: relative;
  top: 32px;
  padding: 2rem;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: all ease-in-out 0.6s;
  &:hover {
    box-shadow: 0px 0px 30px 0px var(--Neon-Green);
    transform: rotate(180deg);
  }
`;
const Card = () => {
  const [data, RandomAdvice] = useRandom();
  return (
    <MainCard>
      <IdData>Advice #{data.id}</IdData>
      <Info id="info">{data.advice}</Info>

      <picture>
        <source srcSet={DividerDesktop} media="min-width: 1000px;" />
        <img src={DividerMobile} alt="divider" />
      </picture>
      <DivImage onClick={RandomAdvice}>
        <img onClick={RandomAdvice} src={Dice} alt="dice" />
      </DivImage>
    </MainCard>
  );
};

export default Card;
