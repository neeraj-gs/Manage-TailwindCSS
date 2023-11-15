import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"


const SuperQuality:React.FC = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container ">
      <div className="flex flex-1 flex-col">
      {/* <p className="mt-20 text-xl font-montserrat text-coral-red">One Stop Solution to All Shoe Addicts</p> */}
        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          We Provide   <br /> <span className="text-coral-red inline-block mt-3">Super Quality</span>  Shoes</h2>
          <p className="mt-4 lg:max-w-lg info-text">Ensuring the premium comformt and quality , get the best shoes and stay attractive in your community.</p>
          <p className="mt-6 max-w-lg info-text">Our dedication to detailing ensures only one thing <span className="text-coral-red">Customer Satisfaction</span> that is our top priority.</p>
          <div className="mt-11"><Button label="Shop now" iconURL={arrowRight}/></div>
          

      </div>

      <div className="flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8" width={420} height={400} />
      </div>
    </section>
  )
}

export default SuperQuality