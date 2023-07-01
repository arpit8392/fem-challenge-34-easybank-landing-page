import './globals.css'
import { Public_Sans } from 'next/font/google'

const public_sans = Public_Sans({ subsets: ['latin'] })

export const metadata = {
	title: 'Easybank Landing Page',
	description:
		'Frontend Mentor Challenge | Solved by Arpit Namdev | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${public_sans.className}`}>{children}</body>
		</html>
	)
}
