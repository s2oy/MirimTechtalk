import React from "react";
import * as S from "./style";
import Icon from "../../assets/svgfiles/logo.svg";

const Header = () => {
  return (
    <S.Wrapper>
      <S.SearchBar>
        <S.Icon src={Icon} />
        <S.Search placeholder="Search or jump to..." />
        <button>/</button>
      </S.SearchBar>
    </S.Wrapper>
  );
};

export default Header;
