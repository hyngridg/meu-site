import { Card, CardBody, Badge } from '@chakra-ui/react'

interface CardIconStylizedProps{
    icon: any
    title: string
    subtitle: string
    badge?: boolean
    textBadge?: string
}

export default function CardIcon(props: CardIconStylizedProps) {
    return(
        <>
            <Card>
                <CardBody className='flex flex-row items-center space-y-2'>
                <div className='inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-pink-600 bg-pink-100 rounded-full mr-3'>
                    {props.icon}
                </div>
                <div>
                    <span className="block font-semibold text-md">{props.title}</span>
                    <span className="block text-gray-500">{props.subtitle} <Badge colorScheme='green' className={`${props.badge ? '' : 'invisible'}`}>{props.textBadge}</Badge></span>
                </div>
                </CardBody>
            </Card>
        </>
    )
}