interface BadgeStylizedProps{
    textBadge?: string
    themeStylized?: string
}

export default function BadgeStylized(props: BadgeStylizedProps){
    return(
        <>
            <div className={`text-xs py-1 px-2 leading-none dark:bg-gray-900 shadow rounded-md ${props.themeStylized}`}>{props.textBadge}</div>
        </>
    )
}