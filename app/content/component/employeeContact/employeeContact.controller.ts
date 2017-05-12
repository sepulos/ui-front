/**
 * Created by Damian on 11.05.2017.
 */
/// <reference path="../../app.module.ts" />

module biblioteka {
    'use strict';

    export class EmployeeContactCtrl {

        user: IUser = {};

        // @ngInject
        constructor() {


        }

    }

    angular.module('biblioteka').controller('EmployeeContactCtrl', EmployeeContactCtrl); /*nazwa kontrolera*/
}
