function ActionButton({ onClick, text }) {
    return (
        <button onClick={onClick}
            className="text-(--bg) text-[18px] xl:text-[22px] bg-(--normal) rounded-2xl px-20 py-2.5 font-semibold hover:bg-(--hover) hover:text-[20px] hover:xl:text-[26px] active:bg-(--active) active:xl:text-[20px] transition-all duration-200 cursor-pointer w-full">

            {text}

        </button>
    )
}

export default ActionButton;