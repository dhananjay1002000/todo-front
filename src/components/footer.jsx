function Footer(){
    const year = new Date().getFullYear();
    return (
        <footer >
            <h3>copywrite @ {year} </h3>
            <p>Made with ♥ in India</p>
        </footer>
    )
}
export default Footer;