import React from "react";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../../actions/contactAction";

const Contact = ({ contact,selectAll }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" checked={selectAll} onChange={() =>{}}/>
          <label htmlFor="" className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar name={contact.name} size={45} round={true} style={{marginRight: '.6rem'}} />
        {contact.name}
      </td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
      <td>
        <Link to={`/contacts/edit/${contact.id}`}>
          <i className="fas fa-edit"></i>
        </Link>
      </td>
      <td style={{ cursor: "pointer" }}>
        <i
          className="fas fa-minus-circle"
          style={{color: 'red'}}
          onClick={() => dispatch(deleteContact(contact.id))}
        ></i>
      </td>
    </tr>
  );
};

export default Contact;
