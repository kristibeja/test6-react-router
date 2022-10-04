import "./Contacts.css";
import React from 'react';

export default function SingleContact({ img, name, email, company, role, forecast, recent }) {
  return (
    <tr className="table-data">
        <td>
            <input type="checkbox" />
        </td>
        <td className="name" style={{ display: 'flex', alignItems: 'center' }}>
            <img alt="img" src={img} style={{ borderRadius: '50%', marginRight: '10px' }} />
            {name}
        </td>
        <td className="grey">{email}</td>
        <td className="grey">{company}</td>
        <td className="grey">{role}</td>
        <td className="grey">{forecast}</td>
        <td className="grey">{recent}</td>
    </tr>
  )
}
