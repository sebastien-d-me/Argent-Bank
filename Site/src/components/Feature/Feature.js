import "./Feature.css";


function Feature({imgSrc, imageAlt, titre, description}) {
    return (
        <div className="feature-item">
            <img src={imgSrc} alt={imageAlt} className="feature-icon" />
            <h3 className="feature-item-title">{titre}</h3>
            <p>
                {description}
            </p>
        </div>
    );
}

export default Feature;