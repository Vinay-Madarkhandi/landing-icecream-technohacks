import ServiceCard  from "../components/ServiceCard";
import shieldtick from "../assets/icons/shield-tick.svg";
import support from "../assets/icons/support.svg";
import truck from "../assets/icons/truck-fast.svg";

const Services = () => {
  return (
    <section id="services"
      className="max-container flex justify-center gap-9 flex-wrap"
    >
      <ServiceCard icons={shieldtick}  label="Free Shipping" subtext="Enjoy seamless shopping with our complimentary shipping service." />
      <ServiceCard icons={support} label="24/7 Customer Support" subtext="Our customer support team is available 24/7 to answer your queries." />
      <ServiceCard icons={truck} label="Fast Delivery" subtext="We guarantee that you will receive your order within 1 week of purchase." />
      

    </section>

  )
}

export default Services