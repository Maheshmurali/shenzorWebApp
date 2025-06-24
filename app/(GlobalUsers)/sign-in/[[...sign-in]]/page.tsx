'use client'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { ArrowLeft, User } from 'lucide-react';
import { Loading } from "@/components/ui/loading";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SignInPage() {
  
  const {isLoaded, isSignedIn, user} = useUser()
 const rout = useRouter()
useEffect(() => {
  if (isLoaded && isSignedIn && user?.publicMetadata?.role) {
    const role = user.publicMetadata.role;
    if(role){
      rout.push('/profile')
  }
}}, [isLoaded, isSignedIn, user, rout]);

const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    loadProducts();
  }, []);

  if (isLoading) {
    return <Loading message="Fetching..." size="lg" />;
  }

  return (
    <div className="grid w-full flex-grow items-center bg-zinc-100 px-4 sm:justify-center py-28 relative">
         <div className='absolute top-6 left-6 z-10 mt-16'>
                <Link href="/">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-slate-600 hover:text-slate-900 hover:bg-white/50 backdrop-blur-sm border border-slate-200/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
          </div>
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-md ring-1 ring-black/5 sm:w-96 sm:px-8"
        >
          <Clerk.GlobalError className="block text-sm text-red-400" />
             <div className="flex justify-center mx-auto mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center shadow-lg">
                  <User className="w-12 h-12 text-slate-600" />
                </div>
              </div>
              <h2 className='text-xl md:text-2xl font-bold text-slate-900 mb-6 leading-tight text-center'>Welcome Back</h2>
          <div className="space-y-4">
            <Clerk.Field name="identifier" className="space-y-2">
              <Clerk.Label className="text-sm font-medium text-zinc-950">Email</Clerk.Label>
              <Clerk.Input
                type="text"
                required
                className="w-full rounded-md bg-white text-black px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
              />
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>
            <Clerk.Field name="password" className="space-y-2">
              <Clerk.Label className="text-sm font-medium text-zinc-950">Password</Clerk.Label>
              <Clerk.Input
                type="password"
                required
                className="w-full rounded-md text-black bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
              />
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>
          </div>
          <SignIn.Action
            submit
            className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
          >
            Sign In
          </SignIn.Action>
          <p className="text-center text-sm text-zinc-500">
            
            <Clerk.Link
              navigate="sign-up"
              className="font-medium text-zinc-950 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-zinc-700 hover:underline focus-visible:underline"
            >
              Forget Password
            </Clerk.Link>
          </p>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  )
}