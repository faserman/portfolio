import React from 'react';
import './index.css';

export const Contacts = (props: any) => {

  const { title, url } = props.contact;

  return (
    <div className="contact">
      <span className="title-contact text-color">{ title }:</span>
      <span className="url-contact text-color">{ url }</span>
    </div>
  )
}

/**   const { contacts } = appStore
  const contactItem = contacts.map(contact => <Contacts key={contact.title} contact={contact} />) */