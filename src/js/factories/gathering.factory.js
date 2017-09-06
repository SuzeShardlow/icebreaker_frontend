angular
  .module('icebreaker')
  .factory('Gathering', gatheringFactory);

gatheringFactory.$inject = ['API', '$resource'];
function gatheringFactory(API, $resource){
  return $resource(`${API}/gatherings/:id`, { id: '@_id'});
}
