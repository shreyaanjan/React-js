const AboutCard = ({ icon: Icon, title, desc }) => {
    return (
        <div className="col-lg-6 col-md-6">
            <div className="about-card">
                <div className="about-icon">
                    <Icon />
                </div>
                <div className="card-body">
                    <h4 className="card-title text-capitalize my-3">{title}</h4>
                    <p className="card-text">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutCard