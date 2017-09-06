angular
.module('icebreaker')
.config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('homepage', {
    url: '/',
    templateUrl: '/js/views/homepage.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/authentications/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/authentications/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('events', {
    url: '/events',
    templateUrl: '/js/views/events/index.html',
    controller: 'EventsIndexCtrl',
    controllerAs: 'vm'
  })
  .state('gatheringsShow', {
    url: '/gatherings/:id',
    templateUrl: '/js/views/gatherings/show.html',
    controller: 'GatheringsShowCtrl',
    controllerAs: 'vm'
  })



  ;

  $urlRouterProvider.otherwise('/');
}
