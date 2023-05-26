import { useContext } from "react";
import styled from "styled-components";
import DataContext from "../../DataContext";
import { NavLink } from "react-router-dom";

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
scrollbar-width: thin;
scrollbar-color: black transparent;

scrollbar-width: thin;
scrollbar-color: black transparent;

&::-webkit-scrollbar {
  width: 6px;
}

&::-webkit-scrollbar-track {
  background-color: #81c5a6;
	border-radius: 3px;
}

&::-webkit-scrollbar-thumb {
  background-color: #353f41;
	border-radius: 3px;
}


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

& ::-webkit-scrollbar {
width: 6px;
}
& ::webkit-scrollbar-track {
	background-color: #fff;
}
& ::webkit-scrollbar-thumb {
	background-color: black;
}
`;

const List = styled.div`

& a {
	text-decoration: none;
	color: black;
	display: flex;
  gap: 20px;
  
}

& a:hover {
width: 100%;
border-radius: 3px;
border: 1px solid;
}
`;

const ListOfCurrencies = () => {

	const getCurrence = useContext(DataContext)
	const topList = getCurrence.topList
	//const sortedTopList = _.sortBy(topList, rank => rank.rank)
	const sortedTopList = topList.sort((a, b) => a.rank - b.rank)
	console.log(sortedTopList)
	return (
		<StyleListOfCurrencies>
			<h3>Top Hundred</h3>

			{sortedTopList &&
				<ListCurrecies>
					{sortedTopList.map(item => (
						<List key={item.id}>
							<NavLink>
								<p>{item.rank})</p>
								<h4>{item.name}</h4>
								<pre>{parseFloat(item.priceUsd).toFixed(6)}$</pre>
							</NavLink>
						</List>
					))}
				</ListCurrecies>
			}
		</StyleListOfCurrencies>
	)
}

export default ListOfCurrencies