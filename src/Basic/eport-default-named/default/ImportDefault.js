import Narendra from './ExportDefault';

const ImportDefault = () => {
    return <>
        <h1> im import default way 1</h1>
        <ul>
            <li>1st way: if we need export default, we can import that file with any name</li>
            <p>Ex: export default HelloWorld</p>
            <p>Import section : import Narendra from './fileaddress'</p>
        </ul>
        <Narendra />
    </>
}

export default ImportDefault;