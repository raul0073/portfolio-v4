import { cn } from '@/lib/utils';
import React, { HTMLAttributes, ReactNode } from 'react'

interface SectionHeaderProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}
function SectionHeader({children, ...props}: SectionHeaderProps) {
  return (
    <h2 {...props} className={cn('text-4xl md:text-7xl tracking-tight font-abadiBold font-bold', props.className)} >{children}</h2>
  )
}

export default SectionHeader