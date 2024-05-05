import Timing from './Timing';
// import ChildComponent from './Basic/props/ChildComponent';
import ParentShowList from './Basic/events/ParentShowList';
// import ImportDefault from './eport-default-named/default/ImportDefault';
// import { NamedImport } from './eport-default-named/namedExport/NamedImport';
import clock from './assets/clock.png';
import Sample from './Hooks/Sample';

const Basics = () => {
    return <>
        <div className="App">
            <span>Hello ReactJs</span>
            <span className='date'>
                <img src={clock} alt='profile pic' width={50} height={50} />
                <Timing />
            </span>
        </div>
        <div className='main'>
            <Sample />
            {/* <ChildComponent /> */}
            <ParentShowList />
            {/* <ImportDefault />
    <NamedImport /> */}
        </div>


    </>
}

export default Basics;