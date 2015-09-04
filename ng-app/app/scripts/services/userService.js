angular.module('delbApp')
  .service('UserService', function(){
    return {
      isLogged: false;
      username: null;
    }
  })