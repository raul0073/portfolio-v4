import FooterComp from '@/components/Footer/Footer'
import NavigationComp from '@/components/Navbar/Navbar'
import { ThemeSwitcher } from '@/components/Theme/ThemeSwitcher'
import React, { Fragment, ReactNode } from 'react'

function Layout({children} : { children: ReactNode}) {
  return (
    <Fragment>
        <NavigationComp />
        <main className='relative w-full h-full min-h-screen pb-24 pt-20'>
        <span className='fixed bottom-10 right-5 rounded-full z-50'>
        <ThemeSwitcher />
        </span>
          {children}</main>
        <FooterComp />
    </Fragment>
  )
}

export default Layout