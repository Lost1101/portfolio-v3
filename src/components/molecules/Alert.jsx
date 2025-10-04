import propTypes from 'prop-types';
import Icon from "../atoms/Icon";

export default function Alert({library, name, text, className=''}) {
    return(
        <div role="alert" className={`alert alert-info ${className}`}>
            <Icon library={library} name={name} size={20}/>
            <span>{text}</span>
        </div>
    )
}

Alert.propTypes = {
    library: propTypes.string,
    name: propTypes.string,
    text: propTypes.string.isRequired
}