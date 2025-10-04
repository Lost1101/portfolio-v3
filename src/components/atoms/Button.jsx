import PropTypes from 'prop-types'

export default function Button({children, className}){
    return(
        <button className={`btn btn-primary ${className}`}>
            {children}
        </button>
    )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}