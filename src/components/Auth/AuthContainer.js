import React, { useState } from 'react'
import Auth from './Auth'
import { connect } from 'react-redux'
import { signInTA } from '../../actions/thunkCreators'

const AuthContainer = ({ signInTA }) => {
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        signInTA({
            email,
            pwd
        })
    }

    return <Auth setEmail={setEmail} setPwd={setPwd} handleSubmit={handleSubmit} />
}

export default connect(null, {
    signInTA
})(AuthContainer)