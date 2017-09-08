angular
  .module('icebreaker')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams'];
function UsersShowCtrl(User, $stateParams) {
  const vm = this;

  vm.user = User.get({ id: $stateParams.id });

  console.log(vm.user.image);
}
