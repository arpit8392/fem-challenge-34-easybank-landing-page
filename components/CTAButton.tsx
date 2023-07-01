import Link from 'next/link'

const CTAButton = () => {
	return (
		<Link
			href={'#'}
			className='rounded-3xl bg-buttonGradient px-8 py-3 text-sm/7 font-bold text-white hover:opacity-40 '>
			Request Invite
		</Link>
	)
}
export default CTAButton
