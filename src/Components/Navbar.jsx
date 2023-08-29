import {AiOutlineMenu} from "react-icons/ai";
import {FiShoppingCart} from "react-icons/fi";
import {BsChatLeft} from "react-icons/bs";
import {RiNotification3Line} from "react-icons/ri";
import {MdKeyboardArrowDown} from "react-icons/md";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import {Cart, Chat, Notification, UserProfile} from ".";

import {useStateContext} from "../contexts/ContextProvider";
import {useEffect} from "react";


const NavButton = ({title, customFunc, icon, color, dotColor}) => {
    return (
        <TooltipComponent content={title} position="BottomCenter">
            <button type="button" onClick={customFunc} style={{color}}
                    className="relative text-xl rounded-full p-3 hover:bg-light-gray">
                <span style={{background: dotColor}}
                      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
                    {icon}
            </button>
        </TooltipComponent>
    )
}
const Navbar = () => {
    const {activeMenu, setActiveMenu, isClicked, handleClick, screenSize, setScreenSize} = useStateContext();


    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener("resize", handleResize)
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize)
        };
    }, []);


    useEffect(() => {
        screenSize <= 900 ? setActiveMenu(false) : setActiveMenu(true);
    }, [screenSize]);


    return (
        <>
            <div className="flex justify-between md:mx-6 p-2 relative">
                <NavButton title="Menu" customFunc={() => setActiveMenu(menu => !menu)} color="blue"
                           icon={<AiOutlineMenu/>}/>
                <div className="flex">
                    <NavButton
                        title="Cart"
                        customFunc={() => handleClick('cart')}
                        color="blue"
                        icon={<FiShoppingCart/>}/>
                    <NavButton
                        title="Chat"
                        dotColor="#03c9d7"
                        customFunc={() => handleClick('chat')}
                        color="blue"
                        icon={<BsChatLeft/>}/>

                    <NavButton
                        title="Notifications"
                        dotColor="#03c9d7"
                        customFunc={() => handleClick('notification')}
                        color="blue"
                        icon={<RiNotification3Line/>}/>

                    <TooltipComponent content="Profile" position="BottomCenter">
                        <div className="flex gap-2 p-1 cursor-pointer items-center hover:bg-light-gray rounded-lg"
                             onClick={() => handleClick('userProfile')}>
                            <img src={avatar} alt="avatar" className="rounded-full w-8 h-8"/>
                            <p>
                                <span className="text-gray-400 text-14">Hi, </span> {' '}
                                <span className="text-fray-400 font-bold ml-1 text-14">Michael, </span> {' '}
                            </p>
                            <MdKeyboardArrowDown className="text-gray-400 text-14"/>
                        </div>
                    </TooltipComponent>

                    {isClicked.cart && <Cart/>}
                    {isClicked.chat && <Chat/>}
                    {isClicked.userProfile && <UserProfile/>}
                    {isClicked.notifications && <Notification/>}
                </div>
            </div>
        </>
    )
}

export default Navbar
