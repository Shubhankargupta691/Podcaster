import React from 'react'
import Image from 'next/image'

const PodcastCard = ({imgURL, title, description, PodcastId}:{
    imgURL: string,
    title: string,
    description: string,
    PodcastId: number,
}) => {
  return (
    <div className='cursor-pointer'>
        <figure className='flex flex-col gap-2'>
            <Image src={imgURL} alt={title} width={174} height={174}
                className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
            />
            <div className='flex flex-col'>
                <h1 className='text-12 truncate text-white-1 font-bold'>{title}</h1>
                <h2 className='text-12 truncate text-white-4 fornnt-normal capitalize'>{description}</h2>
            </div>
        </figure>
    </div>
  )
}

export default PodcastCard
