function Header(props) {
    const { setCurrentPage } = props;

    return (
        <header className="site-header">
            <h1 className="logo">Portfolio</h1>
            <nav className="main-nav">
                <ul className="nav-list">
                    <li className="nav-list-item"><a href="#about-me" onClick={() => setCurrentPage('About')}>About Me</a></li>
                    <li className="nav-list-item"><a href="#skills" onClick={() => setCurrentPage('Skills')}>Skills</a></li>
                    <li className="nav-list-item"><a href="#works" onClick={() => setCurrentPage('Works')}>Works</a></li>
                    <li className="nav-list-item"><a href="#contact-me" onClick={() => setCurrentPage('Contact')}>Contact Me</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
