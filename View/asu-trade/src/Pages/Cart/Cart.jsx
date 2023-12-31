import './Cart.css';
import ProfileMenu from '../../Components/Profile Menu/ProfileMenu';
import CardItem from '../../Components/Card Item/CardItem';
import OrderSummary from '../../Components/Order Summary/OrderSummary';
import Navbar from '../../Components/Navbar/Navbar';
import LP from "../../Assets/Laptops.png";

function Cart(){
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

        const CartItems = [
            {
                img: LP,
                title: "APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver",
                price:100,
            },
            {
                img: LP,
                title: "APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver",
                price:200,
            },
            {
                img: LP,
                title: "APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver",
                price:200,
            },
            {
                img: LP,
                title: "APPLE iPad Pro 11” M2 Chip (4th Generation) Wi-Fi 128GB Silver",
                price:200,
            },
        ];

        const CalculatePrice = () => {
            // Calculate total price using reduce
            const totalPrice = CartItems.reduce((sum, item) => sum + item.price, 0);

        const Ordersummary=
            {
                Price: totalPrice,
                NumberOfItems: CartItems.length,
                Discount: 20,
            };
            return Ordersummary;
        };

    return(
        <>
            <Navbar/>
            <div className='CBig'>
                <div className='Cchild'>
                    <ProfileMenu user={user}/>
                </div>
                <div className='CSmall'>
                {CartItems.map((data, index) => {
                            return <CardItem data={data} key={index} />;
                        })}
                </div>
                <div className='Csumm'>
                    <OrderSummary Ordersummary={CalculatePrice()}/>
                </div>
            </div>
        </>
    )
}

export default Cart;