import special1 from "../assets/asset/special 1.jpg"
import special2 from "../assets/asset/special 2.jpg"
import special3 from "../assets/asset/special 3.jpg"
import special4 from "../assets/asset/special 4.jpg"

const SpecialOffer = () => {
  return (
    <section className="max-container flex flex-1 justify-between items-center  max-md:flex-col-reverse ">
      
      <div className=" w-[50%] flex justify-center items-center gap-10 flex-wrap max-md:w-full max-md:mt-10 max-md:grid max-md:grid-rows-2 max-md:grid-cols-2 max-md:gap-4">
        <img src={special1} alt="1" width={250} height={200} className=" rounded-3xl drop-shadow-xl hover:drop-shadow-2xl max-md:h-60 max-md:w-40"/>
        <img src={special2} alt="2" width={250} height={200} className=" rounded-3xl drop-shadow-xl hover:drop-shadow-2xl max-md:h-60 max-md:w-40"/>
        <img src={special3} alt="3" width={250} height={200} className=" rounded-3xl drop-shadow-xl hover:drop-shadow-2xl max-md:h-60 max-md:w-40"/>
        <img src={special4} alt="4" width={250} height={200} className=" rounded-3xl drop-shadow-xl hover:drop-shadow-2xl max-md:h-60 max-md:w-40"/>
      </div>
      <div className="w-[50%] max-md:w-full">
        <h1 className=" text-[68px]">
          <span className=" text-pink-700">Special</span> Offer
        </h1>
        <hr />
        <p className=" text-[24px]">
          For a limited time, when you purchase any
          two scoops of our delectable ice cream,
          you'll receive the third scoop absolutely
          FREE! Yes, you read that right—indulge in a
          triple scoop of creamy goodness and pay
          for only two . <br />
          But that's not all! We're also offering a
          complimentary topping of your choice with
          every purchase of our ice cream sundaes.
          Whether it's hot fudge, rainbow sprinkles,
          or whipped cream
        </p>
      </div>
     
    </section>
  )
}

export default SpecialOffer