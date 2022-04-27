import React from "react";
import * as S from "./style";
import Repository from "../../../assets/svgfiles/repo.svg";

const RepoItem = () => {
  return (
    <>
      <S.Wrapper>
        <img src={Repository} />
        <S.Title>title test</S.Title>
        <S.Public>Public</S.Public>
      </S.Wrapper>
    </>
  );
};

export default RepoItem;
