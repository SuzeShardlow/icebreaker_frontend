angular
.module('icebreaker')
.controller('GatheringsShowCtrl', GatheringsShowCtrl);

GatheringsShowCtrl.$inject = ['Gathering', '$scope', '$state', '$stateParams', 'CurrentUserService', 'Comment'];
function GatheringsShowCtrl(Gathering, $scope, $state, $stateParams, CurrentUserService, Comment) {
  const vm = this;

  vm.gathering               = Gathering.get({ id: $stateParams.id });
  vm.addComment              = addComment;
  vm.deleteComment           = deleteComment;
  vm.removeUserFromGathering = removeUserFromGathering;

  function removeUserFromGathering() {
    vm.gathering.user_ids.splice(CurrentUserService.currentUser.id - 1, 1);
    Gathering
      .update({ id: vm.gathering.id }, { gathering: vm.gathering })
      .$promise
      .then(gathering => {
        vm.gathering.users = gathering.users;
      });
  }

  function addComment() {
    vm.comment.user_id      = CurrentUserService.currentUser.id;
    vm.comment.gathering_id = vm.gathering.id;

    Comment
      .save(vm.comment)
      .$promise
      .then(comment => {
        vm.gathering.comments.push(comment);
        vm.comment = {};
      });
  }

  function deleteComment(comment) {
    Comment
      .remove({ id: comment.id })
      .$promise
      .then(() => {
        const index = vm.gathering.comments.indexOf(comment);
        vm.gathering.comments.splice(index, 1);
      });
  }
}
