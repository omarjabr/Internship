import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";
import { Marginer } from "../marginer";

const NavbarContainer = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  padding: 0 40px;
  align-items: center;
  justify-content: space-between;
`;

const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const AnchorLink = styled.a`
  font-size: 13px;
  color: #fff;
  cursor: pointer;
  text-direction: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.6);
  }
`;

const Separator = styled.div`
  height: 40%;
  width: 1px;
  background-color: #fff;
`;

export function Navabar(props) {
  return (
    <NavbarContainer>
      <BrandLogo logoSize={35} textSize={30} />
      <AccessibilityContainer>
        <AnchorLink>Specialists Portal</AnchorLink>
        <Marginer direction="horizontal" margin={12} />
        <Separator />
        <Marginer direction="horizontal" margin={12} />
        <Button size={12}>Register</Button>
        <Marginer direction="horizontal" margin={12} />
        <AnchorLink>Login</AnchorLink>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
