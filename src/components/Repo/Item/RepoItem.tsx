import React from "react";
import * as S from "./style";
import Repository from "../../../assets/svgfiles/repo.svg";
import Grabber from "../../../assets/svgfiles/grabber.svg";
import Fork from "../../../assets/svgfiles/fork.svg";
import Star from "../../../assets/svgfiles/star.svg";

const RepoItem = ({repo}: any) => {
  // console.log(repo);
  console.log(repo.name, repo.language);

  const LangColor: any = {
    Java: "#b07219",
    TypeScript: "#2b7489",
    Python: "#3572A5",
    Javascript: "#f1e05a",
    SASS: "#c6538c",
    HTML: "#e34c26;",
    default: "none",
  };

  return (
    <>
      <S.Wrapper>
        <S.TitleWrapper>
          <img src={Repository} />
          <S.Title>{repo.name}</S.Title>
          <S.Public>Public</S.Public>
          <S.Grabber src={Grabber} />
        </S.TitleWrapper>

        <S.Description>{repo?.description}</S.Description>

        <S.BottomWrapper>
          {repo.language && (
            <S.LangWrapper>
              <S.Color color={LangColor[repo.language]}></S.Color>
              <S.Language>{repo.language}</S.Language>
            </S.LangWrapper>
          )}

          <S.ForkWrapper>
            <S.Fork src={Fork} />
            <S.ForkCount>{repo?.forks_count}</S.ForkCount>
          </S.ForkWrapper>

          <S.StarWrapper>
            <S.Star src={Star} />
            <S.StarCount>{repo.stargazers_count}</S.StarCount>
          </S.StarWrapper>
        </S.BottomWrapper>
      </S.Wrapper>
    </>
  );
};

export default RepoItem;
