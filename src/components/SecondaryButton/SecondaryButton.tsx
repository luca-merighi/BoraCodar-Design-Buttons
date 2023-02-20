import './SecondaryButton.css'

interface SecondaryButtonProps {
    icon?: any;
    text: string,
    bgClass?: string,
}

export default function SecondaryButton(props: SecondaryButtonProps) {
    return (
        <button className={`
            secondaryButton ${props.bgClass}
        `}>
            {props.icon ? (
                <div className="icon">
                    {props.icon}
                </div>
            ) : false}
            {props.text}
        </button>
    )
}