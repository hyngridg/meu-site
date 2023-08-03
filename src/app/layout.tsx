import { Providers } from "./providers"
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import BtnFloat from '@/app/components/BtnFloat'

export const metadata: Metadata = {
  title: 'Home | Hyngrid S Gradizzi',
  description: 'Site profissional da desenvolvedora front-end Hyngrid S Gradizzi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
// const {asPath} = useRouter();
  // console.log(asPath);

  return (
    <html lang="pt-br">
      <body className="bg-gray-100 text-zinc-800 h-screen flex flex-col relative">
        <Providers>
            <BtnFloat />
            <Navbar />
            <main className="flex flex-1">
              {children}
            </main>
            <Footer />
        </Providers>
      </body>
    </html>
  )
}
