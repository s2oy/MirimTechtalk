import React from "react";
import * as S from "./style";
import Repository from "../../../assets/svgfiles/repo.svg";

const RepoItem = () => {
  return (
    <>
      <S.Wrapper>
        <img src={Repository} />

        <S.TitleWrapper>
          <S.Title>title test</S.Title>
          <S.Public>Public</S.Public>
        </S.TitleWrapper>

        <S.Description>Repository Item Description test</S.Description>

        <S.LangWrapper>
          <S.Color></S.Color>
          <S.Language>Javascript</S.Language>
        </S.LangWrapper>
      </S.Wrapper>
    </>
  );
};

export default RepoItem;
