import axios from 'axios';

export const STANDARDS = {
  ADD_MONSTER :'ADD_MONSTER',
  DELETE_MONSTER : 'DELETE_MONSTER',
  UPDATE_MONSTER : 'UPDATE_MONSTER',
  FETCH_MONSTER : 'FETCH_MONSTER',
  FETCH_MONSTER_FULFILLED : 'FETCH_MONSTER_FULFILLED',
  ADD_MONSTER_FULFILLED : 'ADD_MONSTER_FULFILLED',

};

//Get
export function fetchMonsters() {
  return {
    type: STANDARDS.FETCH_MONSTER,
    payload: axios.get('/monster')
  };
}
//Create
export function addMonster(monster) {
  console.log(monster);
  return {
    type: STANDARDS.ADD_MONSTER,
    payload: axios.post('/monster', monster)
  };
}
//Delete
export function deleteMonster(_id) {
  console.log(_id);
  return {
    type: STANDARDS.DELETE_MONSTER,
    _id: _id,
    payload: axios.delete('/monster/' + _id._id)
  };
}

export function updateMonster(monster) {
  console.log(monster);
  return {
    type: STANDARDS.UPDATE_MONSTER,
    monster: monster
  };
}
// export function updateDog(id, dog) {
//   return {
//     type: UPDATE_DOG,
//     id: id, 
//     dog: dog
//   }
// }






