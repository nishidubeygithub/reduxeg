import { ActionTypes } from "./actionType"

export const setName = (name) => ({
    type:ActionTypes.SET_USER_NAME,
    payload:name
});
export const setAge = (age) => ({
    type:ActionTypes.SET_USER_AGE,
    payload:age
});
export const setModal = (modal) => ({// for modal
    type:ActionTypes.SET_USER_MODAL,
    payload:modal
});
export const editModal = (modal) => ({
    type:ActionTypes.SET_EDIT_MODAL,
    payload:modal
})
export const setList = (name, age) => ({ // for flatlist
    type:ActionTypes.SET_USER_LIST,
    payload: {name, age}
});
export const deleteUser = (name, age) => ({
    type:ActionTypes.DELETE_USER,
    payload: {name, age}
});
export const updateUser = (name, age) => ({
    type:ActionTypes.UPDATE_USER,
    payload: {name, age}
});
