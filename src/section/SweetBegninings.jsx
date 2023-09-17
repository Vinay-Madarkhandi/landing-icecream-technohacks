import Button from "../components/Button"
import sweetBegnings from "../assets/asset/SweetBegnings.jpg"
const SweetBegninings = () => {
  return (
    <section id="sweetbegnings" 
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className=" flex flex-1 flex-col">
      <h1 className=" text-[68px]">
        Our <span className="text-pink-700">Sweet</span> Beginnings
      </h1>
      <p className="text-[24px]">
        Our journey started in 1996, when <br />
        william Browne decided to turn their <br />
        love for ice cream into something <br />
        extraordinary. With a passion for <br />
        crafting exceptional frozen treats, they <br />
        embarked on a quest to create the <br />
        perfect scoop of ice cream. From <br />
        humble beginnings in a small kitchen, <br />
        William Browne experimented <br />
        tirelessly, combining the finest <br />
        ingredients with creative flavors to craft <br />
        ice cream that would leave taste buds <br />
        tingling with joy. <br />
      </p> 
      <div className=" mt-10">
          <Button label="View More" />
      </div>
      </div>

      <div className="flex-1 flex justify-center items-center"> 

        <img src={sweetBegnings}
          alt="ice cream"
          width={500}
          height={500}
          className="object-contain rounded-2xl "
        />

      </div>
    </section>
  )
}

export default SweetBegninings