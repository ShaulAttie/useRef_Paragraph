import { useEffect, useState } from "react";

import Name03 from "./Name03";
import Problems03 from "./Problems03";
import Date03 from "./Date03";
import Urgency03 from "./Urgency03";
import FreeText03 from "./FreeText03";

import "./Layout03.css"

function Layout03(props) {
    const today = new Date().toISOString().split('T')[0]

    const [name, setName] = useState('')
    const [problem, setProblem] = useState('')
    const [problemList, setProblemList] = useState('')
    const [subproblem, setSubproblem] = useState('')
    const [date, setDate] = useState('')
    const [numDays, setNumDays] = useState('')
    const [range, setRange] = useState(4)
    const [urgency, setUrgency] = useState('')
    const [rangeStyle, setRangeStyle] = useState({ accentColor: "#FF0000" })
    const [textfree, setTextfree] = useState('')
    const [tlength, setTlength] = useState(0)

    const [isFNDisabled, setIsFNDisabled] = useState(true)
    const [isDATEDisabled, setIsDATEDisabled] = useState(true)
    const [isPROBDisabled, setIsPROBDisabled] = useState(true)
    const [isSUBPROBDisabled, setIsSUBPROBDisabled] = useState(true)
    const [isTXTAREADisabled, setIsTXTAREADisabled] = useState(true)

    const [isFormValid, setFormValid] = useState(true)
    const [isFormData, setFormData] = useState(false)

    useEffect(
        ()=> formValidity(),
        console.log('effect')
        ,[])

    const nameOnchangeHandler = (e) => {
        setName(e.target.value)
        let fnPattern = e.target.pattern
        e.target.value.match(fnPattern) ? (setIsFNDisabled(false)) : (setIsFNDisabled(true))
    };

    const problemOnchangeHandler = (e) => {
        (e.target.value == e.target.options[0].value) ? setFunProb() : setProblem(e.target.value)
        setProblemList(props.problemsList.filter(elem => elem.problem === e.target.value))
        e.target.value != e.target.options[0].value ? setIsPROBDisabled(false) : setIsPROBDisabled(true)
    };

    function setFunProb(){
        setProblem('')  
        setIsSUBPROBDisabled(true)
        setIsPROBDisabled(false) 
    };

    const subProblemOnchangeHandler = (e) => {
        setSubproblem(e.target.value);
        (e.target.value != e.target.options[0].value) ? setIsSUBPROBDisabled(false) : setIsSUBPROBDisabled(true)
    };

    const dateOnchangeHandler = (e) => {
        setNumDays((Date.parse(e.target.max) - e.target.valueAsNumber) / (1000 * 60 * 60 * 24))
        setDate(e.target.value)
        setIsDATEDisabled(false);
    };

    const rangeOnchangeHandler = (e) => {
        console.dir(e.target.nextSibling);
        props.urgLevel.map(elem => e.target.value == elem.level && setUrgency(elem.text))
        setRange(e.target.value)
        checkColor(e.target.value)
    }

    const checkColor = (value) => {
        props.urgLevel.map(elem=> elem.level == value && setRangeStyle({accentColor: elem.color}))
        // value == 1 ? setRangeStyle({ accentColor: "#008000" }) :
        //     value == 2 ? setRangeStyle({ accentColor: "#FFFF00" }) :
        //         value == 3 ? setRangeStyle({ accentColor: "#FFA500" }) :
        //             value == 4 ? setRangeStyle({ accentColor: "#FF0000" }) : null
    };

    const freetextOnchangeHandler = (e) => {
        setTlength(e.target.value.length);
        setTextfree(e.target.value)
        let taMinLen = e.target.minLength
        taMinLen <= e.target.textLength ? (setIsTXTAREADisabled(false)) : (setIsTXTAREADisabled(true));
    };

    const formValidity = () => {
        (!isFNDisabled && !isPROBDisabled && !isSUBPROBDisabled && !isDATEDisabled && !isTXTAREADisabled) && setFormValid(false)
        // console.log(isFNDisabled,isPROBDisabled,isSUBPROBDisabled,isDATEDisabled,isTXTAREADisabled);  
    };

    const onsubmitHandler = (e) => {
        e.preventDefault()
        setFormData(true)
    };
    
    return (
        <form onSubmit={onsubmitHandler}>

        <main className="main">
            <Name03 value={name} onChange={nameOnchangeHandler} /><br/>
            <div>
            <label htmlFor="problem">Problems</label>
                <Problems03 value={props.problemsList} onChange={problemOnchangeHandler} />
                </div><br/>
            <div className="subprob">
                {problem &&
                    <Problems03 value={problemList[0].subProblem} onChange={subProblemOnchangeHandler} />}
            </div>
        <br/>
            <Date03 max={today} value={date} numDays={numDays} onChange={dateOnchangeHandler} /><br/>
            
            <Urgency03 value={range} style={rangeStyle} urgLevel={props.urgLevel} onChange={rangeOnchangeHandler} /><br/>  
            
            <FreeText03 tlength={tlength} onChange={freetextOnchangeHandler}/><br/>
            
            <button disabled={isFormValid}>Submit</button>
        </main>
            {isFormData && <span>Client: {name} <hr/>
                Problem: {problem} Sub-Problem: {subproblem} <br/> 
                The Problem occurred at {date},{numDays} days ago.<br/>
                Urgency: {urgency}<br/>
                Description: {textfree}</span>}
        </form>
    );
};

export default Layout03




            //     const rangeStyle = {
            //         appearance: 'none',
            //         accentColor: "black", // muda a cor no preenchimento e bola
            //         background: 'white',
            //         height: '10px',
            //         borderRadius: '5px',
            //         // borderBlockColor: "yellow",
            //         borderBlockStyle: "solid",
            //         // borderInlineEndColor: "green",
            //         // borderTopColor: "yellow",
            //         // borderBottomColor: "red",
            //         borderWidth: "2px",
            //         color: "black", // border top and bottom
            //         colorRendering: "yellow",
            //         cursor: "pointer",
            //         opacity: "0.5",
        
            // }