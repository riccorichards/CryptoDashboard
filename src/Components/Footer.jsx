import { styled } from "styled-components";

const StyleFooter = styled.div`
background-color: #49b350;
flex: 1;
margin: 0 5px;
`;

const Footer = () => {
	return (
		<StyleFooter>
			<h1>footer</h1>
		</StyleFooter>
	)
}

export default Footer;