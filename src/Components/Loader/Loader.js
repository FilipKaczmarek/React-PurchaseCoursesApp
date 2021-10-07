import React from 'react'
import PropTypes from 'prop-types'

import Spinner from './Spinner'

import styles from './styles.module.css'

export const Loader = (props) => {
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

Loader.propTypes = {
    className: PropTypes.string
}

export default Loader