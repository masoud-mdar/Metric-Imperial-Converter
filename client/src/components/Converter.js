import React from "react"

const Converter = (props) => {

    return (
        <div className="container">
            <div className="title">
                <h1>Metric / Imperial Converter</h1>
            </div>
            <div className="input-area">
                <input value={props.data.result.returnNum ? `${props.data.result.returnNum} ${props.data.result.returnUnit}` : ""} onChange={props.data.handleChange} placeholder="your converted value comes here..." className="input"></input>
                <input name="main" onChange = {props.data.handleChange} value={props.data.input} placeholder="enter a number..." className="input"></input>
            </div>

            <div className="choose">
                <button name="chooser" onClick={props.data.handleClick}>{props.data.isMetric ? " Metric to Imperial" : "Imperial to Metric"}</button>
                <h2>{props.data.innerText}</h2>
            </div>
            <div className="unit-area">
                <div className="dropdown">
                    <button className="dropbtn">Choose Unit</button>
                    <div className="dropdown-content" style={{display: props.data.display}}>
                        <button name="btn1" onClick={props.data.handleClick}>{props.data.isMetric ? `${props.data.metricUnitArray[0]} to ${props.data.impUnitArray[0]}` :`${props.data.impUnitArray[0]} to ${props.data.metricUnitArray[0]}` }</button>
                        <button name="btn2" onClick={props.data.handleClick}>{props.data.isMetric ? `${props.data.metricUnitArray[1]} to ${props.data.impUnitArray[1]}`  : `${props.data.impUnitArray[1]} to ${props.data.metricUnitArray[1]}` }</button>
                        <button name="btn3" onClick={props.data.handleClick}>{props.data.isMetric ? `${props.data.metricUnitArray[2]} to ${props.data.impUnitArray[2]}`  : `${props.data.impUnitArray[2]} to ${props.data.metricUnitArray[2]}` }</button>
                    </div>
                </div>
            </div>


            <div className="submit">
                <button name="submit" onClick={props.data.handleClick}>convert</button>
            </div>
            
            <div className="convert-text">
                <h2>{props.data.result.string || props.data.result.error}</h2>
            </div>
        
        </div>
    )
}

export default Converter