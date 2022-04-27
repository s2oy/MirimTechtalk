import React from "react";
import * as S from "./style";
import Logo from "../../assets/svgfiles/logo.svg";
import Alarm from "../../assets/svgfiles/alarm.svg";
import Plus from "../../assets/svgfiles/plus.svg";

const Header = () => {
  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <S.Icon src={Logo} />
        <S.Search placeholder="Search or jump to..." />
        <button>/</button>
      </S.SearchWrapper>

      <S.NavWrapper>
        <span>Pull requests</span>
        <span>Issues</span>
        <span>Marketplace</span>
        <span>Explore</span>
      </S.NavWrapper>

      <S.ProfileWrapper>
        <S.Alarm src={Alarm} />
        <S.Plus src={Plus} />
        <S.Profile></S.Profile>
      </S.ProfileWrapper>
    </S.Wrapper>
  );
};

export default Header;
