import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';

export default function Icon({library, name, size = 24, color = 'currentColor', className = ''}){
    let IconComponent;

    switch (library){
        case 'fa':
            IconComponent = FaIcons[name];
            break;
        default:
            return null;
    }

    if (!IconComponent) return null;

    return <IconComponent size={size} color={color} className={className} />;
}

Icon.propTypes = {
    library: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
    className: PropTypes.string
};