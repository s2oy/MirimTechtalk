import React, {useState, useEffect} from "react";
import * as S from "./style";
import RepoItem from "./Item/RepoItem";

const Repo = ({repo}: any) => {
  repo = repo.slice(0, 6);
  return (
    <>
      <S.TopWrapper>
        <span className="pin">Pinned</span>
        <span className="costom">Costomize your pins</span>
      </S.TopWrapper>

      <S.Wrapper>
        {repo?.map((repo: any) => (
          <RepoItem repo={repo} />
        ))}
      </S.Wrapper>
    </>
  );
};

export default Repo;
