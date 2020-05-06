import React, { useState, useEffect} from "react";
import Axios from "axios";



const BodyList = () => {
    const [item, setItem] = useState([]);
     
    useEffect( () => {
        Axios
        .get("")
        .then(response => {
            return ( data => {
                setItem( data.response);
            }
            )
        })
        .catch( error => {
            console.log( "No data returned ", error);
        })
    },[]);
    return (
        <>
        </>
    );
};

export default BodyList;

