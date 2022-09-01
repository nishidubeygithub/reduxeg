import { ActionTypes } from "../action/actionType"

const initialState = {
  Data:[{// for flatlist
    name:'', 
    age:''
  }
  ],
  

  visible:false,
  edit:false,
    name:'',
    age: ''
    
}

const reducer = (state = initialState, action) => {
  const {payload,type} =action
      switch(type){
         case ActionTypes.SET_USER_NAME:
        return {...state, name:payload}

        case ActionTypes.SET_USER_AGE:
        return{...state, age:payload}

        case ActionTypes.SET_USER_MODAL:
        return {...state, visible:payload}

        case ActionTypes.SET_EDIT_MODAL:
        return {...state, edit:payload}

        case ActionTypes.SET_USER_LIST:
          //console.log(payload.name, payload.age);
        return {...state, Data: [...state.Data, {name:payload.name, age:payload.age}]}

       case ActionTypes.UPDATE_USER: 
      //  console.log(payload.name, payload.age);
        return {...state, Data: [...state.Data, {name:payload.name, age:payload.age}]}

        case ActionTypes.DELETE_USER:
           console.log(payload.name, payload.age);
          return{...state, Data: [...state.Data.filter((item) => item.id != action.id)],
             }

        default: 
          return state;
 }
}
export default reducer;