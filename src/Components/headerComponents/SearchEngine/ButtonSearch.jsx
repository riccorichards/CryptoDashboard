import { useContext } from "react";
import { styled } from "styled-components"
import DataContext from "../../DataContext";

const Button = styled.button`
padding: 5px;
margin: 15px; 
border-radius: 3px;
border: 1px solid;
font-family: 'Raleway', sans-serif;
color: black;
letter-spacing: 1.5px;
cursor: pointer;
transition: all 0.2s ease-in; 

&:hover {
	background-color: #077469;
	color: #fff
}
`;

const ButtonSearch = () => {

	const getCurrencies = useContext(DataContext)
	const setCurrence = getCurrencies.setCurrence;
	let inputValue = getCurrencies.inputValue;
	const takeValue = () => {
		if (inputValue !== "") {
			inputValue = inputValue.toLowerCase();
			setCurrence(inputValue)
		}
	}
	return (
		<Button
			onClick={() => takeValue()}
		>
			Search
		</Button>
	)
}

export default ButtonSearch