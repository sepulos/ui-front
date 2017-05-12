/**
 * Created by Damian on 11.05.2017.
 */
/// <reference path="../../app.module.ts" />

module biblioteka {
    'use strict';

    export class EmployeeListCtrl {

        user: IUser = {};

        // @ngInject
        constructor() {


        }

    }

    angular.module('biblioteka').controller('EmployeeListCtrl', EmployeeListCtrl); /*nazwa kontrolera*/
}
