import { Shisha } from "./shisha";

export class ShishaFactory {
  static empty(): Shisha{
    return new Shisha("0", [])
  }

  static fromObject(rawTobacco: any):Shisha{
    return new Shisha(
      rawTobacco.id,
      rawTobacco.acf
    );
  }
}
