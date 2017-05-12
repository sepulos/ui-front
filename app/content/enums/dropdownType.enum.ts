/// <reference path="../app.module.ts" />
module biblioteka {
  export enum EDropdownType {
    DICTIONARY,
    ENUM, // Enum dropdown requires items to be of type Array<EEnumWrapper> created by EnumUtilsService.convertItemsToEnumWrapper(items)
    STRING,
    USER,
  }
}