'use client'

import { ArrowDownToLine } from 'lucide-react'
import { IconButton, Tooltip, Text } from '@chakra-ui/react'

export default function BtnFloat() {    
    return(
        <>
            <Tooltip label='Baixe aqui meu currículo' placement='left'>
                <IconButton 
                aria-label='Baixe aqui meu currículo'
                className="flex flex-col items-center justify-center h-16 w-16 text-white bg-blue-800 hover:bg-blue-600 rounded-full mr-3 mb-3 fixed bottom-0 right-0 z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
                id="btnFloat">
                    <a href="./Curriculo_HyngridSGradizzi.pdf" download className='flex flex-col items-center justify-center'>
                        <ArrowDownToLine className='h-5 w-5'/>
                        <Text className='text-xs'>Currículo</Text>
                    </a>
                </IconButton>
            </Tooltip>
        </>
    )
}