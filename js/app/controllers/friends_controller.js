function FriendsController(){
  var fc = this;

  fc.friends = [
    {name: 'Johnny 5'},
    {name: 'Splinter'},
    {name: 'Michelangelo'},
    {name: 'Leonardo'},
    {name: 'Donatello'},
    {name: 'Raphael'}
  ]
}

angular
  .module('app')
  .controller('FriendsController', FriendsController)
