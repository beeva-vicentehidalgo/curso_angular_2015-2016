'use strict';

angular.module('carsApp')
  .directive('question', function () {
    return {
      restrict: 'E',
      scope: {
        options: '=',
        label: '@',
        model: '=',
        id: '@',
        name: '@',
        disabled: '=',
        value: '=',
        function: '='
      },
      templateUrl: function(element, attributes){
        switch(attributes.type){
          case 'select': return 'app/question/templates/select.html'; break;
          case 'radio': return 'app/question/templates/radio.html'; break;
          case 'checkbox': return 'app/question/templates/checkbox.html'; break;
          case 'textArea': return 'app/question/templates/textarea.html'; break;
          case 'input': return 'app/question/templates/input.html'; break;
          default: return 'app/question/templates/input.html'; break;
        }
      }
      link: function (scope, element, attrs) {
      }
    };
  });
