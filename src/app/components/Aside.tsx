import { Palette, FileCode2, Bot} from 'lucide-react'
import BadgeStylized from '@/app/components/BadgeStylized'

export default function Aside() {
    return (
        <>
            <aside className="w-full lg:w-72 p-4 order-2 lg:order-1 bg-gray-800 text-gray-400 flex flex-col">
                <h2 className='text-pink-600 font-semibold text-xl mb-2'>SKILLS</h2>
                <ul className='list-disc pl-6'>
                    <li>Aplicações Web responsivas</li>
                    <li>HTML / HTML 5</li>
                    <li>CSS 3</li>
                    <li>SASS</li>
                    <li>JavaScript</li>
                    <li>I.A. Watson da IBM</li>
                    <li>Git</li>
                    <li>Next.js 13</li>
                    <li>React</li>
                    <li>Scrum</li>
                    <li>Bootstrap 4</li>
                    <li>Chakra UI</li>
                    <li>Tailwind CSS</li>
                    <li>Angular Material</li>
                    <li>Microsoft SharePoint</li>
                    <li>UI | UX</li>
                </ul>
                <h2 className='text-pink-600 font-semibold text-xl mt-6 mb-2'>INTERESSES</h2>
                <div className='mb-4 space-y-2'>
                    <div className='flex items-center gap-2'><FileCode2/>Desenvolvimento de software</div>
                    <div className='flex items-center gap-2'><Bot/>Novas Tecnologias</div>
                    <div className='flex items-center gap-2'><Palette/>Design</div>
                </div>
            </aside>
        </>
    )
}