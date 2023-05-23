import { useContext } from "react";
import { styled } from "styled-components";
import DataContext from "../../DataContext";

const StyledInput = styled.input`
padding: 5px;
margin: 15px; 
border-radius: 3px;
border: 1px solid;
font-family: 'Raleway', sans-serif;
color: black;
letter-spacing: 1.5px;
`;


const SearchInput = () => {
	const getInputs = useContext(DataContext)
	const setInputValue = getInputs.setInputValue
	const inputValue = getInputs.inputValue;
	const handletInput = e => {
		setInputValue(e.target.value)
	}
	return (
		<StyledInput
			placeholder="Search Crypto"
			value={inputValue}
			onChange={handletInput}
		/>
	)
}

export default SearchInput;