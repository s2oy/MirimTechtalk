import styled from "styled-components";

export const TopWrapper = styled.div`
  float: left;

  .pin {
    /* display: inline-block !important; */
    margin-top: 35px;
    font-size: 17px;
    /* text-align: center; */
    right: 300px;
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
