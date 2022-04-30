import styled from "styled-components";

export const Wrapper = styled.div`
  width: 406px;
  height: 73px;
  /* background-color: red; */
  border-radius: 6px;
  border: 1px solid #d0d7de;
  margin: 18px 0 0 18px;
  display: flex;
  flex-direction: column;
  padding: 16px 8px 16px 16px;
  justify-content: space-between;
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
  float: right;
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

export const BottomWrapper = styled.div`
  display: inline-block;
`;

export const LangWrapper = styled.div`
  display: inline-block;
`;

export const Color = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${props => props.color}; //LangColor값 적용
  border-radius: 100%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 3px;
`;

export const Language = styled.span`
  font-size: 12px;
  color: #57606a;
  letter-spacing: -0.2px;
  margin-right: 16px;
`;

export const ForkWrapper = styled.div`
  display: inline-block;
`;
export const Fork = styled.img`
  width: 14px;
  height: 14px;
  vertical-align: middle;
`;
export const ForkCount = styled.span`
  font-size: 12px;
  color: #57606a;
  margin-left: 1px;
`;

export const StarWrapper = styled.div`
  display: inline-block;
`;
export const Star = styled.img`
  width: 14px;
  height: 14px;
  vertical-align: middle;
  margin-left: 6px;
`;
export const StarCount = styled.span`
  font-size: 12px;
  color: #57606a;
  margin-left: 1px;
`;
