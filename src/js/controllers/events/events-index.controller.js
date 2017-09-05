angular
.module('icebreaker')
.controller('EventsIndexCtrl', EventsIndexCtrl);

EventsIndexCtrl.$inject = ['$http', '$scope'];
function EventsIndexCtrl($http, $scope) {
  const vm = this;

  vm.groupType    = 'founderscoders';
  vm.addGathering = addGathering;

  $http
    .get('http://localhost:3000/api/meetupgroups')
    .then(res => vm.meetUpGroups = res.data);


  function getEventData() {
    $http
      .get(`http://localhost:3000/api/events/${vm.groupType}`)
      .then(res => vm.meetups = res.data);
  }

  function addGathering(event) {
    console.log(event);
    vm.gathering = {
      name: event.name,
    }
  }

  $scope.$watch(() => vm.groupType, getEventData);
}
