import React from 'react'
import PropTypes from 'prop-types'

export default function TodoHeader(props) {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

TodoHeader.propTypes = {
    title : PropTypes.string,
    x : PropTypes.number.isRequired
}
