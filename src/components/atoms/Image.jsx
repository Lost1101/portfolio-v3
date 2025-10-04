import PropTypes from "prop-types"

export default function Image({src, alt='none', className='', ...props}){
    return(
        <div>
            <img src={src} alt={alt} className={className} {...props} />
        </div>
    )
}

Image.PropTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string
}