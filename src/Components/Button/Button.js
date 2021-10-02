import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'
import Typography from '../Typography'

export const Button = (props) => {
    const {
        className,
        children,
        variant,
        color,
        ...otherProps
    } = props

    const variantClass = styles[variant]
    const colorClass = styles[color]


    return (
        <button
            className={`${styles.root}${className ? ` ${className}` : ''}${variantClass ? ` ${variantClass}` : ''}${colorClass ? ` ${colorClass}` : ''}`}
            {...otherProps}
        >
            <Typography
            variant={'button'}
            >
                {children}
            </Typography>
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    variant: PropTypes.oneOf(['contained', 'text']),
    color: PropTypes.oneOf(['primary', 'secondary'])
}

export default Button