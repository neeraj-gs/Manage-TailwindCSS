import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"

const Hero:React.FC = () => {

  const [shoe,setShoe] = useState<string>(bigShoe1)


  return (
    <section id="home" className="w-full  flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="mt-20 text-xl font-montserrat text-coral-red">One Stop Solution to All the Shoe Addicts</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The Best Of </span> <br /> <span className="text-coral-red inline-block mt-3">Shoes</span> In Town</h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">The Only place to ge thte bets quality and comfort with styles added to it.Adds in Innovation to your avtive life.</p>
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


      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={shoe} alt="shoe toggle" width={610} height={500} className="object-contain relative z-10"/>
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe)=>{
            return(
              <div key={shoe}>
                <ShoeCard 
                  imgURL={shoe}
                  changeBigShoeImage={(shoe)=>{setShoe(shoe)}}
                  bigShoeImg={shoe}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero