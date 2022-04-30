import React from "react";
import * as S from "./style";
import Follow from "../../assets/svgfiles/follow.svg";

const Profile = ({user}: {user: any}) => {
  return (
    <>
      <S.Wrapper>
        <S.ProfileImg />
        <S.UserWrapper>
          <S.Name>백서연</S.Name>
          <S.Ename>seoyeon-baek</S.Ename>
          <textarea id="description" max-length="160" readOnly>
            안녕하십니까
          </textarea>
        </S.UserWrapper>
        <S.FollowWrapper>
          <img src={Follow} />
          <span className="num">53</span>
          <span className="follow">followers ·</span>
          <span className="num">53</span>
          <span className="follow">following</span>
        </S.FollowWrapper>
      </S.Wrapper>
    </>
  );
};

export default Profile;
