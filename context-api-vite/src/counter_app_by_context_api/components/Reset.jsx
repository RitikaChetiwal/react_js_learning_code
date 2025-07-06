import { useContext } from "react"
import { AppContext } from "./contexts/AppContext";
const Reset = () => {
    const { reset } = useContext(AppContext);
    return (
        <div>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Reset;