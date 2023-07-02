import { articles } from '@/data'
import Image from 'next/image'

const Articles = () => {
	return (
		<section className='flex flex-col items-center gap-8 px-6 py-24 md:items-start md:gap-10 md:px-40 md:py-20'>
			<h2 className='text-[32px] font-light tracking-tight md:text-[40px]/[64px]'>
				Latest Articles
			</h2>
			<ul className='grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-8'>
				{articles.map((article) => (
					<li
						key={article.id}
						className='grid grid-cols-1 overflow-hidden rounded-lg bg-white shadow-md'>
						<div className='relative h-[200px] w-full'>
							<Image
								src={`/images/${article.image}`}
								alt={article.heading}
								fill
							/>
						</div>
						<div className='flex flex-col gap-2 px-8 py-6 md:px-6'>
							<p className='text-[10px]/[18px] text-grayishBlue'>
								By {article.author}
							</p>
							<h3 className='text-light text-darkBlue tracking-tight hover:text-limeGreen cursor-pointer'>{article.heading}</h3>
							<p className='text-[13px]/[18px] text-grayishBlue max-w-xs'>{article.summary}</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}
export default Articles
