import Child from "./Child";

const Parent = () => {
    const data = ['Narendra', 33];

    const [name, age] = data;
    const arr = [1234, 'Yes'];
    const [salary, eligible] = arr;
    return <>
        <Child name={name} age={age} salary={salary} eligible={eligible} />

    </>
}

export default Parent;