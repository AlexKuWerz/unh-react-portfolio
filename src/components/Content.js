import AvatarBlock from "./blocks/Avatar/index";
import AboutBlock from "./blocks/About";
import SkillsBlock from "./blocks/Skills";
import WorksBlock from "./blocks/Works";
import ContactFormBlock from "./blocks/ContactForm";
import ContactLinksBlock from "./blocks/ContactLinks";

function Content(props) {
    const { currentPage, setCurrentPage } = props;

    const renderContent = () => {
        let contentBlocks = [];

        if (currentPage === 'About') {
            contentBlocks = [
                <AboutBlock key='About' setCurrentPage={setCurrentPage} />,
            ];
        }

        if (currentPage === 'Skills') {
            contentBlocks = [
                <SkillsBlock key='Skills' />,
            ];
        }

        if (currentPage === 'Works') {
            contentBlocks = [
                <WorksBlock key="Works" />,
            ];
        }

        if (currentPage === 'Contact') {
            contentBlocks = [
                <ContactLinksBlock key="Contact Me" />,
                <ContactFormBlock key="Contact Form" />,
            ];
        }

        return (
            <>
                <AvatarBlock />
                <div className="content-sections-wrapper bullet-point-decor">
                    {contentBlocks}
                </div>
            </>
        );
    }

    return (
        <>
            <div className="hero">
                <p className="subtitle">May the CSS Force be with you!</p>
            </div>
            <main className="content-wrapper">
                {renderContent()}
            </main>
        </>
    );
}

export default Content;
