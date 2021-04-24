import style from '../ContactList/ContactList.module.css';

const ContactList = ({contacts, onDeleteContact}) => (
<ul className ={style.contactList}>
    {contacts.map(({name, id, number}) =>(
        <li key ={id} className = {style.contactItem}>
            <p className = {style.contactName}>{name}
                {': '}
                {number}
                </p>
                <button className ={style.deleteBtm} onClick ={() => onDeleteContact(id)}>Delete</button>
        </li>
    )

    )}
</ul>
)


export default ContactList;