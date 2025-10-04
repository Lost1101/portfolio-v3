import PropTypes from "prop-types"
import Text from "../atoms/Text"

export default function Navlink({link, children, className='', ...props}){
    return(
        <a href={link}>
            <button {...props} className={`list-none text-center hover:text-primary hover:duration-300 cursor-pointer ${className}`}>
            <Text className="font-medium text-base">{children}</Text>
            </button>
        </a>
    )
}

Navlink.propTypes = {
    link: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string
}