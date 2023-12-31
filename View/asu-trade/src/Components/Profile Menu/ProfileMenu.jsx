import "./ProfileMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function ProfileMenu({user}) {

	const isVendor = user.UserType === "vendor";

	return (
		<div className="PMcontainer">
			<div className="PMfirst">
				<FontAwesomeIcon className="ic" icon={faCircleUser} />
				  {user["FirstName"]+" "+user["LastName"]}
			</div>
			<div className="PMsecond">
				<NavLink to="/Profile">
					<button className="PMData org">
						<FontAwesomeIcon className="PMicon" icon={faUserPen} />
						  
						<span className="org">Personal Data</span>
					</button>
				</NavLink>
			</div>
			<div className="PMthird">
				<NavLink to="/Wishlist">
					<button className="PMData">
						<FontAwesomeIcon className="PMicon" icon={faHeart} />
						   Wish list
					</button>
				</NavLink>
			</div>
			<div className="PMthird">
				<NavLink to="/Cart">
					<button className="PMData">
						<FontAwesomeIcon icon={faBagShopping} />
						  Cart
					</button>
				</NavLink>
			</div>
			<div className="PMthird">
				<button className="PMData">
					<span className="PMplus">+</span>
      				{isVendor? <>Listings</>:<>Register as Vendor</>}
				</button>
			</div>
			<div className="PMfourth">
				<button className="PMData">
					<FontAwesomeIcon
						className="PMicon"
						icon={faArrowRightFromBracket}
					/>
					 <span className="col">Log out</span>
				</button>
			</div>
		</div>
	);
}

export default ProfileMenu;
