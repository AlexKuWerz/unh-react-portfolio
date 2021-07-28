function AboutBlock(props) {
    const { setCurrentPage } = props;

    return (
        <section className="content-section branch-decor branch-decor-rounded bullet-point-decor">
            <h2 className="title">About Me</h2>
            <p>I am 30 years old front-end web developer from Ukraine with more than 8 years of experience specialized in web development. I moved to the United States at the end of 2019 and now I am live in Boston, Massachusetts. I love working with the web trio HTML-CSS-JS and create unique web pages. I like to learn new things to further improve my dev skills and apply them in new projects. In the meantime, you can take a look at my recent projects in the <a href="#works-section" onClick={() => setCurrentPage('Works')}>work section</a>.</p>
        </section>
    );
}

export default AboutBlock;
