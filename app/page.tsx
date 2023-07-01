import Articles from '@/components/Articles'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
	return (
		<main className=''>
			<Header />
			<Hero />
			<Features />
			<Articles />
			<Footer />
		</main>
	)
}
