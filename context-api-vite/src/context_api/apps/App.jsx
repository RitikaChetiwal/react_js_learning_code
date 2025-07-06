import { Comp } from "../components/Comp";
import { MyProvider } from "../contexts/MyContext";

export const App = () => {

  return (
    <MyProvider>
      <Comp />
    </MyProvider>
  )
}