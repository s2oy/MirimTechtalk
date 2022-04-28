import styled from "styled-components";

export const Wrapper = styled.div`
  width: 400px;
  height: 60px;
  /* background-color: red; */
  border-radius: 6px;
  border: 1px solid #d0d7de;
  margin: 60px 0 0 430px;
  padding: 20px;
`;

export const TitleWrapper = styled.div`
  display: inline-block;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 17px;
  color: #0960da;
  letter-spacing: -0.5px;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }
`;
export const Public = styled.span`
  border: 1px solid #d0d7de;
  border-radius: 12px;
  width: 10px;
  height: 10px;
  padding: 2px 6px 0 6px;

  color: #57606a;
  font-weight: 700;
  font-size: 12px;
`;

export const Description = styled.span`
  display: block;
  color: #57606a;
  letter-spacing: -0.2px;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

export const LangWrapper = styled.div``;

export const Color = styled.div`
  width: 12px;
  height: 12px;
  background-color: #f1e05a;
  border-radius: 100%;
  display: inline-block;
`;

export const Language = styled.span`
  font-size: 12px;
  color: #57606a;
  letter-spacing: 0.1px;
`;
