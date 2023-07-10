'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

import Logo from '@/public/images/logo.svg'
import { navigations } from '@/data'
import Image from 'next/image'
import CTAButton from './CTAButton'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className='bg-white p-6 md:px-40 md:py-5 shadow-sm'>
			<nav className='flex items-center justify-between'>
				<div>
					<Image src={Logo} alt='Logo' className='w-auto object-contain' />
				</div>
				<button
					className='flex md:hidden'
					onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}>
					<span className='sr-only'>Open/Close Mobile Menu</span>
					{isOpen ? (
						<XMarkIcon className='h-8 w-8 cursor-pointer' />
					) : (
						<Bars3Icon className='h-8 w-8 cursor-pointer' />
					)}
				</button>
				<ul className='hidden items-center gap-8 md:flex'>
					{navigations.map((item) => (
						<li key={item.name}>
							<Link
								href={item.href}
								className='text-sm tracking-tight text-grayishBlue decoration-limeGreen decoration-[4px] underline-offset-[25px] hover:text-darkBlue hover:underline '>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
				<div className='hidden md:block'>
					<CTAButton />
				</div>
			</nav>
			<Dialog
				as='div'
				className='relative z-50 md:hidden'
				open={isOpen}
				onClose={() => setIsOpen(false)}>
				<div className='fixed inset-0 bg-darkBlue/30' aria-hidden='true' />
				<Dialog.Panel className='fixed left-6 right-6 top-24 z-10 rounded-[4px] bg-white'>
					<div className='relative py-8'>
						<ul className='flex flex-col items-center gap-6'>
							{navigations.map((item) => (
								<li key={item.name}>
									<Link
										href={item.href}
										className='text-lg tracking-tight text-darkBlue  '>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	)
}
export default Header
