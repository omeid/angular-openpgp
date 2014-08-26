/**
 * @license MIT
 * (c) 2014 Omeid http://omeid.me, Abarpa http://abarpa.com
 */
(function(window, angular, openpgp, undefined) {'use strict';

 /**
  * @ngdoc module
  * @name OpenPGP
  * @description
  *
  * # ngOpenPGP
  *
  * The `OpenPGP` module provides a convenient wrapper for openPGP.js http://openpgpjs.
  * !!! Workin Progress !!!
  *
  *
  * <div doc-module-components="OpenPGP"></div>
  *
  */


 angular.module('OpenPGP', [])
 /**
  * @ngdoc service
  * @name $pgp
  *
  * @description
  * A simpe OpenPGP.js wrapper for angular.
  *
  * @example
  *
  * ```js
  * angular.module('OpenPGPExample', ['OpenPGP'])
  *   .controller('ExampleController', ['PGP', function(pgp) {
  *    //Use pgp here.
  *   }]);
  * ```
  */
 .factory('PGP', function() {

   if(openpgp == undefined) {
     throw Error("OpenGPG.js is not loaded.")
   }

   return openpgp
  })

})(window, window.angular, window.openpgp);
