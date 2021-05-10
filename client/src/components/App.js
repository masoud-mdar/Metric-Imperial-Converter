import React, {useState} from "react"
import axios from "axios"
import Converter from "./Converter"

const App = () => {

    const [isMetric, setIsMetric] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [input, setInput] = useState("")
    const [unit, setUnit] = useState("")
    const [innerText, setInnerText] = useState("")
    const [result, setResult] = useState({})
    const [display, setDisplay] = useState("")

    const BASE_URL = "https://metric-imperial-converter-m.herokuapp.com"

    const metricUnitArray = ["km", "L", "kg"]
    const impUnitArray = ["mi", "gal", "lbs"]

    let timerId

    const handleChange = (Event) => {
        const {value, name} = Event.target
        name === "main" && setInput(value)
        
    }

    const handleClick = (Event) => {
        
        setDisplay("none")
        timerId = setTimeout(() => {
            setDisplay("")
        }, 100)

        const {name} = Event.target

        if (name === "chooser") {
            setIsMetric(prevIsMetric => !prevIsMetric)
            setInnerText("")

        } else if (isMetric && name !== "submit") {
            setInnerText(Event.target.innerHTML)
            switch (name) {
                case "btn1":
                    setUnit(metricUnitArray[0])
                    break
                case "btn2":
                    setUnit(metricUnitArray[1])
                    break
                case "btn3":
                    setUnit(metricUnitArray[2])
                    break
                default:
                    console.log()
                    break
            }

        } else if (!isMetric && name !== "submit") {
            setInnerText(Event.target.innerHTML)
            switch (name) {
                case "btn1":
                    setUnit(impUnitArray[0])
                    break
                case "btn2":
                    setUnit(impUnitArray[1])
                    break
                case "btn3":
                    setUnit(impUnitArray[2])
                    break
                default:
                    console.log()
                    break
            }

        } else if (name === "submit") {
            if (unit) {
                setIsLoading(true)
                axios.get(`${BASE_URL}/api/convert?input=${input}${unit}`).then(response => {
                    const {data} = response
                    setResult(data)
                    setIsLoading(false)
                })
            } else {
                setResult({"error": "Choose a unit!"})
            }

        }
    }

    clearTimeout(timerId)

    return (
        <div>
            {
                isLoading ? (

                    <div className="loading">
                        <h1>
                            loading...
                        </h1>
                    </div>

                ) : (

                    <Converter
                        data={{
                            result: result,
                            handleChange: handleChange,
                            input: input,
                            handleClick: handleClick,
                            isMetric: isMetric,
                            innerText: innerText,
                            display: display,
                            metricUnitArray: metricUnitArray,
                            impUnitArray: impUnitArray
                        }}
                    />
                )
            }
        </div>
    )
}

export default App