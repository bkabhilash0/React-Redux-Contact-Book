import {
  CLEAR_CONTACT,
  CREATE_CONTACT,
  DELETE_ALL,
  DELETE_CONTACT,
  GET_CONTACT,
  SELECT_CONTACT,
  UPDATE_CONTACT,
} from "../constants/types";

export const addContact = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: contact,
  };
};

export const getContact = (id) => {
  return {
    type: GET_CONTACT,
    payload: id,
  };
};

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload:id
})

export const selectAllContacts = (id) => ({
  type: SELECT_CONTACT,
  payload: id
})

export const clearAllContacts = () => ({
  type: CLEAR_CONTACT,
})

export const deleteAllContacts = () => ({
  type: DELETE_ALL,
})
