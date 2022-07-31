function useFetchData(userInput) {
  const {amount, baseCurrency, futureCurrency} = userInput
  const BASE_URL = 'https://api.exchangerate.host/latest';
  console.log(amount, baseCurrency, futureCurrency, BASE_URL)

}

export default useFetchData