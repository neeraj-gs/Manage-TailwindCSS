import ServiceCard from '../components/ServiceCard'
import {services} from '../constants'

const Services:React.FC = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((s)=>{
        return(
          <ServiceCard key={s.label} imgURL={s.imageURL} label={s.label} subtext={s.subtext} />
        )
      })}
    </section>
  )
}

export default Services