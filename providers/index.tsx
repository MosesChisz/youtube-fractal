"use client"

import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

export default function index ({children}: {children: React.ReactNode}) {
  return (
    <div>
        <ClerkProvider>
         {children}
        </ClerkProvider>
    </div>
  )
}
