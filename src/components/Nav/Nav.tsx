import React from "react";
import * as S from "./style";
import styled from "styled-components";
import Overview from "../../assets/svgfiles/overview.svg";
import Repository from "../../assets/svgfiles/repo.svg";
import Project from "../../assets/svgfiles/projects.svg";
import Package from "../../assets/svgfiles/packages.svg";
import Star from "../../assets/svgfiles/star.svg";

const Navi = styled.div`
  display: inline-block;
  padding: 10px 18px 14px 12px;
  margin: 28px 0 0 0;

  span {
    margin-left: 8px;
    font-size: 14px;
    /* letter-spacing: 0.2px; */
  }

  img {
    vertical-align: middle;
    margin-left: 6px;
    path {
      fill: #596069;
    }
  }
  &:hover {
    border-bottom: 2px solid #d4d4d6;
  }

  &.check {
    border-bottom: 2px solid #ff8737;
    margin-left: 440px;

    span {
      font-weight: 700;
      letter-spacing: -0.2px;
    }
  }
`;

const Nav = () => {
  return (
    <>
      <S.Wrapper>
        <S.NavWrapper>
          <Navi className="check">
            <img src={Overview} />
            <span>Overview</span>
          </Navi>
          <Navi>
            <img src={Repository} />
            <span>Repositories</span>
          </Navi>
          <Navi>
            <img src={Project} />
            <span>Projects</span>
          </Navi>
          <Navi>
            <img src={Package} />
            <span>Packages</span>
          </Navi>
          <Navi>
            <img src={Star} />
            <span>Stars</span>
          </Navi>
        </S.NavWrapper>
      </S.Wrapper>
    </>
  );
};

export default Nav;
