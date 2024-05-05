
const Footer = () => {
    return <>
        <h3 style={{ fontFamily: 'monospace', color: 'pink' }}>
            i am from footer
        </h3>
    </>
}


const Header = () => {
    return <>
        <h3 style={{ color: 'green' }}>
            I am header
        </h3><Footer /></>
}

export default Header;