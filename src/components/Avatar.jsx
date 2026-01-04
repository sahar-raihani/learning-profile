function Avatar({ imageUrl, name}) {
    return (
        <img 
            src={imageUrl}
            alt={name}
            width="80"
            height="80"
            style={{ borderRadius: "50%" }}
        />
    );
}

export default Avatar;