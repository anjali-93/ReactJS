import "./ToggleSwitch.css"
import { useState } from "react"

export const ToggleSwitch = () =>{
    const [isOn, setIsOn] = useState(false);
    const handleToggleSwitch =() =>{
        setIsOn(!isOn);
    }

    return(
        <>
        <div className="toggle-switch"
        style={{background: isOn ? "#4caf50" : "#f44336"}}
        onClick={handleToggleSwitch}>
            <div className={`switch ${isOn ? "on" : "off"}`}>
                <span className="switch-state">{isOn ? "on" :"off"}</span>

            </div>
        </div>
        </>
    )
    
}