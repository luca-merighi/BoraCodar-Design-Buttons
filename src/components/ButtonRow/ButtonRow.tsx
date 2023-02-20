import './ButtonRow.css'

interface ButtonRowProps {
    label: string,
    children?: any
}

export default function ButtonRow(props: ButtonRowProps) {
    return (
        <div className="row">
            <h3 className="label">
                {props.label}
            </h3>

            {props.children}
        </div>
    )
}