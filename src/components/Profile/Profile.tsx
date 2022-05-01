import React from "react";
import * as S from "./style";
import Follow from "../../assets/svgfiles/follow.svg";

const Profile = ({user}: {user: any}) => {
  console.log(user);
  return (
    <>
      <S.Wrapper>
        <S.ProfileImg src={user.avatar_url} />
        <S.UserWrapper>
          <S.Name>{user.name}</S.Name>
          <S.Ename>{user.login}</S.Ename>
          <S.Description>{user.bio}</S.Description>
        </S.UserWrapper>
        <S.FollowWrapper>
          <img src={Follow} />
          <span className="num">{user.followers}</span>
          <span className="follow">followers ·</span>
          <span className="num">{user.following}</span>
          <span className="follow">following</span>
        </S.FollowWrapper>
      </S.Wrapper>
    </>
  );
};

export default Profile;
