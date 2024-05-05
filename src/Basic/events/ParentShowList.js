import ShowList from "./ShowList";
import Data from "./Data";

const ParentShowList = () => {
    return <>
        {
            Data.map((e) => {
                // destructuring
                const { id, name, imageUrl, description, title, button } = e;
                return <>
                    <ShowList key={id} name={name} imageUrl={imageUrl} description={description} title={title} button={button} />
                </>
            })
        }
    </>
}

export default ParentShowList;