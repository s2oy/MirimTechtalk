import React from "react";
import * as S from "./style";

const Profile = ({user}: {user: any}) => {
  return (
    <>
      <S.Wrapper>
        <S.ProfileImg></S.ProfileImg>
      </S.Wrapper>
    </>
  );
};

export default Profile;
