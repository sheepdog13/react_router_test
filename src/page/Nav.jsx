import { NavLink } from "react-router-dom";

const Nav = () => {
    return (  
        <>
            <NavLink  style={({isActive})=> isActive ? {color:"green"}:null} to='/'>Home</NavLink>
            <NavLink style={({isActive})=> isActive ? {color:"green"}:null} to='/about'>about</NavLink>
            <NavLink style={({isActive})=> isActive ? {color:"green"}:null} to='/product'>product</NavLink>
            <hr />
        </>
    );
}
 
export default Nav;