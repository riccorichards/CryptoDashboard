import { styled } from "styled-components"
import ButtonSearch from './ButtonSearch';
import SearchInput from './SearchInput';

const SearchEnginePositions = styled.div`
display: flex;
`;

const SearchEngine = () => {
	return (
		<SearchEnginePositions>
			<SearchInput />
			<ButtonSearch />
		</SearchEnginePositions>
	)
}

export default SearchEngine