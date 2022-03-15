import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    const [countHundred, setCountH] = useState(100)
    const countUp = () => {
        setCount(count + 1)
    }
    const countDown = () => {
        setCountH(countHundred - 1)
    }

    return (
        <>
            <p>Counter</p>
            <div className="ui labeled button" tabIndex="0" onClick={countUp}>
                <div className="ui red button">
                    <i className="heart icon" /> Up
                </div>
                <a className="ui basic red left pointing label">
                    {count}
                </a>
            </div>
            <div className="ui labeled button" tabIndex="0" onClick={countDown}>
                <div className="ui basic blue button">
                    <i className="fork icon" /> Down
                </div>
                <a className="ui basic left pointing blue label">
                    {countHundred}
                </a>
            </div>
        </>
    )
}