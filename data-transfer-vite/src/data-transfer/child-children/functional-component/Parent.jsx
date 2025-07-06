import { Child } from "./Child"

export const Parent = () => {
    const value = 100;
    return(
        <div>
            Parent
            <Child value={value}/>
        </div>
    )
}