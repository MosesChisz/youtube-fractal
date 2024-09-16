"use client"
import Container from '@/components/customs/Container'
import Logo from '@/components/customs/Logo'
import Row from '@/components/customs/Row'
import React, { useState } from 'react'
import MainMenu from './MainMenu'
import IconsGroups from './IconsGroups'
import MobileBottom from '@/components/customs/MobileBottom'
import MobileButton from './MobileButton'


export default function Main() {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openCartBar, setOpenCartBar] = useState(false);
  return (
    <section className='h-full'>
        <Container>
            <Row className='justify-between'>
                <MobileButton/>
                <MobileBottom/>
                <Logo />
                <MainMenu/>
                <IconsGroups 
                  openSearchBar={openSearchBar} 
                  setOpenSearchBar={setOpenSearchBar}
                  openCartBar={openCartBar} 
                  setOpenCartBar={setOpenCartBar}/>
            </Row>
        </Container>
    </section>
  )
}
