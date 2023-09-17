import Button from "../components/Button";  
import hero from "../assets/asset/hero.jpg";

const Hero = () => {
  return (
    <section id="home" className=" w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-conatiner ">
        
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-pink-700'>
          Our Summer collections
        </p>
        <h1 className='mt-10 font-palanquin text-[84px] max-sm:text-[68px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-[5] pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-pink-700 inline-block mt-3'>Oasis</span> <span className="xl:bg-white xl:whitespace-nowrap relative z-[4] pr-10">IceCream</span>
        </h1>

        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Crafted with Love,
          Scooped with Joy: Your Ice Cream Oasis
        </p>

        <Button label='Shop now'  />

      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center ">
        <img
          src={hero}
          alt='ice cream'
          width={610}
          height={502}
          className='object-contain float-left z-[3] rounded-3xl drop-shadow-xl hover:drop-shadow-2xl'
        />
      </div>
    </section>
  )
}

export default Hero