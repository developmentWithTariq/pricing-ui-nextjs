
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from './header'
import Pricing from './pricing'
import Features from './features'

const inter = Inter({ subsets: ['latin'] })
// NextComponentType<NextPageContext, {}, Props> = (props: Props)
export default function Home() {
  return (
    <>
      <Header />
      <Pricing />
      <Features />
    </>
  )
}
