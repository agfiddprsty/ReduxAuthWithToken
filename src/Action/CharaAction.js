import axios from 'axios';

// const AuthStr = 'Bearer ' + USER_TOKEN;
// const URL = 'https://kitsu.io/api/edge/characters';
const URL = 'http://localhost:3333/sections';
const AuthStr = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU1MTc3MzE5M30.UjUNnFhbJzYpQJuzG6RKpPeR8h3T31_UGF96otUQNi4';

export function fetchChara(){
  return {
    type: 'FETCH_CHARA',
    payload: axios.get(URL, { 'headers': { 'Authorization' : AuthStr}} ) 
  };
}
