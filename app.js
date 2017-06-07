/**
 * Created by Raymond on 6/6/2017.
 */
var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.selection']);

app.controller('MainCtrl', ['$scope', '$http', '$log', '$timeout', 'uiGridConstants', function ($scope, $http, $log, $timeout, uiGridConstants) {


    $scope.gridOptions1 = {
        enableRowSelection: true,
        enableSelectAll: true,
        selectionRowHeaderWidth: 35,
        rowHeight: 35,
        showGridFooter:true,
        columnDefs: [

            { field: 'name', width:100},
            { field: 'gender', width:75},
            { field: 'company', width:100},
            {field: 'email', width:150},
            {field: 'phone', width:100},
            { field: 'age', width:50},

        ]
    };


    $scope.gridOptions2 = {
        enableRowSelection: true,
        enableSelectAll: true,
        selectionRowHeaderWidth: 35,
        rowHeight: 35,
        showGridFooter:true,
        columnDefs: [

            { field: 'name', width:100},
            { field: 'gender', width:75},
            { field: 'company', width:100},
            {field: 'email', width:150},
            {field: 'phone', width:100},
            { field: 'age', width:50},

        ]
    };

    $scope.gridOptions1.multiSelect = true;
    $scope.gridOptions2.multiSelect = true;

    $http.get('500_complex.json')
        .success(function(data1) {

            for(var i=0; i<3; i++){
                $scope.gridOptions1.data.splice(i,0, data1[i+3]);
            }


            $timeout(function() {
                if($scope.gridApi.selection.selectRow){
                    $scope.gridApi.selection.selectRow($scope.gridOptions.data[0]);
                }
            });

        })
        .error(function() {
            defer.reject('could not find someFile.json');
        });

    $http.get('500_complex.json')
        .success(function(data2) {
            for(var i=0; i<3; i++){
                $scope.gridOptions2.data.splice(i,0, data2[i]);
            }
            $timeout(function() {
                if($scope.gridApi.selection.selectRow){
                    $scope.gridApi.selection.selectRow($scope.gridOptions.data[0]);
                }
            });


        })
        .error(function() {
            defer.reject('could not find someFile.json');
        });


    $scope.swap1 = function(){

        angular.forEach($scope.gridApi2.selection.getSelectedRows(), function (data, index) {
            $scope.gridOptions2.data.splice($scope.gridOptions2.data.lastIndexOf(data), 1);
            $scope.gridOptions1.data.splice($scope.gridOptions1.data.length, 0, data);
        });

        $scope.gridApi2.selection.clearSelectedRows();



    }


    $scope.swap2 = function(){

        angular.forEach($scope.gridApi.selection.getSelectedRows(), function (data, index) {
            $scope.gridOptions1.data.splice($scope.gridOptions1.data.lastIndexOf(data), 1);
            $scope.gridOptions2.data.splice($scope.gridOptions2.data.length, 0, data);
        });

        $scope.gridApi.selection.clearSelectedRows();



    }

    $scope.gridOptions1.onRegisterApi = function(gridApi){
        $scope.gridApi = gridApi;

    };

    $scope.gridOptions2.onRegisterApi = function(gridApi2){
        $scope.gridApi2 = gridApi2;

    };





}])







