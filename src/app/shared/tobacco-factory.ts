import { Tobacco } from "./tobacco";

export class TobaccoFactory {
  static empty(): Tobacco{
    return new Tobacco("0", [])
  }

  static fromObject(rawTobacco: any):Tobacco{
    return new Tobacco(
      rawTobacco.id,
      rawTobacco.acf
    );
  }
}
