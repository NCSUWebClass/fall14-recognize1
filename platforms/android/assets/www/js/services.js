var recognitionModule = angular.module('starter.services', []);

/**
 * A simple example service that returns some data.
 */
recognitionModule.factory('Friends', function () {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    {
      id: 0,
      name: 'Scruff McGruff'
    },
    {
      id: 1,
      name: 'G.I. Joe'
    },
    {
      id: 2,
      name: 'Miss Frizzle'
    },
    {
      id: 3,
      name: 'Ash Ketchum'
    }
  ];

  return {
    all: function () {
      return friends;
    },
    get: function (friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});

recognitionModule.factory('Categories', function () {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var categories = [
    {
      id: 0,
      name: 'Test Questions',
      picture: 'example1car.jpg'
    },
    {
      id: 1,
      name: 'Animals',
      picture: 'giraffe.jpg'
    },
    {
      id: 2,
      name: 'Places',
      picture: 'Q2_Earth_Eastern_Hemisphere.jpg'
    }
  ];

  return {
    all: function () {
      return categories;
    },
    get: function (categoryId) {
      // Simple index lookup
      return categories[categoryId];
    }
  }
});


recognitionModule.factory('Questions', function () {
  // Might use a resource here that returns a JSON array
  var count = 0;
  // Some fake testing data
  var questions = [
    {
      id: 0,
      image1: 'example1tire.png',
      image2: 'example1engine.png',
      image3: 'example1wheel.png',
      image4: 'example1car.jpg',
      image5: 'example1bike.jpg',
      image6: 'example1motorcycle.jpg',
      correct: 'a1'
    },
    {
      id: 1,
      image1: 'tailFeathers.jpg',
      image2: 'turkeyLegs.jpg',
      image3: 'turkeyGizzard.gif',
      image4: 'eagle.jpg',
      image5: 'goose.jpg',
      image6: 'turkey.jpg',
      correct: 'a3'
    },
    {
      id: 2,
      image1: 'tusks1.jpg',
      image2: 'tail1.jpg',
      image3: 'ears.png',
      image4: 'elephant.jpg',
      image5: 'Walrus.jpg',
      image6: 'boar.jpg',
      correct: 'a1'
    },
    {
      id: 3,
      image1: 'giraffe-skin-print-pattern.jpg',
      image2: 'legs_obvious.jpg',
      image3: 'giraffe_neck.jpeg',
      image4: 'Leopard.jpg',
      image5: 'bongo.jpg',
      image6: 'giraffe.jpg',
      correct: 'a3'
    },
    {
      id: 4,
      image1: 'Pig-ears.jpg',
      image2: 'pigs_tail.png',
      image3: 'snout.jpg',
      image4: 'dog.jpg',
      image5: 'pig.jpg',
      image6: 'boar.jpg',
      correct: 'a2'
    }
  ];


  return {
    all: function () {
      return questions;
    },
    get: function (questionId) {
      // Simple index lookup
      return questions[questionId];
    },
    increaseCount: function () {
      if(count < 4) {
      count += 1;
      } else {
        count = 0;
      }
    },
    getCount: function() {
      return count;
    }
  }
});
