// Higher Order Component (HOC) - A component that renders another component
// 1. Reuse Code, 2. Render Hijacking, 3. Prop manipulation, 4. Abstract state


import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a privare info. Please dont share!</p>}
            <WrappedComponent {...props} />       
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login first</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

//ReactDOM.render(<AdminInfo isAdmin={false} info="INFO PORTION" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="INFO PORTION" />, document.getElementById('app'))