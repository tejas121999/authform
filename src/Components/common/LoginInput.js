import React from "react";

const LoginInput = ({ name, label, value, onChange, error }) => {
    return (
        <div className="mb-3" >
            <label htmlFor={name} className="form-label">{label}</label>
            <input
                value={value}
                onChange={onChange}
                name={name}
                id={name}
                type="text"
                class="form-control"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>

    );
}

export default LoginInput