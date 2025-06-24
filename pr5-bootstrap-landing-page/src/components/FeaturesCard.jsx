const FeaturesCard = ({ icon: Icon, title, desc }) => {
    return (
        <div className="col-lg-6 col-md-6">
            <div className="feature-item ps-5 d-flex  gap-2">
                <div>
                    <div className="icon d-flex align-items-center justify-content-center ">
                        <Icon />
                    </div>
                </div>
                <div className="feature-info ms-3">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default FeaturesCard