import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { statistics } from "../constants"

const Hero = () => {
  return (
    <section id="home" className="w-full  flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="mt-20 text-xl font-montserrat text-coral-red">One Stop Solution to All Shoe Addicts</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The Newest Arrival </span> <br /> <span className="text-coral-red inline-block mt-3">Boxes In</span>  Town</h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish SHoebox arrivals, best quality badn comfort and an innovation for your active life</p>
          <Button label="Shop now" iconURL={arrowRight}/>

          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((s)=>{
              return(
                <div key={s.label}>
                  <p className="text-2xl font-palanquin font-bold">{s.value}</p>
                  <p className="leading-7 font-montserrat text-slate-gray">{s.label}</p>
                </div>
              )
            })}
          </div>

      </div>
    </section>
  )
}

export default Hero