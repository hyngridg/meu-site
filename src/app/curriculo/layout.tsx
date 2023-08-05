import { Metadata } from 'next'
import Aside from '@/app/components/Aside'
import '@/app/globals.css'
 
export const metadata: Metadata = {
  title: 'Currículo Digital | Hyngrid S Gradizzi',
}

export default function CurriculoLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Aside />
        <div className="p-4 order-1 lg:order-2 lg:flex-1 w-full">
          {children}
        </div>
      </>
    )
  }