import React from 'react'

const Auth = props => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <input type='email' onChange={(e) => props.setEmail(e.target.value)}/>
            <input type='password' onChange={(e) => props.setPwd(e.target.value)}/>
            <button>Login</button>
        </form>
    </div>
}

export default Auth