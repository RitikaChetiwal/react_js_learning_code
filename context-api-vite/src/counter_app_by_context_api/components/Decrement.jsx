import { useContext } from "react"
import { AppContext } from "../contexts/AppContext";
const Decrement = () => {
    const { decrement } = useContext(AppContext);
    return (
        <div>
            <button onClick = {decrement}>Decrement</button>
        </div>
    )
}
export default Decrement;