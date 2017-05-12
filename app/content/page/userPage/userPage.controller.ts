/// <reference path="../../app.module.ts" />

module biblioteka {
    'use strict';

    export class UserCtrl {

        user: IUser = {};

        // @ngInject
        constructor() {


        }

    }

    angular.module('biblioteka').controller('UserCtrl', UserCtrl); /*nazwa kontrolera*/
}
