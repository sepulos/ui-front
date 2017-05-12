/**
 * Created by Damian on 12.05.2017.
 */

/// <reference path="../../app.module.ts" />

module biblioteka {
    'use strict';
    import IComponentController = angular.IComponentController;

    const EmployeeDetailComponent: ng.IComponentOptions = {
        bindings: {},
        controller: EmployeeDetailCtrl,
        controllerAs: 'detail',
        templateUrl: 'content/component/employeeDetail/employeeDetail.template.html'
    };

    angular.module('biblioteka').component('detail', EmployeeDetailComponent); /*nazwa komponentu*/
}
