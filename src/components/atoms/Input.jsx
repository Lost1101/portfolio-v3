import propTypes from 'prop-types'; 

export default function Input({type, placeholder, className, ...props}){
     return(
        <input type={type} placeholder={placeholder} className={`input ${className}`} {...props}/>
     )
}

Input.propTypes = {
    type: propTypes.string,
    placeholder: propTypes.string,
    className: propTypes.string
}