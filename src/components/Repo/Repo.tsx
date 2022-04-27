import React from "react";
import * as S from "./style";
import styled from "styled-components";
import Overview from "../../assets/svgfiles/overview.svg";
import Repository from "../../assets/svgfiles/repo.svg";
import Project from "../../assets/svgfiles/projects.svg";
import Package from "../../assets/svgfiles/packages.svg";
import Star from "../../assets/svgfiles/star.svg";

const Nav = styled.div`
  display: inline-block;
  padding: 10px 28px 14px 12px;
  margin: 28px 0 0 0;

  span {
    margin-left: 10px;
    font-size: 15px;
    letter-spacing: 0.2px;
  }

  img {
    vertical-align: middle;
    path {
      fill: #596069;
    }
  }
  &:hover {
    border-bottom: 2px solid #d4d4d6;
  }

  &.check {
    border-bottom: 2px solid #ff8737;
    margin-left: 460px;

    span {
      font-weight: 700;
    }
  }
`;

const Repo = () => {
  return (
    <>
      <S.Wrapper>
        <S.NavWrapper>
          <Nav className="check">
            <img src={Overview} />
            <span>Overview</span>
          </Nav>
          <Nav>
            <img src={Repository} />
            <span>Repositories</span>
          </Nav>
          <Nav>
            <img src={Project} />
            <span>Projects</span>
          </Nav>
          <Nav>
            <img src={Package} />
            <span>Packages</span>
          </Nav>
          <Nav>
            <img src={Star} />
            <span>Stars</span>
          </Nav>
        </S.NavWrapper>
      </S.Wrapper>
    </>
  );
};

export default Repo;
