import { cn } from '@/lib/utils'
import React, { Children } from 'react'

export default function Row ({
    children, 
    className
} : {
    children: React.ReactNode; 
    className?: string
}) {
  return (
    <div className={cn('flex items-center h-full', 
    className)}>{children}</div>)
}