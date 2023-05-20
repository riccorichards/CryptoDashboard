import axios from 'axios';
import { useEffect } from 'react';

const DataGenerator = () => {

	const API_Key = "7a38f5fa-6b93-43cb-a3f7-5c9ef6f67a3a";
  const API = "https://api.coincap.io/v2/assets/bitcoin"
  useEffect(() => {
    const getFetchCurrencies = async () => {
      try {
        const response = await axios({
          method: "GEt",
          url: API,
          headers: {
          Authorization: API_Key
          },
        })
        setCurrencies(response.data)
      } catch (e) { 
        console.log(e.message)
    }
    }
    getFetchCurrencies()
  }, [])
	return (
		<>
		
		</>
	)
}
export default DataGenerator;