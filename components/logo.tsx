import { Dumbbell } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className='flex items-center gap-2' ><Dumbbell strokeWidth={1} className='w-6 h-6'/> FitForge</Link>
  )
}

export default Logo