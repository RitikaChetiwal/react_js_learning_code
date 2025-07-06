import { CounterProvider } from "../contexts/AppContext"
import Increment from "../Increment";
import Decrement from "../components/Decrement";
import Reset from "../Reset";
const CounterApp = () => {
    return (
        <CounterProvider>
            <Increment />
            <Decrement />
            <Reset />
        </CounterProvider>
    )
}
export default CounterApp;
