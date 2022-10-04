import React from 'react';
import "./Contacts.css";
import SingleContact from "./SingleContact";

export default function Contacts() {
    const contactsArray = [
        {
            img: 'https://picsum.photos/25',
            name: 'Lindsey Stroud',
            email: 'lindsey.stroud@gmail.com',
            company: 'Hatchbuck',
            role: 'Manager',
            forecast: '50 %',
            recent: '5 Minutes ago'
        },
        {
            img: 'https://picsum.photos/25/25.jpg',
            name: 'Nicci Troiani',
            email: 'nicci.troiani@gmail.com',
            company: 'Slack',
            role: 'Manager',
            forecast: '75 %',
            recent: '14 Minutes ago'
        },
        {
            img: 'https://picsum.photos/25/25',
            name: 'George Fields',
            email: 'george.fields@gmail.com',
            company: 'Clockify',
            role: 'CEO',
            forecast: '0 %',
            recent: '6 Hours ago'
        },
        {
            img: 'https://picsum.photos/seed/picsum/25/25',
            name: 'Rebecca Moore',
            email: 'rebecca.moore@gmail.com',
            company: 'Upwork',
            role: 'Manager',
            forecast: '25 %',
            recent: 'Dec 14, 2018'
        }
    ]

  return (
    <div className='contacts-container'>
        <div className='table'>
            <table>
                <tbody>
                    <tr className='table-title'>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Company name</td>
                        <td>Role</td>
                        <td>Forecast</td>
                        <td>Recent activity</td>
                    </tr>
                    
                    {
                        contactsArray.map((el, ind)=>{
                            return <SingleContact key={ind} img={el.img} name={el.name} email={el.email} company={el.company} role={el.role} forecast={el.forecast} recent={el.recent}  />
                        })
                    }
                </tbody>
            </table>

        </div>
    </div>
  )
}
