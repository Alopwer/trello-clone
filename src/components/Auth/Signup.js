import React from 'react'

const Signup = props => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <input type='email' onChange={props.handleInput}/>
            <input type='password' onChange={props.handleInput}/>
            <input type='text' onChange={props.handleInput}/>
            <button>Sign Up</button>
        </form>
    </div>
}

export default Signup