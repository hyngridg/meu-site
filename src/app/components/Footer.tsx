'use client'

import Link from "next/link"

export default function Footer() {
    return (
        <>
            <footer className="bg-zinc-950 text-zinc-50 text-center p-6">
                <nav className="space-y-2"> 
                    <h2 className='text-pink-600 font-semibold text-xl'>Vamos conversar?</h2>
                    <p className="text-lg">Estou disponível se quiser trabalhar junto, fazer uma proposta ou tirar dúvidas.</p>
                    <ul className='flex flex-col md:flex-row justify-center gap-4'>
                        <li><Link href="mailto:hyngridgradizzi@gmail.com.br" className="text-blue-700">E-mail</Link></li>
                        <li><Link href="https://wa.me//5521999520533" className="text-blue-700">WhatsApp</Link></li>
                        <li>Rio de Janeiro, BR</li>
                    </ul>
                    <p className="text-xs text-gray-600">© 2023 - Hyngrid S Gradizzi</p>
                </nav>
            </footer>
        </>
    )
}