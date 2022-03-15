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
            <div class="ui labeled button" tabindex="0" onClick={countUp}>
                <div class="ui red button">
                    <i class="heart icon"></i> Up
                </div>
                <a class="ui basic red left pointing label">
                    {count}
                </a>
            </div>
            <div class="ui labeled button" tabindex="0" onClick={countDown}>
                <div class="ui basic blue button">
                    <i class="fork icon"></i> Down
                </div>
                <a class="ui basic left pointing blue label">
                    {countHundred}
                </a>
            </div>
        </>
    )
}