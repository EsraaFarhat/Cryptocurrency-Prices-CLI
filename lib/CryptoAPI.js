import axios from "axios";
import colors from "colors";

export default class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = `https://rest.coinapi.io/v1/exchangerate`;
  }

  async getPriceData(coinOption, currencyOption) {
    try {
      // Formatter for currency
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currencyOption,
      });

      const res = await axios.get(
        `${this.baseUrl}/${coinOption}?apikey=${this.apiKey}&filter_asset_id=${currencyOption}`
      );

      if (!res.data.rates || res.data.rates.length === 0) {
        throw new Error("No Result Found. Try another currency");
      }

      let output = "";
      for (let i = 0; i < res.data.rates.length; i++) {
        output += `Coin: ${res.data.asset_id_base.yellow} | price: ${
          formatter.format(res.data.rates[i].rate).green
        }\n`;
      }
      return output;
    } catch (err) {
      handleAPIError(err);
    }
  }
}

function handleAPIError(err) {
  if (err.response?.status === 401) {
    throw new Error("Your API key is invalid - Go to https://www.coinapi.io");
  } else if (err.response?.status === 404) {
    throw new Error("Your API is not responding");
  } else{
    throw new Error("Something went wrong");
  }
}
