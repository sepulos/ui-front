/// <reference path="../../app.module.ts" />
module biblioteka {
  export interface ISlimUser extends IUserProfile {
    displayName?: string;
    avatar?: string;
  }
}