import { Link, Outlet } from "react-router-dom";

const About = () => {
    return (  
        <>
            <h2>아래 버튼을 누를면 Home으로 돌아갑니다</h2>
            <button><Link to="/" style={{textDecoration : "none", color: "black"}}>Home으로 가기</Link></button>
            
            
        </>
    );
}
 
export default About;