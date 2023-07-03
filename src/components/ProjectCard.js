import React from 'react'
import { motion } from 'framer-motion'

 const ProjectCard = ({post}) => {
  return (
    <div className="cursor-pointer flex flex-col justify-center p-2.5 gap-2.5">
            <motion.img className='rounded-lg' src={post.Thumbnail || ''} alt ="Imagen Proyecto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{ maxWidth: 600, maxHeight: 400 }}
            />
            <div className='flex flex-col justify-start px-2.5'>
              <h2 className='text-4xl font-extrabold'>{post.Titulo || ''}</h2>
              <p className='text-base font-medium'>{post.Descripción || ''}</p>
            </div>

    </div>
  )
}

export default ProjectCard;
