import { styled } from "styled-components";

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
	return (
	  <StyledInput placeholder="Search Crypto"/>
	)
}

export default SearchInput;