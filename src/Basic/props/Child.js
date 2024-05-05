const Child = (props) => {
    console.log(props)
    return <>
        <h1>Child Component (props)</h1>
        <p> {'Name: ' + props.name}</p>
        <p>Age: {props.age}</p>
        <p>Salary: {props.salary}</p>
        <p>Eligible: {props.eligible}</p>
    </>
}

export default Child;