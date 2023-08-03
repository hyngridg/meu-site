import { Palette, FileCode2, Bot} from 'lucide-react'
import BadgeStylized from '@/app/components/BadgeStylized'

export default function Aside() {
    return (
        <>
            <aside className="w-72 bg-gray-800 text-gray-400 p-4">
                <h2 className='text-pink-600 font-semibold text-xl mb-2'>SOFT SKILLS</h2>
                <ul className='list-disc pl-6'>
                    <li>Criatividade</li>
                    <li>Trabalho colaborativo</li>
                    <li>Resiliência</li>
                    <li>Vontade de aprender</li>
                </ul>
                <h2 className='text-pink-600 font-semibold text-xl mt-6 mb-2'>HARD SKILLS</h2>
                <ul className='list-disc pl-6'>
                    <li>Aplicações Web</li>
                    <li>Layout | UI | UX</li>
                    <li>Design Digital</li>
                </ul>
                <h2 className='text-pink-600 font-semibold text-xl mt-6 mb-2'>INTERESSES</h2>
                <div className='mb-4 space-y-2'>
                    <div className='flex items-center gap-2'><FileCode2/>Front-end</div>
                    <div className='flex items-center gap-2'><Bot/>Novas Tecnologias</div>
                    <div className='flex items-center gap-2'><Palette/>Design</div>
                </div>
            </aside>
        </>
    )
}