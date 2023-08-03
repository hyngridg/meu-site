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
        <div className="flex-1 p-4">
          {children}
        </div>
      </>
    )
  }