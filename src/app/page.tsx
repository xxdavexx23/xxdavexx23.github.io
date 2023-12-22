
'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link';



export default function Home() {
  const router = useRouter();
  return (
    <main className="main-content">
      <div className="floating-nav">
        <ul>
          <Link href="/Next">About Page</Link>
        </ul>
      </div>
    </main>
  )

}
