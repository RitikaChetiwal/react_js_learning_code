import { Child } from './Child';

export const Parent = () => {

    let myName = 'Ritika';
    let myAge = 100;
    let mySalary = 54000;
    
    return (
        <>
            <Child name = {myName} age = {myAge} salary = {mySalary} />
        </>
    )
}