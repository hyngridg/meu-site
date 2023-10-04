'use client'

import Image from "next/image"
import Link from "next/link"
import { Button, SimpleGrid, Card, CardHeader, Heading, CardBody, CardFooter, Text } from '@chakra-ui/react'
import BadgeStylized from '@/app/components/BadgeStylized'
import iWoman from '../../public/images/woman_code.png'

export default function Home() {
  return (
    <>
    <div className="flex flex-col flex-grow">
        <section className="flex flex-row flex-wrap justify-center items-center p-4">
          <div className="flex flex-col flex-wrap justify-between w-full order-2 md:order-1 md:w-96 pr-4">
            <h1 className="font-semibold text-2xl mb-4">Prazer, sou a Hyngrid.</h1>
            <p className="text-gray-600 mb-2">
              Minha paixão é desenvolver projetos front-end que proporcionam boas experiências digitais na web.</p>
            <p className="text-gray-600 mb-2">Estou me capacitando profissionalmente para ser uma Desenvolvedora Full Stack.</p>
            <p className="text-gray-600">
              Fico feliz por tê-lo(a) visitando o meu site. Aproveite para ver meu currículo 
              <Link href="./curriculo" className="text-blue-700"> aqui</Link> e conhecer um pouco sobre minha trajetória.❤️</p>
          </div>
            <Image src={iWoman} width={260} height={260} alt="Foto perfil Hyngrid" className="order-1 md:order-2" />
        </section>

        <section className="flex flex-col p-4 justify-center items-center bg-gray-800 mb-4">
          <q className="md:w-1/2 text-center text-lg text-gray-400">Estudo programação enquanto me desafio, me divirto e evoluo dia após dia.</q>
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
