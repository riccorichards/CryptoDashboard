import { useContext } from "react";
import styled from "styled-components";
import DataContext from "../../DataContext";

const StyleCryptoInfo = styled.div`
background-color: #a4bde4;
color: black;
border-radius: 5px;
box-shadow: 0 0 5px black;
flex: 1;

& li {
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	min-height: 250px;
}
`;


const CryptoInfo = () => {

	const getCurrencies = useContext(DataContext)
	const currencies = getCurrencies.currencies
	return (
		<StyleCryptoInfo>
			<ul>{
				currencies.data && <li>
					<h1><i>{currencies.data.symbol}</i></h1>
					<pre>{currencies.data.name}</pre>
					<h3>Rank: {currencies.data.rank}</h3>
					<p>Current Price: {new Intl.NumberFormat().format(parseFloat(currencies.data.priceUsd).toFixed(6))}</p>
					<p>Current Market Cap: {parseFloat(currencies.data.marketCapUsd).toLocaleString()}</p>
					<p>Supply: {parseFloat(currencies.data.supply).toLocaleString()}</p>
					<div>{currencies.data.maxSupply &&  <p>Max Supply: {parseInt(currencies.data.maxSupply).toLocaleString()}</p> }</div>
				</li>
			}</ul>
		</StyleCryptoInfo>
	)
}

export default CryptoInfo