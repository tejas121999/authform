import React from "react";

const LoginInput = ({ name, label, error, ...rest }) => {
    return (
        <div className="mb-3" >
            <label htmlFor={name} className="form-label">{label}</label>
            <input
                {...rest}
                name={name}
                id={name}
                class="form-control"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>

    );
}

export default LoginInput