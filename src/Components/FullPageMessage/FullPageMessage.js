import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'
import Typography from '../Typography'

import styles from './styles.module.css'

export const FullPageMessage = (props) => {
    const {
        className,
        message,
        buttonLabel = 'GO BACK',
        ...otherProps
    } = props

    return (
        <div
            className={`${styles.root}${className ? ` ${className}` : ''}`}
            {...otherProps}
        >
            <div className={styles.wrapper}>
                <Typography
                variant={'h3'}
                className={styles.message}
                >
                    {message}
                </Typography>
                <Button
                    variant={'contained'}
                    color={'primary'}
                >
                    {buttonLabel}
                </Button>
            </div>
        </div>
    )
}

FullPageMessage.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string,
}

export default FullPageMessage