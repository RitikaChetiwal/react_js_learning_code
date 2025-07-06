import { Children } from "./Children"

export const Child = ({value}) => {
    console.log(value);
    
    return(
        <div>
            Child
            {/* Props from parent value: {value} */}
            <Children value2={value}/>
        </div>
    )
}

