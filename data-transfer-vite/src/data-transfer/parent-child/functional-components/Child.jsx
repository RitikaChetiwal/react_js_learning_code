export const Child = (props) => {
    console.log(props);
    console.log(props.name);
    console.log(props.age);
    console.log(props.salary);

    return (
        <>
            <h3>Name: {props.name}</h3>
            <h3>Age: {props.age}</h3>
            <h3>Salary: {props.salary}</h3>
        </>
    )
}