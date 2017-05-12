/**
 * Created by Damian on 12.05.2017.
 */

/// <reference path="../../app.module.ts" />

module biblioteka {
  'use strict';
  import IComponentController = angular.IComponentController;

  const FormsComponent: ng.IComponentOptions = {
    bindings: {},
    controller: FormsCtrl,
    controllerAs: 'formC',
    templateUrl: 'content/component/forms/forms.template.html'
  };

  angular.module('biblioteka').component('forms', FormsComponent); /*nazwa komponentu*/
}
