'use client'

import Image from "next/image"
import Link from "next/link"
import { Github as GithubIcon, Linkedin, ArrowDownToLine} from 'lucide-react'
import { Tooltip } from '@chakra-ui/react'
import avatarHyngrid from '../../../public/images/avatar-Hyngrid.jpg'



export default function NavBar() {
    return(
        <>
            <nav className="flex flex-wrap w-full justify-center items-center md:justify-between bg-white text-gray-600">
                <div className="flex flex-row p-4 gap-4 bg-pink-600 text-white w-full md:w-72">
                    <div id='avatar' className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden">
                        <Image src={avatarHyngrid} width={500} height={500} alt="Foto perfil Hyngrid" />
                    </div>
                    <div className="infos">
                        <h1 className='font-semibold text-xl'>Hyngrid S Gradizzi</h1>
                        <h2 className=''>Desenvolvedora Front-end</h2>
                    </div>
                </div>
                <div className="flex gap-4 p-4 justify-center items-center md:pr-4 nav-principal">
                    <Link href="/">Home</Link>
                    <Link href="./curriculo">Currículo</Link>
                    <Tooltip label='Baixar currículo' placement='bottom-end'>
                        <Link href="./Curriculo_HyngridSGradizzi.pdf" target="_blank"><ArrowDownToLine/></Link>
                    </Tooltip>
                    <Tooltip label='GitHub' placement='bottom-end'>
                        <Link href="https://github.com/hyngridg" target="_blank"><GithubIcon/></Link>
                    </Tooltip>
                    <Tooltip label='LinkedIn' placement='bottom-end'>
                        <Link href="https://www.linkedin.com/in/hyngrid-soares" target="_blank"><Linkedin/></Link>
                    </Tooltip>
                </div>
            </nav>
        </>
    )
}