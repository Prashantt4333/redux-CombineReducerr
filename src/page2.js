import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Page2 = () => {

    let dispatch = useDispatch()
    let store =useSelector(store => {
        return store.MulReducer
    })

    return (
        <div  className='text-center mt-5'>
            {
            console.log("store -> ",store)
            }
            <h1>page 2</h1>
            <h1>{store.fname}</h1>
            <h1>{store.value}</h1>
            <button className="btn btn-primary me-1" onClick={()=>{dispatch({type:"MULTPBY2",payload:2})}}>*2</button>
            <button className="btn btn-primary me-1" onClick={()=>{dispatch({type:"MULTPBY5",payload:5})}}>*5</button>
            <button className="btn btn-primary me-1" onClick={()=>{dispatch({type:"RESET",payload:0})}}>RESET</button>
            <button className="btn btn-primary me-1" onClick={()=>{dispatch({type:"DIVIDEBY2",payload:2})}}>/2</button>
            <button className="btn btn-primary me-1" onClick={()=>{dispatch({type:"DIVIDEBY5",payload:5})}}>/5</button>
            <br/>
            <Link to="/" className='btn btn-success mt-5'>Go to page1</Link>
            
        </div>
    );

}

export default Page2;
