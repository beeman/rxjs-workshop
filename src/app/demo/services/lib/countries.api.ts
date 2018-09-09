const apiUrl = 'https://restcountries.eu/rest/v2';

export const countriesByLang = (lang: string) => {
  return `${apiUrl}/lang/${lang}`;
};

export const countriesByName = (name: string) => {
  return `${apiUrl}/name/${name}`;
};

export const countriesByCapital = (capital: string) => {
  return `${apiUrl}/capital/${capital}`;
};
