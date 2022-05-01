import styled from "styled-components";

export const TopWrapper = styled.div`
  float: left;
  margin: 30px 0 -7px 460px;

  .pin {
    font-size: 17px;
  }

  .costom {
    position: absolute;
    right: 100px;
    font-size: 12px;
    color: #57606a;
    font-weight: 600;
  }
`;

export const Wrapper = styled.div`
  width: 1000px;
  height: 100%;
  /* background-color: red; */
  display: inline-flex;
  /* flex-direction: column; */
  /* justify-content: space-around; */
  flex-wrap: wrap;
  margin-left: auto;
  flex-grow: 3;
  float: right;
`;
