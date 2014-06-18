(function () {
    'use strict';

    angular
        .module('app.avengers')
        .controller('avengers', avengers);

    avengers.$inject = ['common', 'dataservice'];

    function avengers(common, dataservice) {
        var log = common.logger.info;

        /*jshint validthis: true */
        var vm = this;

        vm.avengers = [];
        vm.title = 'Avengers';

        activate();

        function activate() {
            var promises = [getAvengers()];
            return dataservice.ready(promises).then(function(){
                log('Activated Avengers View');
            });
        }

        function getAvengers() {
            dataservice.getAvengers().then(function (data) {
                vm.avengers = data;
//              return vm.avengers;
            });
        }
    }
})();