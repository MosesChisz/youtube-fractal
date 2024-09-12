"use client"

import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

export default function index ({children}: {children: React.ReactNode}) {
  return (
    <div>
        <ClerkProvider 
        appearance={{
          layout:{
            socialButtonsPlacement: "bottom",
            socialButtonsVariant: "blockButton",
            logoImageUrl: "/assets/images/vercel.svg",
          }
          }}
          afterSignOutUrl="/sign-in"
          afterSignInUrl='/account/dashboard'
          signInUrl={`${process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}`}
          signUpUrl={`${process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}`}
          signInFallbackRedirectUrl="/"
          signUpFallbackRedirectUrl="/"
          >
         {children}
        </ClerkProvider>
    </div>
  )
}
