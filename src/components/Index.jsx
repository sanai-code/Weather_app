import {  useRef, useState } from "react"
import { SearchData } from "./SearchedData"
import "./Weather.css"
import { RxCross2 } from "react-icons/rx";



export const Card = ()=>{
    let inputValue = useRef("");
    let [inpVal,setInputVal] = useState("");
    function handleSearch(){
        setInputVal(inputValue.current.value)
    }
    function handleClear(){
        setInputVal(null)
    }
    return(
        <div className="container">
            <div className="search">
            <div className="inputFild">
            <input type="text" id="input" ref={inputValue} />
            <RxCross2 id="icon" onClick={handleClear}/>

            </div>
            <button onClick={handleSearch}>Search</button>   
            </div>
            {inpVal && <SearchData inp={inpVal}/>} 
         </div>
    )
}