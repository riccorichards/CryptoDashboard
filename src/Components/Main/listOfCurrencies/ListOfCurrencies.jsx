import { useContext } from "react";
import styled from "styled-components";
import DataContext from "../../DataContext";


const StyleListOfCurrencies = styled.div`
background-color: #ace1c0;
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
const ListCurrecies = styled.div`
margin-top: 20px;
position: absolute;
width: 100%;
height: calc(100% - 50px);
display: flex;
flex-direction: column;
overflow: auto;


& div {
	display: flex;
	align-items: center;
	gap: 5px;
}

& div p {
	font-family: 'Raleway', sans-serif;
}

& pre {
	margin-left: 15px;
}
& button {
	margin-left: 15px;
	border-radius: 3px;
	border: 1px solid;
	padding: 0 1.5px;
	cursor: pointer;
	transition: all 0.2s ease-in;
}
& button:hover {
	background-color: #077469;
	color: #fff
}
`;


const ListOfCurrencies = () => {

	const getCurrence = useContext(DataContext)
	const topList = getCurrence.topList
	return (
		<StyleListOfCurrencies>
			<h3>Top Hundred</h3>

			{topList &&
				<ListCurrecies>
						{topList.map(item => (
							<div key={item.id}>
								<p>{item.rank})</p>
								<h4>{item.symbol}</h4>
								<pre>{parseFloat(item.priceUsd).toFixed(6)}$</pre>
								<button>show more</button>
							</div>
						))}
				</ListCurrecies>
			}
		</StyleListOfCurrencies>
	)
}

export default ListOfCurrencies