import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAllContacts,
  deleteAllContacts,
  selectAllContacts,
} from "../../actions/contactAction";
import Contact from "./Contact";

const Contacts = () => {
  const [selectAll, setSelectAll] = useState(false);
  const contacts = useSelector((state) => state.contacts.contacts);
  const selectedContacts = useSelector(
    (state) => state.contacts.selectedContacts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllContacts(contacts.map((contact) => contact.id)));
    } else {
      dispatch(clearAllContacts());
    }
  }, [selectAll]);

  return (
    <div>
      {selectedContacts.length > 0 ? (
        <button
          className="btn btn-danger mb-3"
          onClick={() => dispatch(deleteAllContacts())}
        >
          Delete All
        </button>
      ) : null}
      <table className="table shadow table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="selectAll"
                  onClick={() => setSelectAll(!selectAll)}
                  value={selectAll}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} selectAll={selectAll} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
