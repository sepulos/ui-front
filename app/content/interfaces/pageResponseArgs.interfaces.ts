/// <reference path="../app.module.ts" />

module biblioteka {
  export interface IPageResponseArgs<T> {
    last?: boolean;
    first?: boolean;
    content?: Array<T>;
    size?: number;
    number?: number;
    numberOfElements?: number;
    sort?: string;
    totalElements?: number;
    totalPages?: number;
  }

}