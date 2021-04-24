import style from '../ContactFilter/ContactFilter.module.css';

const ContactFilter = ({value, onChange}) =>(
            <form className={style.form}>
                <label className={style.label_text}>
                Phone book search
                    <input className={style.form_input}
                    type = "text"
                    value = {value}
                    onChange ={onChange}
                    />
                </label>
            </form>
);

export default ContactFilter;

 