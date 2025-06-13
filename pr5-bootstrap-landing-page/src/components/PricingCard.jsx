import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const PricingCard = ({ iconArr }) => {
    const { category, price } = iconArr[0];
    const features = iconArr.slice(1);
    return (
        <div className="col-4">
            <div className="pricing-item mt-5 rounded-3">
                <ul className="p-0 text-center">
                    <li className="pricing-header text-white rounded-top-3 mb-5">
                        <h4 className="text-uppercase">{category}</h4>
                        <h2>
                            <sup>$</sup>{price}<sub>/ Mo</sub>
                        </h2>
                    </li>
                    {features.map((item, idx) => {
                        return <li key={idx}>{item.validation ? <TiTick className="right" /> : <IoClose className="close" />}{item.label}</li>
                    })}
                    <li className="footer p-5">
                        <button className="button rounded-pill text-capitalize">buy this plan</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PricingCard