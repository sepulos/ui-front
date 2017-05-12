/**
 * Created by Damian on 12.05.2017.
 */

/// <reference path="../../app.module.ts" />

module biblioteka {
    'use strict';
    import IComponentController = angular.IComponentController;

    const TimesheetComponent: ng.IComponentOptions = {
        bindings: {},
        controller: TimesheetCtrl,
        controllerAs: 'timesheet',
        templateUrl: 'content/component/timesheet/timesheet.template.html'
    };

    angular.module('biblioteka').component('timesheet', TimesheetComponent); /*nazwa komponentu*/
}
