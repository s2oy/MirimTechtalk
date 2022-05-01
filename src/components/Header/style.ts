import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 62px;
  background-color: #24292f;
  position: relative;
`;

export const Icon = styled.img`
  width: 32px;
  height: 62px;
  margin-left: 32px;
`;

export const SearchWrapper = styled.div`
  button {
    width: 18px;
    height: 19px;
    position: absolute;
    left: 327px;
    top: 21px;
    background: none;
    color: #8e9294;
    border: 1px solid #57606a;
    border-radius: 3px;
  }
`;

export const Search = styled.input`
  width: 258px;
  height: 28px;
  background: none;
  border-radius: 6px;
  outline: none;
  border: 1px solid #57606a;
  padding: 0 0 0 12px;
  position: absolute;
  margin: 16px 0 0 15px;
  color: white;

  ::placeholder {
    color: #c5c6c8;
    font-size: 14px;
    /* font-weight: 700; */
  }
`;

export const NavWrapper = styled.div`
  position: absolute;
  display: flex;
  /* background-color: red; */

  top: 25px;
  left: 350px;
  span {
    color: white;
    font-size: 14px;
    font-weight: 700;
    margin-left: 18px;
    letter-spacing: -0.2px;

    cursor: pointer;
    &:hover {
      color: #c5c6c8;
    }
  }
`;

export const ProfileWrapper = styled.div`
  position: absolute;
  display: flex;
  /* background-color: red; */
  top: 23px;
  right: 40px;
`;

export const Alarm = styled.img``;
export const Plus = styled.img`
  margin-left: 22px;
`;
export const Profile = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: red;
  margin-left: 22px;
`;
