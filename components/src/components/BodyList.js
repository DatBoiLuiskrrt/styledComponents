import React, { useState, useEffect} from "react";
import axios from "axios";



const BodyList = () => {
    const [item, setItem] = useState([]);
     
    useEffect( () => {
        axios
        .get("")
        .then(response => {
            setItem( response.data);
            }
            
        )
        .catch( error => {
            console.log( "No data returned ", error);
        })
    },[]);
    return (
        <>
        {item.map( data => {
            return (
                <Body  data={data}/>
            )
        })}
        </>
    );
};

export default BodyList;

