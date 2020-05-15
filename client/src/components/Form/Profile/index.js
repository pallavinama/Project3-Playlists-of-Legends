import React from 'react';
// import { FiEdit2 } from 'react-icons/fi';
// import { GiSaveArrow } from 'react-icons/gi';

const ProfileForm = (props) => {

    return (
        <form>
            <div className="form-group">
                <label>Username: </label>
                <input type="username" className="form-control" placeholder={props.username}>
                </input>
                
            </div>
            <div className="form-group">
                <label>Password: </label> 
                <input type="password" className="form-control" placeholder={props.password}>
                </input>
            </div>
            <div className="form-group">
                <label>Name: </label> 
                <input type="name" className="form-control" placeholder={props.name}>
                </input>
            </div>
            <div className="form-group">
                <label>Age: </label> 
                <input type="age" className="form-control" placeholder={props.age}>
                </input>
            </div>
            <div className="form-group">
                <label>Gender: </label>
                <input type="gender" className="form-control" placeholder={props.gender}>
                </input>
            </div>
            
            {/* <button type="submit" className="btn btn-primary">Save Profile <GiSaveArrow /></button>
           
            <button href="/edit" className="btn btn-primary" style={{float: 'right'}}>Edit Profile <FiEdit2 /></button> */}
        </form>

    );
};

export default ProfileForm;