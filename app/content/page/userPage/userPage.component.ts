/**
 * Created by Damian on 11.05.2017.
 */
/// <reference path="../../app.module.ts" />

module biblioteka {
    'use strict';
    import IComponentController = angular.IComponentController;

    const UserPageComponent: ng.IComponentOptions = {
        bindings: {},
        controller: UserCtrl,
        controllerAs: 'userCtr',
        templateUrl: 'content/page/userPage/userPage.template.html'
    };

    angular.module('biblioteka').component('use', UserPageComponent); /*nazwa komponentu*/
}
