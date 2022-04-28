import styled from "styled-components";

export const Wrapper = styled.div`
  width: 406px;
  height: 73px;
  /* background-color: red; */
  border-radius: 6px;
  border: 1px solid #d0d7de;
  margin: 60px 0 0 430px;
  padding: 16px;
`;

export const TitleWrapper = styled.div`
  display: inline-block;
  margin-bottom: 12px;

  img {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-right: 8px;
  }
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 15.19px;
  color: #0960da;
  letter-spacing: -0.5px;
  margin-right: 8px;
  cursor: pointer;

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
  padding: 1px 6px 1px 6px;

  color: #57606a;
  font-weight: 700;
  font-size: 12px;
`;

export const Grabber = styled.img`
  position: relative;
  left: 250px;
  cursor: pointer;
`;

export const Description = styled.span`
  display: block;
  color: #57606a;
  letter-spacing: -0.2px;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  margin-bottom: 12px;
`;

export const LangWrapper = styled.div``;

export const Color = styled.div`
  width: 12px;
  height: 12px;
  background-color: #f1e05a;
  border-radius: 100%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 3px;
`;

export const Language = styled.span`
  font-size: 12px;
  color: #57606a;
  letter-spacing: -0.2px;
`;
