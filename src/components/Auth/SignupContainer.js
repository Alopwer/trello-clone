import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signUpTA } from '../../actions/thunkCreators'
import Signup from './Signup'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

const SignupContainer = ({ signUpTA, history }) => {
    const [credentials, setCredentials] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        signUpTA({
            email: credentials?.email,
            pwd: credentials?.password,
            name: credentials?.text
        })
        history.push('/login')
    }

    const handleInput = (e) => {
        setCredentials({
            ...credentials,
            [e.target.type] : e.target.value
        })
    }

    return <Signup setCredentials={setCredentials} handleSubmit={handleSubmit} handleInput={handleInput} />
}

export default compose(
    withRouter,
    connect(null, {
        signUpTA
    })
)(SignupContainer)