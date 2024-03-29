import Configstore from "configstore";
import pkg from '../package.json' with { type: "json" };

export default class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }

  setKey(key) {
    this.conf.set("apiKey", key);
    return key;
  }

  getKey() {
    const key = this.conf.get("apiKey");
    if (!key) {
      throw new Error("No API Key Found - Get a key at https://www.coinapi.io");
    }
    return key;
  }

  deleteKey() {
    const key = this.conf.get("apiKey");
    if (!key) {
      throw new Error("No API Key Found - Get a key at https://www.coinapi.io");
    }

    this.conf.delete("apiKey");
    return key;
  }
}

