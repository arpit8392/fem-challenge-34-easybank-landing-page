import { features } from '@/data'
import Image from 'next/image'

const Features = () => {
	return (
		<section className='flex flex-col gap-14 bg-lightGrayishBlue px-6 py-16 text-center md:gap-20 md:px-40 md:py-24 md:text-left'>
			<div className='flex flex-col gap-4'>
				<h2 className='text-3xl font-light tracking-tight text-darkBlue md:text-[40px]/[64px]'>
					Why choose Easybank?
				</h2>
				<p className='max-w-2xl text-[15px]/[25px] text-grayishBlue md:text-lg'>
					We leverage Open Banking to turn your bank account into your financial
					hub. Control your finances like never before.
				</p>
			</div>
			<ul className='flex flex-col gap-8 md:flex-row'>
				{features.map((feature) => (
					<li
						key={feature.id}
						className='flex flex-col items-center gap-6 md:items-start md:gap-10'>
						<Image
							src={`/images/${feature.icon}`}
							alt={feature.icon}
							width={72}
							height={72}
						/>
						<div className='flex flex-col gap-4 text-center md:gap-7 md:text-left'>
							<h3 className='text-xl font-light tracking-tight text-darkBlue md:text-2xl'>
								{feature.title}
							</h3>
							<p className='max-w-sm text-[15px]/[25px] text-grayishBlue md:text-base/[26px]'>
								{feature.description}
							</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}
export default Features
