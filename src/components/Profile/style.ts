import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 440px;
  height: 100%;
  margin-left: 110px;

  #description {
    width: 296px !important;
    height: auto;
    /* background-color: red; */
    border: none;
    resize: none;
    margin-top: 18px;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 16px;
    overflow: hidden;
    /* margin-bottom: 10px; */
    font-weight: 400;
    outline: none;
  }
`;

export const ProfileImg = styled.img`
  /* position: absolute; */
  width: 296px;
  height: 296px;
  background-color: red;
  border-radius: 100%;
  margin-top: -30px;
  margin-bottom: 17px;
`;

export const UserWrapper = styled.div``;
export const Name = styled.h2`
  margin-bottom: 4px;
  font-size: 24px;
  font-weight: 600;
`;
export const Ename = styled.h3`
  color: #57606a;
  font-size: 20px;
`;
export const FollowWrapper = styled.div`
  img {
    vertical-align: middle;
  }

  .num {
    font-weight: 700;
    font-size: 14px;
    margin-left: 6px;
  }

  .follow {
    font-size: 14px;
    margin-left: 4px;
    color: #57606a;
  }
`;
