import  superquality  from "../assets/asset/superquality.jpg"
const SuperQuality = () => {
  return (
   <section 
   id="superquality"
  className="max-container  "
   >

      <div className='flex justify-center items-center'>
        <h1 className="text-[68px]">Providing Best <span className="text-pink-700">Qualities IceCreams</span> at your <span className=" text-coral-red">DoorStep</span> </h1>
      </div>
      <div className='flex flex-1 justify-around items-center mt-10 max-md:flex-col gap-10'>
        <div> 
          <img src={superquality} alt="icecream" width={600} height={600} className="rounded-2xl object-contain max-md:mt-10"/>
        </div>
        <div > 
          <p className="text-[24px] mr-20 ">
          Ensuring the <span className=" text-cyan-500">Premium </span>
          Quality <br />IceCream with the
          same <br />chillsness as just
          removed from <br />the freezer
          </p>
        </div>
      </div>

   </section>
  )
}

export default SuperQuality