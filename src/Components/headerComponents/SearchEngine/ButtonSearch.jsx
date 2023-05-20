import { styled } from "styled-components"

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
	return (
	<Button>Search</Button>
	)
}

export default ButtonSearch