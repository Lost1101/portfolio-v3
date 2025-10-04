import propTypes from 'prop-types';
import Image from "../atoms/Image";
import Text from "../atoms/Text";

export default function Card({title, children, className=''}){
    return(
        <div className={`${className} bg-base-200 rounded-lg shadow-lg`}>
            <div className='rounded-t-lg'>
                <Text type="h3" className="font-bold text-center text-2xl p-5">{title}</Text>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

Card.propTypes = {
    title: propTypes.string,
    description: propTypes.string,
    children: propTypes.node,
    className: propTypes.string
}