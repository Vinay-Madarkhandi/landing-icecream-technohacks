import Button from "../components/Button"
import popular from "../assets/asset/popular.jpg"

const PopularProducts = () => {
  return (
    <section 

    >
        <div className=" flex flex-1 justify-center items-center flex-col">   
            <h1 className=" text-[68px] decoration-1" >Our <span className=" text-pink-700" > Popular </span> Products</h1>
            <p className="text-[24px]">
                At <span className=" text-pink-700">Oasis</span> , we take pride in creating a <br />
                delectable array of ice cream treats that have captured the <br />
                hearts (and taste buds) of our loyal customers. Indulge in our <br />
                popular products, each crafted with the finest ingredients <br />
                and a dash of magic: <br />
            </p>
        </div>
        <div className=" flex-1 flex justify-around max-md:flex-col mt-16 max-container">
            <div><ul className=" text-[28px]">
                <li> &#8594; Classic Vanilla Delight</li>
                <li> &#8594; Decadent Chocolate Bliss</li>
                <li> &#8594; Nutty Caramel Crunch</li>
                <li> &#8594; Seasonal Specials</li>
            </ul>
            <h3 className=" text-[36px]"> and <span className=" text-pink-700">many More.....</span></h3><br />
            <Button label="More Details" /></div>
            <img src={popular} alt="popular icecream" width={350} height={350} className="rounded-3xl drop-shadow-xl hover:drop-shadow-2xl object-contain max-md:mt-10  "/>
        </div>
        
        </section>
  )
}

export default PopularProducts