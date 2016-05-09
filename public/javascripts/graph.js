var app = angular.module('simple-chart', []);
google.load("visualization", "1", {packages:["corechart"]});

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
    $http.get('/pets').success(function(pets){
      var dataArray = formatDataForView(pets);
        var table = google.visualization.arrayToDataTable(dataArray, false);   
       var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        
        var options = {
            'title' : 'Status of Stray Pets in Washington',
            chartArea: {width: '50%'},
            hAxis: {
                title: 'Number of Pets',
                minValue: 0
            },
            vAxis: {
                title: 'Status of Pet'
            }
        };
        chart.draw(table, options);
    });
}]);

function formatDataForView(animals) {
    var dataArray = [], keysArray = [];
        keysArray.push('Groups');
        keysArray.push('Number of Pets');
    dataArray.push(keysArray);
    
    animals.forEach(function(value){
        var dataEntry = [];
        for(var prop in value) {
            dataEntry.push(value[prop],0);
        }
        dataArray.push(dataEntry);
});
return dataArray;
}














