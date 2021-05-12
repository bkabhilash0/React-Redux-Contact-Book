import React, { useEffect, useState } from "react";
import { getContact, updateContact } from "../../actions/contactAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const { id } = useParams();
  const contact = useSelector((state) => state.contacts.contact);
  const history = useHistory();

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
    }
    dispatch(getContact(id));
  }, [contact]);

  const onUpdateContact = (e) => {
    e.preventDefault();
    const updatedContact = {
      name,
      phone,
      email,
    };
    dispatch(
      updateContact({
        ...contact,
        ...updatedContact,
      })
    );
    history.push("/");
  };

  return (
    <div style={{ color: "white", fontWeight: "bold", fontSize: "2rem" }}>
      <div
        className="card border-0 shadow"
        style={{ backgroundColor: "#212529" }}
      >
        <div className="card-header">Edit Contact</div>
        <div className="card-body">
          <form onSubmit={onUpdateContact}>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter the Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter the Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter the Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <button type="submit" className="btn btn-danger btn-lg">
              Edit Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
