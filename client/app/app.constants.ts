'use strict';
const angular = require('angular');

export default angular.module('meanstackProjectApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
