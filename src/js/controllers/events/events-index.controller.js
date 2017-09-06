angular
.module('icebreaker')
.controller('EventsIndexCtrl', EventsIndexCtrl);

EventsIndexCtrl.$inject = ['$http', '$scope', '$state', 'Gathering'];
function EventsIndexCtrl($http, $scope, $state, Gathering) {
  const vm = this;

  vm.groupType    = 'founderscoders';
  vm.gatherings   = Gathering.query();
  vm.addGathering = addGathering;
  vm.createOrJoin = createOrJoin;

  $http
  .get('http://localhost:3000/api/meetupgroups')
  .then(res => vm.meetUpGroups = res.data);


  function getEventData() {
    $http
    .get(`http://localhost:3000/api/events/${vm.groupType}`)
    .then(res => vm.meetups = res.data);
  }

  function createOrJoin(event) {
    return !!vm.gatherings.find(x => x.eventid === event.id);
  }

  function addGathering(event) {
    vm.gathering = {
      name: event.name,
      groupname: event.group.name,
      eventid: event.id,
      time: new Date(event.time),
      duration: event.duration/1000/60/60,
      status: event.status,
      link: event.link,
      meetupvenuename: event.venue.name,
      meetupvenueaddress: event.venue.address,
      meetupvenuelat: event.venue.lat,
      meetupvenuelong: event.venue.lon
    };

    Gathering
    .save({ gathering: vm.gathering })
    .$promise
    .then(gathering => $state.go('gatheringsShow', { id: gathering.id }));
  }

  $scope.$watch(() => vm.groupType, getEventData, addGathering);
}
