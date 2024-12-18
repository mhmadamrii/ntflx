'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function LoginField() {
  return (
    <div className='space-y-4 mt-5'>
      <Input
        type='email'
        name='email'
        placeholder='Email'
        className='bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block'
      />
      <Button
        onClick={e => {
          e.preventDefault()
          alert('Please login with google!')
        }}
        type='submit'
        variant='destructive'
        className='w-full bg-[#e50914]'
      >
        Log in
      </Button>
    </div>
  )
}

export function SignUpField() {
  return (
    <div className='space-y-4 mt-5'>
      <Input
        type='email'
        name='email'
        placeholder='Email'
        className='bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block'
      />
      <Button
        onClick={e => {
          e.preventDefault()
          alert('Please login with google!')
        }}
        type='submit'
        variant='destructive'
        className='w-full bg-[#e50914]'
      >
        Sign Up
      </Button>
    </div>
  )
}
