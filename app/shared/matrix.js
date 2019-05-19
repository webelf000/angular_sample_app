angular.module("myApp").directive("matrix", function() {
    return {
      restrict : "E",
      scope: {
        details: '=',
    },
      template : "<select ng-model="+"selectedName" +"ng-options="+"item for item in"+ details+"></select>"
    };
  });