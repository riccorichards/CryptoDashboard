import axios from 'axios';
import { useContext, useEffect } from 'react';
import DataContext from './DataContext';

const DataGenerator = () => {

  const getCurrence = useContext(DataContext)
  const currence = getCurrence.currence
  const setCurrencies = getCurrence.setCurrencies
  const API_Key = "7a38f5fa-6b93-43cb-a3f7-5c9ef6f67a3a";
  const API_BASED_SEARCH = `https://api.coincap.io/v2/assets/${currence}`
  const API = `https://api.coincap.io/v2/assets/`
  const API_MARKETS = `https://api.coincap.io/v2/assets/${currence}/markets`
  useEffect(() => {
    const getFetchCurrencies = async () => {
      try {
        const response = await axios({
          method: "GEt",
          url: API_BASED_SEARCH,
          headers: {
            Authorization: `Bearer ${API_Key}`
          },
        })
        setCurrencies(response.data)
      } catch (e) {
        alert(`${e.message} "Currence was not found"!`)
      }
    }
    getFetchCurrencies()
  }, [API_BASED_SEARCH, setCurrencies])

  const setTopList = getCurrence.setTopList
  useEffect(() => {
    const getFetchCurrencies = async () => {
      try {
        const response = await axios({
          method: "GEt",
          url: API,
          headers: {
            Authorization: `Bearer ${API_Key}`
          },
        })
        setTopList(response.data.data)
      } catch (e) {
        console.log(e.message)
      }
    }
    getFetchCurrencies()
  }, [API, setTopList])
  const setMarkets = getCurrence.setMarkets
  useEffect(() => {
    const getFetchCurrencies = async () => {
      try {
        const response = await axios({
          method: "GEt",
          url: API_MARKETS,
          headers: {
            Authorization: `Bearer ${API_Key}`
          },
        })
        setMarkets(response.data.data)
      } catch (e) {
        console.log(e.message)
      }
    }
    getFetchCurrencies()
  }, [API_MARKETS, setMarkets])
}
export default DataGenerator;