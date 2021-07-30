export class TimeData {
  #timeInUnix = '';
  #timezoneCode = '';
  #dayOfWeek = 0;
  #dayOfYear = 0;
  #weekNumber = 0;
  #timeZone = '';

  set timeInUnix(newTimeInUnix: string) {
    this.#timeInUnix = newTimeInUnix;
  }
  get timeInUnix(): string {
    return this.#timeInUnix;
  }

  set timezoneCode(newTimezoneCode: string) {
    this.#timezoneCode = newTimezoneCode;
  }
  get timezoneCode() : string {
    return this.#timezoneCode;
  }

  set dayOfWeek(newValue: number) {
    this.#dayOfWeek = newValue;
  }
  get dayOfWeek(): number {
    return this.#dayOfWeek;
  }

  set dayOfYear(newValue: number) {
    this.#dayOfYear = newValue;
  }
  get dayOfYear(): number {
    return this.#dayOfYear;
  }

  set weekNumber(newValue: number) {
    this.#weekNumber = newValue;
  }
  get weekNumber(): number {
    return this.#weekNumber;
  }

  set timeZone(newValue: string) {
    this.#timeZone = newValue;
  }

  get timeZone(): string {
    return this.#timeZone;
  }
}
