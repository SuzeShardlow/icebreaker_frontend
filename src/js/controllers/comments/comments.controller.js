angular
.module('icebreaker')
.controller('CommentsCtrl', CommentsCtrl);

CommentsCtrl.$inject = ['$http', '$scope', '$state', 'Comment'];
function CommentsCtrl($http, $scope, $state, Comment) {
  const vm = this;

  
  vm.addComment = addComment;

  $http
  .get('http://localhost:3000/api/meetupgroups')
  .then(res => vm.meetUpGroups = res.data);

  function addComment(gathering) {
    vm.comment = {
      body: event.name,
      gathering_id: vm.gathering
    };

    Comment
    .save({ comment: vm.gathering.commment })
    .$promise
    .then(gathering => $state.go('gatheringsShow', { id: gathering.id }));
  }

  $scope.$watch(() => addComment);
}
