import React from 'react'
import { motion } from 'framer-motion'

 const ProjectCard = () => {
  return (
    <motion.div className="cursor-pointer flex flex-col justify-center p-2.5 gap-2.5"
    transition={{duration: 0.2}}
    whileHover={{scale: 1.05,}}
    >
            <img className='rounded-lg' src={require("../assets/images/image_2.png")} alt ="Imagen Proyecto"
            />
            <div className='flex flex-col justify-start px-2.5'>
              <h2 className='text-4xl font-extrabold'>Title</h2>
              <p className='text-base font-medium'>Descripción</p>
            </div>
    </motion.div>
  )
}

export default ProjectCard;
