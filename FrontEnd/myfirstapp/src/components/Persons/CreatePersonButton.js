import React from 'react'
import {link, Link} from "react-router-dom";

 const CreatePersonButton=() => {
    return (
        <React.Fragment>
        <Link to="/adminManageUsers"
        className="btn btn-lg btn-info">
        Manage Users
        </Link>
        </React.Fragment>
    )
};
export default CreatePersonButton;