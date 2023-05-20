import styled from "styled-components";
import SearchEngine from './SearchEngine/SearchEngine';
import Logo from './Logo';
const StyleHeader = styled.header`
background-color: #658879;
flex: 1;
margin: 5px;
display: flex;
justify-content: space-between;
position: relative;
`;

const Header = () => {
	return (
		<StyleHeader>
			<SearchEngine />
			<Logo />
		</StyleHeader>
	)
}

export default Header