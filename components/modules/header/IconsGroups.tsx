import Row from '@/components/customs/Row'
import { Button } from '@/components/ui/button'
import React from 'react'
import { CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci'
import SearchBar from './SearchBar'

export default function IconsGroups({
  openSearchBar, 
  setOpenSearchBar,
  openCartBar, 
  setOpenCartBar
}: {
  openSearchBar: boolean; 
  setOpenSearchBar: (v: boolean) => void;
  openCartBar: boolean; 
  setOpenCartBar: (v: boolean) => void;
}) {
  return (
    <section>
      <Row className="">
        <SearchBar openSearchBar={openSearchBar} setOpenSearchBar={setOpenSearchBar}/>
        <Button variant="nostyle" size="icon" onClick={() => setOpenSearchBar(!openSearchBar)}>
          <CiSearch size="40" className='hover:text-primary-700'/>
        </Button>
        <Button variant="nostyle" size="icon" className='hidden sm:block relative' onClick={() => setOpenCartBar(!openCartBar)}>
          <CiShoppingCart size="40" className='hover:text-primary-700'/>
          <span className='absolute flex items-center justify-center text-white bg-primary-500 w-6 h-6 rounded-full top-1 left'>
            0
          </span>
        </Button>
        <Button variant="nostyle" size="icon" onClick={() => setOpenSearchBar(!openSearchBar)}>
          <CiUser size="40" className='hover:text-primary-700'/>
        </Button>
      </Row>
    </section>
  )
}