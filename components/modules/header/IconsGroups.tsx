import Row from '@/components/customs/Row'
import { Button } from '@/components/ui/button'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import SearchBar from './SearchBar'

export default function IconsGroups({openSearchBar, setOpenSearchBar}: {openSearchBar: boolean; setOpenSearchBar: (v: boolean) => void}) {
  return (
    <section>
      <Row className="">
        <SearchBar openSearchBar={openSearchBar} setOpenSearchBar={setOpenSearchBar}/>
        <Button variant="nostyle" size="icon" onClick={() => setOpenSearchBar(!openSearchBar)}>
          <CiSearch size="32" className='hover:text-primary-700'/>
        </Button>
      </Row>
    </section>
  )
}