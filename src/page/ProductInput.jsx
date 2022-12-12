import { useParams } from "react-router-dom";

const ProductInput = () => {
    const {product} = useParams();
    return (  
        <>
        <h2>{product}</h2>
        <p>상품의 이름으로 상품 페이지를 출력하고 있습니다</p>
        </>
    );
}
 
export default ProductInput;