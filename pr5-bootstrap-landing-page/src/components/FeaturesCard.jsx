const FeaturesCard = ({ icon: Icon, title, desc }) => {
    return (
        <div className="col-md-6 mb-4">
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
    );
};

export default FeaturesCard;
// const FeaturesCard = ({ icon: Icon, title, desc }) => {
//     return (
//         <div className="col-md-6 mb-4 d-flex justify-content-center">
//             <div className="text-center d-flex flex-column align-items-center px-3">
//                 {/* Icon inside circle */}
//                 <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" 
//                      style={{ width: '64px', height: '64px', backgroundColor: '#e0f0fa' }}>
//                     <Icon style={{ fontSize: '24px', color: '#0d6efd' }} />
//                 </div>

//                 {/* Title */}
//                 <h5 className="fw-bold">{title}</h5>

//                 {/* Description */}
//                 <p className="text-muted small mb-0">{desc}</p>
//             </div>
//         </div>
//     );
// };

// export default FeaturesCard;
