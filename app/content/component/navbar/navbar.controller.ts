/**
 * Created by Damian on 11.05.2017.
 */
/// <reference path="../../app.module.ts" />

module biblioteka {
  'use strict';

  export class NavbarCtrl {

    user: IUser = {};
    inputContainerVisible = false;
    // @ngInject
    constructor() {


    }

    public slide() {

      this.inputContainerVisible = !this.inputContainerVisible;
    };

  }

  angular.module('biblioteka').controller('NavbarCtrl', NavbarCtrl);
  /*nazwa kontrolera*/
}
