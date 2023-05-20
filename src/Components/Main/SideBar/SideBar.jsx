import { styled } from "styled-components"
import CryptoInfo from './CryptoInfo';
import Markets from './Markets';

const StyleSideBar = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
flex: 1;
`;

const SideBar = () => {
	return (
		<StyleSideBar>
			<CryptoInfo />
			<Markets />
		</StyleSideBar>
	)
}

export default SideBar