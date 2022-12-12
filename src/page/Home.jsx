import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
    return (  
        <>
            <NavLink  style={({isActive})=> isActive ? {color:"green"}:null} to='/'>Home</NavLink>
            <NavLink style={({isActive})=> isActive ? {color:"green"}:null} to='/about'>about</NavLink>
            <NavLink style={({isActive})=> isActive ? {color:"green"}:null} to='/product'>product</NavLink>
            <hr />
            <Outlet />
            
            
        </>
    );
}
 
export default Home;