import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useHistory } from "react-router";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  let history = useHistory();

  const dispatch = useDispatch();

  const createContact = (e) => {
    e.preventDefault();
    console.log(name, email, phone);
    dispatch(addContact({ id: shortid.generate(), name, email, phone }));
    history.push('/');
  };
  return (
    <div style={{color: "white",fontWeight: "bold", fontSize: "2rem"}}>
      <div className="card border-0 shadow" style={{backgroundColor: '#212529'}}>
        <div className="card-header">Add a Contact</div>
        <div className="card-body">
          <form onSubmit={createContact}>
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
            <button type="submit" className="btn btn-primary btn-lg">
              Create Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
