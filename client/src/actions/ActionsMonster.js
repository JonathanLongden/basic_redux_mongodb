export const STANDARDS = {
  ADD_MONSTER :'ADD_MONSTER',
  DELETE_MONSTER : 'DELETE_MONSTER',
  UPDATE_MONSTER : 'UPDATE_MONSTER',
};

export  function addMonster(monster) {
  console.log(monster);
  return {
    type: STANDARDS.ADD_MONSTER,
    monster: Object.assign({}, monster)
  }
}

export function deleteMonster(id) {
  return {
    type: STANDARDS.DELETE_MONSTER,
    id: id
  }
}

export function updateMonster(monster) {
  console.log(monster);
  return {
    type: STANDARDS.UPDATE_MONSTER,
    monster: monster
  }
}


//https://codereview.stackexchange.com/questions/126574/crud-application-using-react-redux

