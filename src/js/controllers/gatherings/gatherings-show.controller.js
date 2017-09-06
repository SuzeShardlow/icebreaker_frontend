angular
  .module('icebreaker')
  .controller('GatheringsShowCtrl', GatheringsShowCtrl);

GatheringsShowCtrl.$inject = ['Gathering', '$stateParams'];
function GatheringsShowCtrl(Gathering, $stateParams) {
  const vm = this;

  vm.gathering = Gathering.get({ id: $stateParams.id });
}
