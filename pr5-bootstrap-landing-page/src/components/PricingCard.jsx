import { TiTickOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const PricingCard = ({ iconArr }) => {
    const {catagory, price} = iconArr[0];
    const features = iconArr.slice(1);
    return (
        <div className="col-4">
            <div className="pricing-item mt-5 rounded-4">
               
                     <ul className="p-0">
                        <li className="pricing-header text-white">
                            <h4>{catagory}</h4>
                            <h2>
                                <sup>$</sup>{price}<sub>/Mo</sub>
                            </h2>
                        </li>
                        {features.map((item)=>{
                            return<li>{item.validation ? <TiTickOutline /> : <IoClose />}{item.label}</li>
                        })}  
                    </ul>
            </div>
        </div>
    )
}

export default PricingCard