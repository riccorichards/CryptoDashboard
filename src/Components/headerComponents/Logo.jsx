import { styled } from "styled-components";

const StyleLogo = styled.h1`
font-size: 32px;
position: absolute;
top: 20%;
right: 20px;
text-shadow: 0 2px 5px;
font-family: 'Josefin Sans', sans-serif;
letter-spacing: 1.5px;
`;

const Logo = () => {
	return (
		<StyleLogo>
			Crypto Currencies
		</StyleLogo>
	)
}

export default Logo;