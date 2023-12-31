import './Listings.css';
import CardItem from '../../Components/Card Item/CardItem';
import Navbar from '../../Components/Navbar/Navbar';
import LP from "../../Assets/Laptops.png";
import ProfileMenu from '../../Components/Profile Menu/ProfileMenu';

function Listings(){

    const Listings = [
        {
            img: LP,
            title: "APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver",
        },
        {
            img: LP,
            title: "APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver",
        },
        {
            img: LP,
            title: "APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver",
        },
        {
            img: LP,
            title: "APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver",
        },
        {
            img: LP,
            title: "APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver",
        },
        {
            img: LP,
            title: "APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver",
        },
    ];

    const user = {
        UserId: "1234",
        FirstName: "Sasa",
        LastName: "King",
        UserName: "sasaking123",
        EmailAddress: "Jimmy.smith1996@gmail.com",
        Password: "Password",
        PhoneNumber: "+1234567890",
        UserType: "user",
        UserAddress: "Abdo Pasha Street",
        };

    return(
        <>
            <Navbar/>
            <div className='List'>
            <button className='m'>
                            List Item
                        </button>
                <div className='LBig'>
                    <div className='Lchild'>
                        <ProfileMenu user={user}/>
                    </div>
                    <div className='LSmall'>
                        {Listings.map((data, index) => {
                            return <CardItem data={data} key={index} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listings