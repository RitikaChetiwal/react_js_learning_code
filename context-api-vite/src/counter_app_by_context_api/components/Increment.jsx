import { useContext } from "react"
import { AppContext } from "./contexts/AppContext"
const Increment = () => {
    const { increment } = useContext(AppContext);
    return (
        <div>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default Increment;