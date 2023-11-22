import React from 'react'
import { useState } from 'react'

function DummyButton() {
    const [insights, setInsights] = useState({})
    const getInsights = async () => {
        console.log("Inside get insights button")
        await fetch('http://127.0.0.1:5000/get-insights')
            .then(response => response.json())
            .then(data => setInsights(data))
            .catch(error => alert(error + " - There was an error, please try again after some time!"))
        }
  return (
    <div>
        <button onClick={() => getInsights()}>Get Insights</button>
        <div>
            <div>{insights['message']}</div>
            <div>{insights['college']}</div>
            <button onClick={() => setInsights({})}>Clear</button>
        </div>
    </div>
  )
}

export default DummyButton