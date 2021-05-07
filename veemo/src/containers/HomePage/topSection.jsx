import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../../components/brandLogo";
import { Marginer } from "../../components/marginer";
import { Button } from "../../components/button";

import TopSectionBackgroundImg from "../../images/landing-page.jpg";
import BestSpecialistsImg from "../../images/Work only with the best.png";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 650px;
  background: url(${TopSectionBackgroundImg});
  background-position: 0px -140px;
  background-size: cover;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(38, 70, 83, 0.8);
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StandoutImage = styled.div`
  width: 40em;
  height: 30em;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 500;
  font-size: 38px;
`;

export function TopSection(props) {
  const { children } = props;

  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
          <LogoContainer>
            <BrandLogo logoSize={60} textSize={55} />
            <Marginer direction="vertical" margin={8} />
            <SloganText>Find the right specialist</SloganText>
            <SloganText>For the right job</SloganText>
            <Marginer direction="vertical" margin={15} />
            <Button>Join Now</Button>
          </LogoContainer>
          <StandoutImage>
            <img src={BestSpecialistsImg} alt="best in the field" />
          </StandoutImage>
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}
