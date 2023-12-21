
'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <main className="main-content">
      <h1> HELLO </h1>
      <button type="button" onClick={() => router.push('/Next')}>
      Dashboard
    </button>
    </main>
  )

}
