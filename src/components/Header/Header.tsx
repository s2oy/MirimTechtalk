import React from "react";
import * as S from "./style";
import Icon from "../../assets/svgfiles/logo.svg";

const Header = () => {
  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <S.Icon src={Icon} />
        <S.Search placeholder="Search or jump to..." />
        <button>/</button>
      </S.SearchWrapper>

      <S.NavWrapper>
        <span className="nav">Pull requests</span>
        <span className="nav">Issues</span>
        <span className="nav">Marketplace</span>
        <span className="nav">Explore</span>
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default Header;
