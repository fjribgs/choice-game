function NextButton({ onClick, text }) {
    return (
        <button onClick={onClick}
            className="cursor-pointer text-(--normal) underline hover:font-bold transition-all duration-200 text-start">
            
            {text}

        </button>
    )
}

export default NextButton;