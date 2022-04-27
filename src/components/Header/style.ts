import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 62px;
  background-color: #24292f;
  position: relative;
`;

export const Icon = styled.img`
  width: 32px;
  height: 62px;
  margin-left: 32px;
`;

export const SearchBar = styled.div`
  button {
    width: 18px;
    height: 19px;
    position: absolute;
    left: 327px;
    top: 21px;
    background: none;
    color: #7d8183;
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

  ::placeholder {
    color: #c5c6c8;
    font-size: 14px;
    font-style: bold;
  }
`;
