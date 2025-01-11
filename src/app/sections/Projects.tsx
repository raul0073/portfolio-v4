'use client'
import { MobileProjectsGrid } from '@/components/Projects/MobileProjectsGrid';
import { ProjectsParallaxComp } from '@/components/Projects/ProjectParallax'
import React, { useEffect, useState } from 'react'

function Projects() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
	  const handleResize = () => {
		setIsMobile(window.innerWidth <= 768);
	  };
  	  handleResize();
	  window.addEventListener('resize', handleResize);
	  return () => {
		window.removeEventListener('resize', handleResize);
	  };
	}, []);
  return (
    <section className="projects-parallax dark:bg-bg-dark bg-gray-300 md:py-24 min-h-screen h-full mb-24" id='projects'>
      {
					isMobile ? (
						<MobileProjectsGrid />
					) : (
						<ProjectsParallaxComp />
					)
				}
    
  </section>
  
  )
}

export default Projects