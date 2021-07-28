import avatarImg from "./images/avatar.JPG";

function AvatarBlock(props) {
    return (
        <figure className="avatar-card">
            <span className="image-wrap"><img className="image" src={avatarImg} alt="Avatar"/></span>
            <figcaption className="name branch-decor bullet-point-decor">Oleksandr Kulyk</figcaption>
        </figure>
    );
}

export default AvatarBlock;
