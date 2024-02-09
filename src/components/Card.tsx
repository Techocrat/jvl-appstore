'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const Card = ({
  id,
  appname,
  description,
  appurl,
  organization
}: {
  id: number
  appname: string
  description: string
  appurl: string
  organization: string
}) => {
  const router = useRouter()
  const handleVisitWebsite = (id: number) => {
    router.push(`/app/${id}`)
  }
  return (
    <div className='cursor-pointer m-1 rounded-2xl flex flex-col justify-start items-center w-96 min-h-96 border-8 border-gradient-to-l from-emerald-300 via-white to-emerald-300 bg-gradient-to-tr h-1/2'>
      <div>
        <div className='flex justify-center items-center py-4'>
          <Image
            src='/logo_b.svg'
            width='90'
            height='90'
            className='rounded-lg'
            alt='#'
          />
        </div>
        <h1 className='text-neutral-700 font-bold text-3xl text-center'>
          {appname}
        </h1>
        <p className='text-neutral-600 text-center'>{organization}</p>
        <h3 className='font-semibold text-md uppercase text-center py-2 mt-4'>
          Description
        </h3>
        <p className='text-sm text-neutral-600 text-center mx-10'>
          {' '}
          {description}
        </p>
      </div>
    <div className='flex justify-center items-center flex-grow gap-6 py-6'>
        <Button onClick={() => handleVisitWebsite(id)}>
          Download
        </Button>
    </div>
    </div>
  )
}

export default Card
