import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Happy Birthday Abduallah! 🎂',
  description: 'A special birthday message for Abduallah',
}

export default function Home() {
  const data = giftData.ahmed || giftData.aya
  return <GiftClient data={data} />
}
