const API_KEY = import.meta.env.VITE_API_KEY;

export const getCurrentWeatherData = async (city: string) => {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    })
    .catch((error) => {
      throw new Error(`Fetch error: ${error.message}`);
    });
};

export const getWeatherDataBetweenDates = async (city: string, from: string, to: string) => {
  // date format is yyyy-mm-dd
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${from}/${to}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    })
    .catch((error) => {
      throw new Error(`Fetch error: ${error.message}`);
    });
};
