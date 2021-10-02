import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const FullPageLoader = (props) => {
    const {
        className,
        ...otherProps
    } = props

    return (
        <div
            className={`${styles.root}${className ? ` ${className}` : ''}`}
            {...otherProps}
            >
            FullPageLoader
        </div>
    )
}

FullPageLoader.propTypes = {
    className: PropTypes.string
}

export default FullPageLoader