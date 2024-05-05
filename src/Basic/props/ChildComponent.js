import ProfileCard from '../nested-components/ProfileCard'

const ChildComponent = () => {
    const profileData = [
        { id: 1, name: 'Narendra', imageUrl: 'https://w0.peakpx.com/wallpaper/209/381/HD-wallpaper-background-abstract-1-jpg-design-colors-blue.jpg', title: 'Nature', description: 'SKU', button: 'Contact' },
        { id: 2, name: 'Gynanadeepu', imageUrl: 'https://w0.peakpx.com/wallpaper/209/381/HD-wallpaper-background-abstract-1-jpg-design-colors-blue.jpg', title: 'Natural', description: 'SVU', button: 'Notify' },
        { id: 3, name: 'Saha', imageUrl: 'https://w0.peakpx.com/wallpaper/209/381/HD-wallpaper-background-abstract-1-jpg-design-colors-blue.jpg', title: 'Natural', description: 'SVU', button: 'Notify' }
    ]
    return <>
        {
            profileData.map((e) => {
                // destructuring
                const { id, name, imageUrl, description, title, button } = e;
                return <>
                    {/* <ProfileCard key={e.id} name={e.name} imageUrl={e.imageUrl} description={e.description} title={e.title} button={e.button} /> */}
                    <ProfileCard key={id} name={name} imageUrl={imageUrl} description={description} title={title} button={button} />
                </>
            })
        }
    </>
}

export default ChildComponent;