import React, { Component } from 'react'
import Person from './Persons/Person'
import CreatePersonButton from './Persons/CreatePersonButton';

class Dashboard extends Component {
    render() {
        return (
            <div className="Persons">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Personjhdfujdhs</h1>
                        <br />
                       <CreatePersonButton />
                        <br />
                        <hr />
                        <Person/>
                        <a href="/adminManageUsers"> ADMIN MANAGE USERS </a>
                       
                    </div>
                </div>
                <a href="/adminManageUsers"> BOOK INFO </a>
            </div>
        </div>
         
        )
    }
}
export default Dashboard;
