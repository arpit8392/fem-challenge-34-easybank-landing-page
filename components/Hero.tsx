import Image from 'next/image'
import HeroImage from '@/public/images/image-mockups.png'
import CTAButton from './CTAButton'

const Hero = () => {
	return (
		<section className='grid grid-cols-1 justify-items-center md:grid-cols-2 gap-10 '>
			<div className='md:order-last bg-introMobile bg-cover bg-no-repeat md:bg-introDesktop '>
				<Image src={HeroImage} alt='' className='z-10 md:object-cover ' />
			</div>
			<div className='flex flex-col gap-8 px-6 pb-20 text-center tracking-tight md:justify-center md:gap-9 md:py-44 md:pl-40 md:text-left'>
				<div className='flex flex-col gap-4 md:gap-6'>
					<h1 className='max-w-sm text-[40px] font-light leading-tight text-darkBlue md:max-w-none md:text-[56px]/[64px]'>
						Next generation digital banking
					</h1>
					<p className='max-w-sm text-[15px]/[25px] text-grayishBlue md:max-w-lg md:text-lg'>
						Take your financial life online. Your Easybank account will be a
						one-stop-shop for spending, saving, budgeting, investing, and much
						more.
					</p>
				</div>
				<div>
					<CTAButton />
				</div>
			</div>
		</section>
	)
}
export default Hero
