function Section({title, children}) {
    return (
        <div className='card'>
            <div className="section-title">{title}</div>
            {children}
        </div>
    );
}

export default Section;