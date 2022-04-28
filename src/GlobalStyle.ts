import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
	${reset};
	body{
		font-family: -apple-system, BlinkMacSystemFont, sans-serif;
	}
`;
