/// <reference path="../../app.module.ts" />

module biblioteka {
  'use strict';
  import IComponentController = angular.IComponentController;

  const LabelValueComponent: ng.IComponentOptions = {
    bindings: {},
    controller: SigninCtrl,
    controllerAs: 'login',
    templateUrl: 'content/page/access/signin.tpl.html'
  };

  angular.module('biblioteka').component('signin', LabelValueComponent);
}
