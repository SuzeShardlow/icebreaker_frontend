angular
  .module('icebreaker')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams'];
function UsersShowCtrl(User, $stateParams) {
  const vm = this;

  vm.event = User.get({ id: $stateParams.id });
}
