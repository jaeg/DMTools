var app = angular.module('dmTools', []);

app.controller('InitiativeController', ['$scope', function($scope) {
    $scope.initiativeList = new Array();
    
    $scope.incrementCount = 1;
    
    $scope.selectedCharacter = null;
    
    $scope.addInitiative = function(){
        var character = {
        }
        
        if ($scope.isModifier == false || typeof $scope.isModifier === "undefined")
        {
            character.initiative = parseInt($scope.characterInitiative);
        }
        else
        {
         var roll = Math.ceil(Math.random()*20) + parseInt($scope.characterInitiative) | 0;
         character.initiative = roll;   
        }
        character.newInitiative = character.initiative;
        character.name =$scope.characterName;
        if ($scope.autoIncrement == true)
        {
            character.name = character.name + " " + $scope.incrementCount;
            $scope.incrementCount++;
        }
        
        character.notes = $scope.characterNotes;
        character.status = $scope.characterStatus;
        character.dead = false;
        
        $scope.initiativeList.push(character);  
    };
    $scope.deleteDead = function() {
        console.log($scope.initiativeList);
        for (var i = $scope.initiativeList.length - 1; i >= 0; i--)
        {
            if ($scope.initiativeList[i].dead == true)
            {
                $scope.initiativeList.splice(i,1);
            }   
        }
    };
    
    $scope.change = function(character)
    {
        setTimeout(function() {
            character.initiative = character.newInitiative;
        }, 10);     
    }
    
    $scope.updateOrder = function()
    {
        for(i = 0; i < $scope.initiativeList.length; i++)
        {
            //console.log($scope.initiativeList[i].initiative +","+$scope.initiativeList[i].newInitiative);
            $scope.initiativeList[i].initiative = parseInt($scope.initiativeList[i].newInitiative);
            
        }
        
    }
    
    $scope.selectCharacter = function(character)
    {
        $scope.selectedCharacter = character;
    }
        
}]); //End Controller


