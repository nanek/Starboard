import io from 'socket.io-client';
import {
  UPDATE_SOME_REPOS,
  REMOVE_REPOS,
  updateSomeRepos,
  removeRepos
} from '../universal/actions/serverActions';

let socket;

export function connectSocket(store) {

  socket = io();

  // TODO: handle event emitting when connection is not ready yet

  socket.on(UPDATE_SOME_REPOS, function (repos) {
    updateSomeRepos(repos);
  });

  socket.on(REMOVE_REPOS, function (data) {
    console.log(JSON.stringify(data, null, 4));
  });
}

export function getClient() {
  return socket;
}
