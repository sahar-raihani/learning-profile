import Avatar from './Avatar.jsx';

function ProfileCard({name, role, imageUrl}) {
    return (
        <div className='card'>
            <Avatar imageUrl={imageUrl} name={name} />
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    );
}

export default ProfileCard;