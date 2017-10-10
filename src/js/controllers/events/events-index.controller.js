angular
.module('icebreaker')
.controller('EventsIndexCtrl', EventsIndexCtrl);

EventsIndexCtrl.$inject = ['$http', '$scope', '$state', 'Gathering'];
function EventsIndexCtrl($http, $scope, $state, Gathering) {
  const vm = this;

  const meetupImages = {
    'founderscoders': 'https://secure.meetupstatic.com/photos/event/a/6/1/b/highres_460422523.jpeg',
    'london-javascript-community': 'https://secure.meetupstatic.com/photos/event/3/8/4/5/highres_435914405.jpeg',
    'ladies-of-code-uk': 'https://secure.meetupstatic.com/photos/event/9/1/e/4/highres_446017348.jpeg',
    'londonappbrewery': 'https://secure.meetupstatic.com/photos/event/8/3/3/2/highres_444873586.jpeg',
    'women-who-code-london': 'https://secure.meetupstatic.com/photos/event/b/8/c/a/highres_431687306.jpeg'
  };

  vm.groupType    = 'founderscoders';
  vm.gatherings   = Gathering.query();
  vm.addGathering = addGathering;
  vm.createOrJoin = createOrJoin;
  vm.meetups      = [];
  vm.newMeetups   = [];

  $http
  // .get('http://localhost:3000/api/meetupgroups')
  .get('https://intense-stream-50021.herokuapp.com/api/meetupgroups')
  .then(res => vm.meetUpGroups = res.data);

  function getEventData() {
    $http
    // .get(`http://localhost:3000/api/events/${vm.groupType}`)
    .get(`https://intense-stream-50021.herokuapp.com/api/events/${vm.groupType}`)
    .then(res => {
      vm.meetups = res.data;
      console.log(vm.meetups);
      vm.meetups.forEach(meetup =>  {
        meetup.image = meetupImages[`${vm.groupType}`];
        meetup.description     = meetup.description.replace(/(<([^>]+)>)/ig, '').replace('&amp;', '&');
      });
    });
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
      meetupvenueaddress: event.venue.address_1,
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
