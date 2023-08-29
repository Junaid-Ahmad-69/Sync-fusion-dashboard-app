const Button = ({bgColor, text, color, borderRadius, size}) => {
    return (
        <button type="button" style={{backgroundColor: bgColor, color, borderRadius}} className={`text-${size} p-3 hover:drop-shadow-xl`}>
            {text}
        </button>
    )
}

export default Button
