/// <reference types="vite/client" />
type CountryType = {
  name: {
    common: string;
    official: string;
    nativeName: {
      ron: {
        official: string;
        common: string;
      };
    };
  };
  independent: boolean;
  currencies: {
    [code: string]: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  borders: string[];
  area: number;
  flags: {
    png: string;
  };
};
