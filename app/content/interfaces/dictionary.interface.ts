/// <reference path="../app.module.ts" />

module biblioteka {
  export interface IDictionary extends BaseDTO {
    dictionaryType?: string;
    description?: string;
    entries?: Array<IEntry>;
    value?: number;
  }
}