import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Page1 = () => {
  let store = useSelector((store) => {
    console.log("ekaaaa", store)
    return store.AddSumReducer
  });
  let dispatch = useDispatch()

  return (
    <>
      <div className="mt-5" style={{textAlign:"center"}}>
        {console.log("store -> ", store)}
        <h1>page 1</h1>
        <h1>{store.fname}</h1>
        <h1>{store.value}</h1>
        <button className="btn btn-primary me-1" onClick={()=>{dispatch({type:"SUB",payload:1})}}>-</button>
        <button className="btn btn-primary me-1" onClick={()=>{dispatch({type:"RESET",payload:0})}}>RESET</button>
        <button className="btn btn-primary me-1" onClick={()=>{dispatch({type:"ADD",payload:1})}}>+</button>
        <br />
        <Link to="/page2">Go to page2</Link>
      </div>
    </>
  );
};

export default Page1;
