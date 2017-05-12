/**
 * Created by Damian on 12.05.2017.
 */

/// <reference path="../../app.module.ts" />

module biblioteka {
    'use strict';
    import IComponentController = angular.IComponentController;

    const ProjectComponent: ng.IComponentOptions = {
        bindings: {},
        controller: ProjectCtrl,
        controllerAs: 'project',
        templateUrl: 'content/component/project/project.template.html'
    };

    angular.module('biblioteka').component('project', ProjectComponent); /*nazwa komponentu*/
}
