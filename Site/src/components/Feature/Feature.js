import "./Feature.css";


function Feature({imgSrc, imgAlt, titre, description}) {
    return (
        <div className="feature-item">
            <img src={imgSrc} alt={imgAlt} className="feature-icon" />
            <h3 className="feature-item-title">{titre}</h3>
            <p>
                {description}
            </p>
        </div>
    );
}

export default Feature;