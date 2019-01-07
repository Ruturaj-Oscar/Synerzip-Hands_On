import React from "react";

function ContactCard(props) {
  return (
    <div>
      <img src={props.contact.imgUrl} />
      <h3>{props.contact.name}</h3>
      <br />
      <p>
        Phone : {props.contact.phone}
        Email : {props.contact.email}
      </p>
    </div>
  );
}
export default ContactCard;
