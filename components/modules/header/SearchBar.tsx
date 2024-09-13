"use client";
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Product } from '@/types';
import useSWR, { Fetcher } from 'swr';
import Image from 'next/image';
import { getBestPriceWithDiscountFromProduct } from '@/lib/utils';

export default function SearchBar({openSearchBar, setOpenSearchBar}: {openSearchBar: boolean; setOpenSearchBar: (v: boolean) => void}) {
 
    const router = useRouter();
const fetcher: Fetcher<Product[], string> = (args) =>
fetch(args)
.then((res) => res.json())
.then((res) => res.data) 

const { data, error, isLoading } = useSWR<Product[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/products",
    fetcher
);
 
const handleSearch = () => {

 }
    return (
    <Dialog open={openSearchBar}>
    <DialogContent className='lg:max-w-screen-xl z-[99999] [&>.closeBtn]:hidden'>
      <div className='flex items-center w-full gap-4'>
        <Search className="text-slate-300" />
        <input className='text-slate-500' placeholder='type any product here' onInput={handleSearch} />
        <Button onClick={() => setOpenSearchBar(!openSearchBar)} className="hover:bg-primary-500" variant="outline" size="icon">
            <X className="hover-group:text-white"/>
        </Button>
      </div>
      <div className='flex overflow-y-auto w-full py-12 gap-12 flex-col'>
        {
            data && data.map((item: Product) => (
                <div className='group flex flex-col justify-start gap-8 px-8 items-center'>
                    <Image src={item.subProducts[0].options[0].images[0]} height="80" width="80" className='object-contain' alt='product'/>
                <h6>{getBestPriceWithDiscountFromProduct(item)}</h6>
                </div>
            ))
        }
      </div>
    </DialogContent>
  </Dialog>  
  );
}
