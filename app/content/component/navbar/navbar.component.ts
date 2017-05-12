/**
 * Created by Damian on 11.05.2017.
 */

/// <reference path="../../app.module.ts" />

module biblioteka {
    'use strict';
    import IComponentController = angular.IComponentController;

    const NavbarComponent: ng.IComponentOptions = {
        bindings: {

        },
        controller: NavbarCtrl,
        controllerAs: 'navbar',
        templateUrl: 'content/component/navbar/navbar.template.html'
    };

    angular.module('biblioteka').component('navbar', NavbarComponent); /*nazwa komponentu*/
}
