import "./AddressInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";

function AddressInfo({user}){

    const isVendor = user.UserType === "vendor";

    return(
        <div className='AIcontainer'>
            Last name
            <div className='AIChild'>
                <FontAwesomeIcon className="iconnn" icon={faUser} /> 
                 {user["LastName"]}
                <button className="AIbuy">
                    <FontAwesomeIcon className="editt" icon={faPenToSquare} />
                </button>
            </div>
            Username
            <div className='AIChild'>
                <FontAwesomeIcon className="iconnn" icon={faUser} /> 
                {user["UserName"]}
                <button className="AIbuy">
                    <FontAwesomeIcon className="editt" icon={faPenToSquare} />
                </button>
            </div>
            Phone number
            <div className='AIChild'>
                <FontAwesomeIcon className="iconnn" icon={faPhone} /> 
                {user["PhoneNumber"]}
                <button className="AIbuy">
                    <FontAwesomeIcon className="editt" icon={faPenToSquare} />
                </button>
            </div>
            {isVendor && (
            <>
            Address
            <div className='AIChild'>
                <FontAwesomeIcon className='iconnn' icon={faShop} />  
                {user["UserAddress"]}
                <button className="AIbuy">
                <FontAwesomeIcon className="editt" icon={faPenToSquare} />
                </button>
            </div>
            </>
        )}
        </div>
    )
}

export default AddressInfo