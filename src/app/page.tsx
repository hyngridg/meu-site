'use client'

import Image from "next/image"
import Link from "next/link"
import { Button, SimpleGrid, Card, CardHeader, Heading, CardBody, CardFooter, Text } from '@chakra-ui/react'
import BadgeStylized from '@/app/components/BadgeStylized'
import avatarHyngrid from '../../public/images/avatar-Hyngrid.jpg'

export default function Home() {
  return (
    <>
    <div className="flex flex-col flex-grow">
        <section className="flex flex-row justify-center items-center p-4">
          <div className="flex flex-col flex-wrap justify-between md:w-96 pr-4">
            <h1 className="font-semibold text-2xl mb-4">Prazer, sou a Hyngrid.</h1>
            <p className="text-gray-600 mb-2">
              Minha paixão é desenvolver projetos front-end que proporcionam boas experiências digitais na web.</p>
            <p className="text-gray-600">
              Fico feliz em recebê-la(o) no meu site. Mesmo estando em construção tenho alguns conteúdos para mostrar.
              Navegue pelas páginas e descubra mais sobre mim.</p>
          </div>
            <Image src={avatarHyngrid} width={250} height={250} alt="Foto perfil Hyngrid" className="rounded-full" />
        </section>

        <section className="flex flex-col p-4 justify-center items-center bg-gray-800 mb-4">
          <q className="max-w- text-lg text-gray-400">Atualmente estudo programação enquanto me desafio, me divirto e subo de nível dia após dia.</q>
          <cite className="text-gray-400">Hyngrid S Gradizzi</cite>
        </section>

        <section className="flex flex-col p-4 justify-center items-center bg-white mb-4">
          <h2 className='font-semibold text-lg mb-2'>Recursos utilizados neste site</h2>
          <div className="flex flex-row flex-wrap gap-2">
            <BadgeStylized themeStylized="bg-slate-950 text-slate-100" textBadge='Next.js' />
            <BadgeStylized themeStylized="bg-blue-500 text-white" textBadge='Tailwind CSS' />
            <BadgeStylized themeStylized="bg-emerald-500 text-white" textBadge='Chakra UI' />
            <BadgeStylized themeStylized="bg-red-400 text-white" textBadge='Lucide' />
            <BadgeStylized themeStylized="bg-purple-500 text-white" textBadge='GitHub' />
          </div>
        </section>
        </div>      
    </>
  )
}
