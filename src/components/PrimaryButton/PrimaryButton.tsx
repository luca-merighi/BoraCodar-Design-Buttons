import './PrimaryButton.css'

interface PrimaryButtonProps {
    icon?: any;
    text: string,
    bgClass?: string,
}

export default function PrimaryButton(props: PrimaryButtonProps) {
    return (
        <button className={`
            primaryButton ${props.bgClass}
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