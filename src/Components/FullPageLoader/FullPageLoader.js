import React from 'react'
import PropTypes from 'prop-types'

import Spinner from './Spinner'

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
            <Spinner
            className={styles.spinner}
            />
        </div>
    )
}

FullPageLoader.propTypes = {
    className: PropTypes.string
}

export default FullPageLoader