import { SignOutButton, UserButton } from '@clerk/nextjs'
import React from 'react'

export default function page() {
  return (
    <div>
        this is a protetcted page
        <UserButton />
        <SignOutButton />
    </div>
  )
}
