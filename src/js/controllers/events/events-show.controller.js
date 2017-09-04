angular
  .module('icebreaker')
  .controller('EventsShowCtrl', EventsShowCtrl);

EventsShowCtrl.$inject = ['Event', '$stateParams'];
function EventsShowCtrl(Event, $stateParams) {
  const vm = this;

  vm.event = Event.get({ id: $stateParams.id });
}
