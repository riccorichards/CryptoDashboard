import { useState } from 'react';
import './App.css';
import DataContext from './Components/DataContext';
import styled from 'styled-components';
import Header from './Components/headerComponents/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer';

const BodyDisplay = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
height: 100vh;
`;

function App() {
  const [currencies, setCurrencies] = useState({})
  const values = { currencies, setCurrencies }
  return (
    <DataContext.Provider value={values}>
      <BodyDisplay>
        <Header />
        <Main />
        <Footer />
      </BodyDisplay>
    </DataContext.Provider>
  );
}

export default App;
