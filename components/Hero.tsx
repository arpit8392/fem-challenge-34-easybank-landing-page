import Image from 'next/image'
import HeroImage from '@/public/images/image-mockups.png'
import CTAButton from './CTAButton'

const Hero = () => {
	return (
		<section className='grid grid-cols-1 justify-items-center bg-introMobile bg-contain bg-no-repeat md:grid-cols-2 md:bg-introDesktop md:bg-right'>
			<div className='md:order-last'>
				<Image src={HeroImage} alt='' className='w-auto md:object-cover' />
			</div>
			<div className='flex flex-col gap-8 px-6 pb-20 pt-10 text-center tracking-tight md:justify-center md:pl-40 md:py-44 md:text-left md:gap-9'>
				<div className='flex flex-col gap-4 md:gap-6'>
					<h1 className='max-w-sm text-[40px] font-light leading-tight text-darkBlue md:text-[56px]/[64px] md:max-w-none'>
						Next generation digital banking
					</h1>
					<p className='max-w-sm text-[15px]/[25px] text-grayishBlue md:text-lg md:max-w-lg'>
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
