import React from "react";
import * as S from "./style";
import styled from "styled-components";
import Overview from "../../assets/svgfiles/overview.svg";
import Repository from "../../assets/svgfiles/repo.svg";
import Project from "../../assets/svgfiles/projects.svg";
import Package from "../../assets/svgfiles/packages.svg";
import Star from "../../assets/svgfiles/star.svg";
import RepoItem from "./Item/RepoItem";

const Nav = styled.div`
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
        <RepoItem />
      </S.Wrapper>
    </>
  );
};

export default Repo;
