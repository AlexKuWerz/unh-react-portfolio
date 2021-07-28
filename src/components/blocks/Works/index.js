import gamePulseImg from "./images/game-pulse.jpg";
import weatherDashboardImg from "./images/weather-dashboard.jpg";
import codeQuizImg from "./images/code-quiz.jpg";
import restfulCabinImg from "./images/restful-cabin-retreats.jpg";

function WorksBlock(props) {
    const works = [
        {
            name: 'Game Pulse',
            image: gamePulseImg,
            tags: 'HTML, CSS, JavaScript, jQuery, API\'s',
            link: 'https://unh-bootcamp-projects.github.io/project-1-group-e/',
            isWide: true,
        },
        {
            name: 'Weather Dashboard',
            image: weatherDashboardImg,
            tags: 'HTML, CSS, JavaScript, jQuery, API',
            link: 'https://alexkuwerz.github.io/unh-weather-dashboard/',
            isWide: false,
        },
        {
            name: 'Code Quiz',
            image: codeQuizImg,
            tags: 'HTML, CSS, JavaScript',
            link: 'https://alexkuwerz.github.io/unh-code-quiz/src/index',
            isWide: false,
        },
        {
            name: 'Restful Cabin Retreats',
            image: restfulCabinImg,
            tags: 'HTML, CSS, JavaScript, MySQL, NodeJS',
            link: 'https://restful-cabin-retreats.herokuapp.com/',
            isWide: true,
        },
    ];

    const worksItems = works.map(work =>{
        return (
            <li className={work.isWide ? "list-item wide-item" : "list-item"} key={work.name}>
                <a className="none-styled-link" href={work.link} target="_blank" rel="noreferrer noopener">
                    <figure className="work-preview">
                        <img className="image" src={work.image} alt={work.name + " preview"}/>
                        <figcaption className="title">{work.name} <strong className="tags">{work.tags}</strong></figcaption>
                    </figure>
                </a>
            </li>
        );
    });

    return (
        <section className="content-section branch-decor branch-decor-rounded bullet-point-decor">
            <h2 className="title">Works</h2>
            <ul className="works-list">
                {worksItems}
            </ul>
        </section>
    );
}

export default WorksBlock;
