'use client'
import React from 'react'
import { useState, Fragment } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Listbox, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { CustomFilterProps } from '@/types'
import { updateSearchParams } from '@/utils'

const CustomFilter = ({ title, options }: CustomFilterProps) => {

    const router = useRouter()
    const [selected, setSelected] = useState(options[0])

    const handleUpdateParams = (e: { type: string, value: string }) => {
        const newPathName = updateSearchParams(title, e.value.toLocaleLowerCase())

        router.push(newPathName, { scroll: false })
    }

    return (
        <div className='w-fit'>
            <Listbox value={selected}
                onChange={(e) => {
                    setSelected(e);
                    handleUpdateParams({ type: title, value: e.value })
                }}
            >
                <div className='relative w-fit z-10'>
                    <Listbox.Button className="custom-filter__btn">
                        <span className='block truncate'>{selected.title}</span>
                        <Image
                            src="/chevron-up-down.svg"
                            width={20}
                            height={20}
                            className='ml-a object-contain'
                            alt='chevron up down'
                        />
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <ListboxOptions className="custom-filter__options">
                            {options.map((option) => (
                                <ListboxOption
                                    key={option.title}
                                    value={option}
                                    className={({ active }) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : "text-gray-900"}`}>
                                    {({ selected }) => (
                                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                            {option.title}
                                        </span>
                                    )}
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

export default CustomFilter
