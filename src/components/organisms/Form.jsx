import PropTypes from "prop-types"
import Button from "../atoms/Button"

export default function Form({children, action, method, className}){
    return(
        <form className={className} action={action} method={method}>
            {children}
            <Button className={'my-5'}>Submit</Button>
        </form>
    )
}

Form.PropTypes = {
    children: PropTypes.node,
    action: PropTypes.string,
    method: PropTypes.string,

}