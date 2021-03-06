/// <reference path="app.module.ts" />

module biblioteka {
  'use strict';
  import ITransitionService = angular.ui.bootstrap.ITransitionService;
  angular.module('biblioteka').config(routerConfiguration);

  class RouterConfiguration {
    constructor(private $stateProvider: ng.ui.IStateProvider,
                private $urlRouterProvider: ng.ui.IUrlRouterProvider) {
      this.$urlRouterProvider
      .otherwise(this.otherwiseConfig);
      this.$stateProvider
        .state('access', {
          url: '/access',
          template: '<div class="bg-access"><div ui-view></div></div>'
        })
        .state('access.signin', {
          url: '/signin',
          template: '<signin></signin>'
        })
      .state('access.userPage', { /*jeżeli załaduje się acces, to po przejsciu na page wykorzystuje komponent use*/
        url: '/page',
        template: '<use></use>'
      })
    }

    otherwiseConfig = ($injector: ng.auto.IInjectorService)=> {
      let stateService: any = $injector.get('$state');
      stateService.go('access.signin');
    }
  }

  routerConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routerConfiguration($stateProvider: ng.ui.IStateProvider,
                               $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    return new RouterConfiguration($stateProvider, $urlRouterProvider);
  }
}
