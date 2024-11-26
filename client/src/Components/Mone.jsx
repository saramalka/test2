import { useState } from "react";

const Mone = () => {
    const [mone, setMone] = useState(0)
    function checkMone() {
        if (mone === 6) {
            alert("the none at 6")
            setMone(0)
        }
        else {

            setMone(mone + 1)
            
        }
        return<div>{mone}</div>
    }

    return <button onClick={checkMone}>{mone}</button>
}
export default Mone