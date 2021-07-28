function SkillsBlock(props) {
    const skills = ['HTML', 'CSS', 'LESS', 'SASS', 'JavaScript', 'jQuery', 'Git', 'Gulp', 'Photoshop', 'React'];

    const skillsItems = skills.map((skill) => {
        return (
            <li className="list-item" key={skill}>{skill}</li>
        );
    });

    return (
        <section className="content-section branch-decor branch-decor-rounded bullet-point-decor">
            <h2 className="title">Skills</h2>
            <ul className="skills-list">
                {skillsItems}
            </ul>
        </section>
    );
}

export default SkillsBlock;
