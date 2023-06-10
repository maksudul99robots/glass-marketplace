import { useEffect, useState } from "react"
import { Banner } from "../../components/Banner"
import { Products } from "../../components/Products"
import {productsData} from '../../api/Api'

export const Home = () => {

  const [products, setProducts] = useState([])
  const data = productsData()

  useEffect(()=>{
    setProducts(data)
    console.log(data)
  },[data])

  return (
    <div>
      {/* <Banner/> */}
      <Products products={products}/>

    </div>
  )
}
