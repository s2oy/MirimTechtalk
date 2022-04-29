import React, {useState, useEffect} from "react";
import * as S from "./style";
import RepoItem from "./Item/RepoItem";

const Repo = ({repo}: any) => {
  return (
    <>
      <S.Wrapper>
        <RepoItem repo={repo} />
      </S.Wrapper>
    </>
  );
};

export default Repo;
