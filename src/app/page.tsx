
'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  return (
    <main className="main-content">
      Home
    </main>
  )

}
