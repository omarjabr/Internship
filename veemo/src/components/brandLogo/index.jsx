import React from "react";
import styled from "styled-components";

import LogoImg from "../../images/logos/logo.png";
import { Link } from "react-router-dom";

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "5em")};
  height: ${({ size }) => (size ? size + "px" : "5em")};
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "55px")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: 700;
  margin-left: 7px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export function BrandLogo(props) {
  const { logoSize, textSize, color, hideLogo } = props;

  return (
    <BrandLogoContainer>
      {!hideLogo && (
        <Link to="/">
          <LogoImage size={logoSize}>
            <img src={LogoImg} alt="Servycing logo" />
          </LogoImage>
        </Link>
      )}
      <StyledLink to="/">
        <LogoTitle size={textSize} color={color}>
          Veemo
        </LogoTitle>
      </StyledLink>
    </BrandLogoContainer>
  );
}