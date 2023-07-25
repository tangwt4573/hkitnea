import {Link} from "react-router-dom"
import styles from './ProductList.module.css'
import {useState, useEffect} from "react"
import Title from "./Title"
import QuantityBtn from "./QuantityBtn"

export default function ProductList() {

   let [productList, setProductList] = useState([])
   let [input , setInput] = useState('')

    useEffect(()=>{
        fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
         .then(response => response.json())
         .then(data => setProductList(data))

        //console.log(productList)
    },[])

    useEffect(()=>{
         if(input.length>4)
             console.log('字串足夠')
         else
            console.log('字串太短')
    },[input])

    
    //let product = '水果'
    //const [product, setProduct] = useState('水果')

    /*const handleClick = ()=> {
        setProduct ('react')
        console.log(product)
    }*/

    return (
        <>
     

           <Title mainTitle="請選擇要購買的水果" />
                
            <div className="container">
                {
                      productList.map(product=>(   
                        <div className="containerItem"> 
                        <diV className={styles.productBorder} key={product.id}>              
                            {product.name}<br/>
                            {product.price}<br/>

                            <Link to={'/product/'+product.id}>
                            <img src={process.env.PUBLIC_URL+'/img/'+product.image} /><br/>
                            </Link>

                            {product.description}<br/>

                            <QuantityBtn productInfo={product}/>
                        </diV>
                        </div>
                     ))
                }
            </div>
        

        </>
    )
}
