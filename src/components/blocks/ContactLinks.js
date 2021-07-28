function ContactLinksBlock(props) {
    const links = [
        {
            text: '987.654.3210',
            url: 'tel:+1987654321',
            icon: <svg xmlns="http://www.w3.org/2000/svg" title="Phone icon" viewBox="0 0 122.9 122.9"><path d="M61.4 0A61.2 61.2 0 01123 61.4 61.2 61.2 0 0161.4 123 61.2 61.2 0 010 61.4 61.2 61.2 0 0161.4 0zM48.1 56.2a41.2 41.2 0 0018.8 18.7c.4.2.7.2 1 0 .5-.1 1-.5 1.4-1 .4-.3.8-.9 1.3-1.5 1.9-2.4 4.2-5.5 7.4-4l.2.2L89 74.8h.1c1.4 1 2 2.5 2 4.2a11.4 11.4 0 01-6.7 10A23.6 23.6 0 0168 90a43 43 0 01-9.8-4.8l-.2-.2c-1.6-1-3.4-2-5-3.3a62.7 62.7 0 01-16.7-19c-3.5-6.2-5.4-13-4.3-19.4a14 14 0 014.7-8.8c2.3-1.9 5.4-2.9 9.4-2.5.4 0 .9.3 1 .7l7 11.7c1 1.3 1.2 2.6.6 4-.5 1-1.4 2-2.7 2.9l-1.2 1c-1.6 1.1-3.4 2.4-2.8 4v-.1z" fillRule="evenodd" clipRule="evenodd"/></svg>,
        },
        {
            text: 'alexku.alexku@gmail.com',
            url: 'mailto:alexku.alexku@gmail.com',
            icon: <svg xmlns="http://www.w3.org/2000/svg" title="Email icon" viewBox="0 0 122.9 122.9"><path d="M61.4 0A61.4 61.4 0 110 61.4 61.4 61.4 0 0161.4 0zM30.7 38L62 63.5 92 38zm-2 42.9L51 58.5 28.7 40.4v40.5zm24.7-20.4l-23 23h61.8l-22-23-7.2 6.2a1.6 1.6 0 01-2 0l-7.6-6.2zm19.3-2l21.5 22.6V40L72.7 58.6z" fillRule="evenodd"/></svg>,
        },
        {
            text: 'GitHub',
            url: 'https://github.com/AlexKuWerz',
            icon: <svg xmlns="http://www.w3.org/2000/svg" title="Github icon" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640"><path d="M320 8a320 320 0 00-101.2 623.6c16 3 22-7 22-15.4 0-7.7-.4-32.9-.5-59.6-89 19.4-107.8-37.7-107.8-37.7-14.6-37-35.6-46.9-35.6-46.9-29-19.9 2.2-19.4 2.2-19.4 32.2 2.2 49 33 49 33 28.6 48.9 75 34.7 93.2 26.5 2.9-20.7 11.2-34.8 20.3-42.8-71-8-145.8-35.5-145.8-158.1a124 124 0 0133-85.9c-3.3-8-14.3-40.6 3-84.7 0 0 27-8.6 88.1 32.8a307 307 0 01160.2 0c61.1-41.4 88-32.8 88-32.8 17.3 44.1 6.4 76.7 3.1 84.7 20.5 22.4 33 51 33 85.9 0 122.9-75 150-146.2 157.8 11.5 10 21.7 29.4 21.7 59.3 0 42.8-.3 77.3-.3 87.8 0 8.5 5.7 18.5 22 15.3A320 320 0 00320 8z"/></svg>,
        },
        {
            text: 'LinkedIn',
            url: 'https://www.linkedin.com/in/oleksandr-kulyk-b6572862/',
            icon: <svg xmlns="http://www.w3.org/2000/svg" title="LinkedIn icon" viewBox="0 0 3333 3333" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"><path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm-215 1336h342v175h5c48-86 164-175 338-175 361 0 428 225 428 517v596h-357v-528c0-126-3-288-186-288-186 0-214 137-214 279v537h-357V1336zm-247-309c0 102-83 186-186 186-102 0-186-83-186-186 0-102 83-186 186-186 102 0 186 83 186 186zm-371 309h371v1113H834V1336z"/></svg>,
        },
        {
            text: 'Resume',
            url: 'https://drive.google.com/file/d/1u1HC2lCnu5U80geL-trI7tKb8ZtBCgyX/view?usp=sharing',
            icon: <svg xmlns="http://www.w3.org/2000/svg" title="PDF icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8c0-.55.45-1 1-1H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5h2c.83 0 1.5.67 1.5 1.5v3zm4-3.75c0 .41-.34.75-.75.75H19v1h.75c.41 0 .75.34.75.75s-.34.75-.75.75H19v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8c0-.55.45-1 1-1h1.25c.41 0 .75.34.75.75zM9 9.5h1v-1H9v1zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1zm11 5.5h1v-3h-1v3z"/></svg>,
        },
    ];

    const linksItems = links.map(link => {
        return (
            <li className="list-item" key={link.text}>
                <a href={link.url}><span className="icon">{link.icon}</span>{link.text}</a>
            </li>
        );
    });

    return (
        <section className="content-section branch-decor branch-decor-rounded bullet-point-decor">
            <h2 className="title">Contact Me</h2>
            <ul className="contacts-list">
                {linksItems}
            </ul>
        </section>
    );
}

export default ContactLinksBlock;
