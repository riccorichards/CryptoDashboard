import { useContext } from "react";
import styled from "styled-components";
import DataContext from "../../DataContext";

const StyleMarkets = styled.div`
background-color: #4d919a;
flex: 1;
border-radius: 5px;
box-shadow: 0 0 5px black;
position: relative;

& h3 {
	font-family: 'Raleway', sans-serif;
	text-align: center;
	-webkit-box-reflect: below 1px linear-gradient(transparent, #0009);
  line-height: 14px;
  text-shadow: 0 0.2px 2px #ace1c0;
	margin-top: 7px;
}
`;
const MarketsList = styled.div`
margin-top: 20px;
position: absolute;
width: 100%;
height: calc(100% - 50px);
display: flex;
flex-direction: column;
overflow: auto;
scrollbar-width: thin;
scrollbar-color: black transparent;

scrollbar-width: thin;
scrollbar-color: black transparent;

&::-webkit-scrollbar {
  width: 6px;
}

&::-webkit-scrollbar-track {
  background-color: #0c2644;
	border-radius: 3px;
}

&::-webkit-scrollbar-thumb {
  background-color: #fff;
	border-radius: 3px;
}
`;
const MarketItems = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
const MarketInfo = styled.div`
text-align: center;
`;

const Markets = () => {
const getMarkets = useContext(DataContext);
	const markets = getMarkets.markets;
	return (
		<StyleMarkets>
			<h3>Markets</h3>
			<MarketsList>
				{markets && markets.map(item => (
					<MarketItems key={item.volumeUsd24Hr}>
						<h4>{item.exchangeId}</h4>
						<MarketInfo>
							<pre>Symbol: {item.baseSymbol}</pre>
							<pre>Price: {item.priceUsd}</pre>
						</MarketInfo>
					</MarketItems>
				))}
			</MarketsList>
		</StyleMarkets>
	)
}

export default Markets;