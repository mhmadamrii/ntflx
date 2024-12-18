import Link from 'next/link'
import GithubSignInButton from '@/app/components/GithubSignInButton'
import GoogleSignInButton from '@/app/components/GoogleSignInButton'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/utils/auth'
import { redirect } from 'next/navigation'
import { LoginField } from '../_components/login-field'

export default async function Login() {
  const session = await getServerSession(authOptions)
  console.log(session)

  if (session) {
    return redirect('/home')
  }
  return (
    <div className='mt-24  rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14'>
      <form method='post' action='/api/auth/signin'>
        <h1 className='text-3xl font-semibold text-white'>Log in</h1>
        <LoginField />
      </form>

      <div className='text-gray-500 text-sm mt-2'>
        New to Neflix?{' '}
        <Link className='text-white hover:underline' href='/sign-up'>
          Sign up now
        </Link>
      </div>

      <div className='flex w-full justify-center items-center gap-x-3 mt-6'>
        {/* <GithubSignInButton /> */}
        <GoogleSignInButton />
      </div>
    </div>
  )
}
