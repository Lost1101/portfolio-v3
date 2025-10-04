/**
* @param {{type?: keyof JSX.Intrinsic Elements, children: React.ReactNode, className?: string}} props
 */

import PropTypes from "prop-types"
import { Component } from "react"

export default function Text({type: Tag = 'span', children, className='', ...props}){
    return(
        <Tag className={`${className}`} {...props}>{children}</Tag>
    )
}

Text.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}