import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className='mt-9 text-white-1 flex flex-col gap-9'>
      <section className='flex flex-col gap-5'>
        <h1 className='text-20 font-bold text-white-1'>Trending Podcasts</h1>
        <Button className='text-white-1 bg-orange-1'>Button</Button>
      </section>
    </div>
  )
}

export default page