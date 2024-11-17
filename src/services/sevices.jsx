import "./sevices.css";


const Services = () => {
    return ( <div className="services">
        <div className="services-item">
            <i className="bi bi-card-image services-icon"></i>
            Adventures
        </div>

        <div className="services-item">
            <i className="bi bi-people-fill services-icon"></i>
            Family tours
        </div>

        <div className="services-item">
            <i className="bi bi-building services-icon"></i>
            City cards
        </div>

        <div className="services-item">
            <i className="bi bi-globe services-icon"></i>
            Multy-day trips
        </div>
    </div> );
}

export default Services;