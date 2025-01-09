import { ExperienceTimeline } from '@/components/Experience/ExperienceComp'
import { EXPERIENCE_DATA } from '../Data/ExperiencePage/experienceData'

function Experience() {
  return (
    <section className="experience py-24" id='experience'>
         <ExperienceTimeline data={EXPERIENCE_DATA} />
    
  </section>
  )
}

export default Experience