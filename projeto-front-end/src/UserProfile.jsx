import React from "react"; 
import { useParams } from "react-router-dom";


const UserProfille = () => {

    const { id } = useParams();
    return ( <h1>User Profile for User ID: {id}</h1> );
}
 
export default UserProfille;