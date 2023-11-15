import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { statistics } from "../constants"

const Hero = () => {
  return (
    <section id="home" className="w-full  flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>One Stop Solution to All Shoe Addicts</p>
        <h1>
          <span>The Newest Arrival </span> <br /> <span>Box</span>  Shoes</h1>
          <p>Discover stylish SHoebox arrivals, best quality badn comfort and an innovation for your active life</p>
          <Button label="Shop now" iconURL={arrowRight}/>

          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((s)=>{
              return(
                <div key={s.label}>
                  <p>{s.value}</p>
                  <p>{s.label}</p>
                </div>
              )
            })}
          </div>

      </div>
    </section>
  )
}

export default Hero