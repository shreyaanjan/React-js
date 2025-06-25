const FeaturesCard = ({ icon: Icon, title, desc }) => {
    return (
        <div className="col-12 col-md-6 mb-4">
            <div className="feature-item d-flex flex-md-row flex-column align-items-center text-center text-md-start h-100 px-3 px-md-0">
                <div>
                    <div className="icon d-flex align-items-center justify-content-center ">
                        <Icon />
                    </div>
                </div>
                <div className="feature-info ms-md-3 mt-3 mt-md-0">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturesCard;