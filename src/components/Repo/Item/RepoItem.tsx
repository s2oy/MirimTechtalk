import React from "react";
import * as S from "./style";
import Repository from "../../../assets/svgfiles/repo.svg";
import Grabber from "../../../assets/svgfiles/grabber.svg";
import Fork from "../../../assets/svgfiles/fork.svg";
import Star from "../../../assets/svgfiles/star.svg";

const RepoItem = ({repo}: any) => {
  console.log(repo);

  return (
    <>
      <S.Wrapper>
        <S.TitleWrapper>
          <img src={Repository} />
          <S.Title>{repo[0].name}</S.Title>
          <S.Public>Public</S.Public>
          <S.Grabber src={Grabber} />
        </S.TitleWrapper>

        <S.Description>{repo[0].description}</S.Description>

        <S.LangWrapper>
          <S.Color></S.Color>
          <S.Language>{repo[0].language}</S.Language>
          <S.Fork src={Fork} />
          <S.ForkCount>{repo[0].forks_count}</S.ForkCount>
          <S.Star src={Star} />
          <S.StarCount>{repo[0].stargazers_count}</S.StarCount>
        </S.LangWrapper>
      </S.Wrapper>
    </>
  );
};

export default RepoItem;
