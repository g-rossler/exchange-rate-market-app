const BASE_URL = 'https://api.exchangerate.host/latest';

const getResource = async (resourceUrl) => {
  
  const response = await fetch(resourceUrl);
  if (!response.ok) {
    throw new Error('API Error');
  }

  return response.json();
};

const apiExchangeRate = {
  getExchange: (baseCurrency, futureCurrency, amount) =>
    getResource(`${BASE_URL}?base=${baseCurrency}&symbols=${futureCurrency}&amount=${amount}`)
};

export default apiExchangeRate;
