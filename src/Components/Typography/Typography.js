import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

export const Typography = (props) => {
    const {
        className,
        children,
        variant,
        ...otherProps
    } = props

    const variantClass = styles[variant]

    return (
        <span
            className={`${styles.root}${className ? ` ${className}` : ''}${variantClass ? ` ${variantClass}` : ''}`}
            {...otherProps}
        >
            {children}
        </span>
    )
}

Typography.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    variant: PropTypes.oneOf(['h1', 'h3', 'button'])
}

export default Typography