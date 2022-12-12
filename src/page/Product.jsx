import { Link} from "react-router-dom";
import {useState} from "react"
const Product = () => {
    const [input,setInput] = useState();
    return (  
        <>
        <h1>값을 입력받아서 페이지를 이동합니다</h1>
        <input type="text" onChange={(e)=>{setInput(e.target.value)}}/><Link to={`/product/${input}`}>페이지 이동</Link>
        </>
    );
}
 
export default Product;