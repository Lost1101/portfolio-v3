import propTypes from "prop-types";
import Input from "../atoms/Input";

export default function FormField({typeform, placeholder, label, id}){
    return(
        <div>
            {label && (<label htmlFor={id} className="form-label">{label}</label>)}
            <Input id={id} type={typeform} placeholder={placeholder} className={'w-full'}/>
        </div>
    )
}

FormField.propTypes = {
    typeform: propTypes.string,
    placeholder: propTypes.string,
    label: propTypes.string,
    id: propTypes.string,
    className: propTypes.string
}