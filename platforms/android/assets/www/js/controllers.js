angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, Categories, Questions, $ionicPopup) {
  $scope.categories = Categories.all();
  $scope.questions = Questions.all();

  $scope.showTutorial = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Tutorial',
     template: 'Click or drag the top clues to get more hints.<br/><br/>Click the picture below that best fits the hints above.<br/><br/>The more hints that you use, the less points you\'ll earn.'
   });
 };

})

.controller('QuestionsCtrl', function ($scope, $stateParams, $ionicSlideBoxDelegate, $ionicPopup, Categories, Questions) {
  $scope.question = Questions.get($stateParams.questionId);
  $scope.questions = Questions.all();

  $scope.nextSlide = function () {
    $ionicSlideBoxDelegate.next();
  }

  $scope.prevSlide = function () {
   $ionicSlideBoxDelegate.previous();
  }

  $scope.showAnswer = function (obj) {
    var answer = $scope.question.correct;  //answer from question
    var dataValue = obj.target.attributes.id.value; //id from image
    $scope.count = Questions.getCount();

      if (answer == dataValue){
          var correct = new Audio('sound/Glass.mp3');
          correct.play();
          var alertPopup = $ionicPopup.alert({
              title: 'Correct!',
              template: 'You earned 100 points!'
          });

          Questions.increaseCount();
          $scope.count = Questions.getCount();
      }
      else{
          var audioNo = new Audio('sound/no.mp3');
          audioNo.play();
         var alertPopup = $ionicPopup.alert({
            title: 'Sorry, try again!',
         });
      }
  };
})

.controller('FriendsCtrl', function ($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function ($scope) {});
