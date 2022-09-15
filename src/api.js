const BASE_URL = 'https://api.exchangerate.host';

const getResource = async resourceUrl => {
  const response = await fetch(resourceUrl);
  if (!response.ok) {
    throw new Error('API Error');
  }

  return response.json();
};

const apiExchangeRate = {
  getCurrentExchange: (baseCurrency, futureCurrency, amount) =>
    getResource(
      `${BASE_URL}/latest?base=${baseCurrency}&symbols=${futureCurrency}&amount=${amount}`
    ),
  getHistoricalRate: (baseCurrency, futureCurrency, currentDate, startDate) =>
    getResource(
      `${BASE_URL}/timeseries?start_date=${startDate.year}-${startDate.month}-${startDate.day}&end_date=${currentDate.year}-${currentDate.month}-${currentDate.day}&base=${baseCurrency}&symbols=${futureCurrency}`
    ),
};

export default apiExchangeRate;
