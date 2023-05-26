import { useState } from 'react';
import './App.css';
import DataContext from './Components/DataContext';
import styled from 'styled-components';
import Header from './Components/headerComponents/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer';
import DataGenerator from './Components/DataGenetor';
import { BrowserRouter } from 'react-router-dom';

const BodyDisplay = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
height: 100vh;
`;

function App() {
  const [currencies, setCurrencies] = useState({})
  const [currence, setCurrence] = useState("bitcoin")
  const [inputValue, setInputValue] = useState("")
  const [topList, setTopList] = useState([])
  const [markets, setMarkets] = useState([]);
  const values = { currencies, setCurrencies, inputValue, setInputValue, currence, setCurrence, topList, setTopList, markets, setMarkets}
  return (
    <BrowserRouter>
    <DataContext.Provider value={values}>
      <DataGenerator />
      <BodyDisplay>
        <Header />
        <Main />
        <Footer />
      </BodyDisplay>
    </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
