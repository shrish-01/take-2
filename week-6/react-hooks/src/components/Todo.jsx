export default function Todo({index, title, description}) {
    return (
        <div key={index}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}