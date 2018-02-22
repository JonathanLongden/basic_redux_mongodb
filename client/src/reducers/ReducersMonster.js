import {
    STANDARDS
  } from '../actions/ActionsMonster';
  
const initialState = {
  Monsters: []
}

export default function Monsters( state = initialState, action) {
  switch (action.type) {
    case STANDARDS.FETCH_MONSTER_FULFILLED:
        return {
          ...state,
          Monsters: action.payload.data
        }
    case STANDARDS.ADD_MONSTER_FULFILLED:
        return {
          ...state,
          monsters: [...state.monsters, action.payload.data]    
          };
    case STANDARDS.DELETE_MONSTER:
        return { Monsters : state.Monsters.filter(s =>
          Monsters._id !== action._id
      )};
    // case 'DELETE_HOSTNAME':
    //   return { hostnames: state.hostnames.filter(hostname =>
    //  hostname.id !== action.hostnameId
    // )}
    case STANDARDS.UPDATE_MONSTER:
        console.log(action.monster);
        return state.map((s) => {
          //this allows strings to be compared to Numbers
          if (s.id != action.monster.id) {
            return s;
          }
          //return action.beer;
          return action.monster;
        });
    default:
      return state;
  }
}
  // import {
  //   ADD_DOG,
  //   DELETE_DOG,
  //   UPDATE_DOG,
  //   FETCH_DOG_FULFILLED,
  //   ADD_DOG_FULFILLED
  // } from '../actions/dogs'
  
  
  // const initialState = {
  //   dogs: []
  // }
  
  // export default function dogs(state = initialState, action) {
  //   switch (action.type) {
  //     case FETCH_DOG_FULFILLED:
  //       return {
  //         ...state,
  //         dogs: action.payload.data
    
  //       }
  //     case ADD_DOG_FULFILLED:
  //       return {
  //         ...state,
  //         dogs: [...state.dogs, action.payload.data]    
  //         }
//       case DELETE_DOG:
//       return state.filter(dog =>
//         dog.id !== action.id
//       )
//       case UPDATE_DOG:
//       return state.map(dog =>
//         dog.id === action.id ?
//           action.dog :
//           dog
//       )
  //     default:
  //       return state
  //   }
  // }