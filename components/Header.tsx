'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

import Logo from '@/public/images/logo.svg'
import clsx from 'clsx'
import { navigations } from '@/data'
import Image from 'next/image'
import CTAButton from './CTAButton'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className='p-6 md:px-40 md:py-5 shadow-xl'>
			<nav className='flex items-center justify-between'>
				<div>
					<Image src={Logo} alt='Logo' className='w-auto object-contain' />
				</div>
				<button className='flex md:hidden'>
					<span className='sr-only'>Open Mobile Menu</span>
					<Bars3Icon className='h-5 w-6 cursor-pointer' />
				</button>
				<ul className='hidden items-center gap-8 md:flex'>
					{navigations.map((item) => (
						<li key={item.name}>
							<Link
								href={item.href}
								className='text-sm tracking-tight text-grayishBlue decoration-limeGreen decoration-[4px] underline-offset-[24px] hover:text-darkBlue hover:underline '>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
				<div className='hidden md:block'>
					<CTAButton />
				</div>
			</nav>
		</header>
	)
}
export default Header
