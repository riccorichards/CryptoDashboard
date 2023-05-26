import { useContext } from "react";
import styled from "styled-components";
import DataContext from "../../DataContext";

const StyleCryptoInfo = styled.div`
background-color: #a4bde4;
color: black;
border-radius: 5px;
box-shadow: 0 0 5px black;
flex: 1;

& h3 {
	font-family: 'Raleway', sans-serif;
	text-align: center;
	-webkit-box-reflect: below 1px linear-gradient(transparent, #0009);
  line-height: 14px;
  text-shadow: 0 0.2px 2px #ace1c0;
	margin-top: 7px;
}

& li {
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	min-height: 250px;
}


`;

const MarketCup = styled.div`
  @media screen and (max-width: 1390px) {
    display: flex;
    flex-direction: column;
  }
`;
const CryptoInfo = () => {

	const getCurrencies = useContext(DataContext)
	const currencies = getCurrencies.currencies
	return (
		<StyleCryptoInfo>
			<ul>{
				currencies.data && <li>
					<h3>{currencies.data.symbol}</h3>
					<pre>{currencies.data.name}</pre>
					<p>Rank: {currencies.data.rank}</p>
					<p>Current Price: {new Intl.NumberFormat().format(parseFloat(currencies.data.priceUsd).toFixed(6))}</p>
					<MarketCup>Current Market Cap: {parseFloat(currencies.data.marketCapUsd).toLocaleString()}</MarketCup>
					<p>Supply: {parseFloat(currencies.data.supply).toLocaleString()}</p>
					<div>{currencies.data.maxSupply &&  <p>Max Supply: {parseInt(currencies.data.maxSupply).toLocaleString()}</p> }</div>
				</li>
			}</ul>
		</StyleCryptoInfo>
	)
}

export default CryptoInfo