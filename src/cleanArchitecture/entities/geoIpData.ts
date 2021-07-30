export class GeoIpData {
  #countryCode = '';
  #city = '';
  #timeZone = '';

  set countryCode(newCountryCode: string) {
    this.#countryCode = newCountryCode;
  }
  get countryCode(): string {
    return this.#countryCode;
  }

  set city(newCity: string) {
    this.#city = newCity;
  }
  get city(): string {
    return this.#city;
  }

  set timeZone(newIp: string) {
    this.#timeZone = newIp;
  }
  get timeZone(): string {
    return this.#timeZone;
  }
}
