import { styled } from "styled-components"
import ListOfCurrencies from './ListOfCurrencies';
import ChartArea from './ChartArea';
import SideBar from './SideBar/SideBar';

const StyleMain = styled.main`
display: flex;
justify-content: space-between;
padding: 0 5px;
flex: 10;
gap: 5px;
`;

const Main = () => {
	return (
		<StyleMain>
			<ListOfCurrencies />
			<ChartArea />
      <SideBar /> 
		</StyleMain>
	)
}

export default Main