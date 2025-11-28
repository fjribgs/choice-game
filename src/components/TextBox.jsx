function TextBox ({ children, isWarning = false }) {
    const textColor = isWarning ? "text-start text-red-400" : "text-start";
    
    return (
        <div
            className={`${textColor} flex flex-1 text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] border-2 border-(--normal) rounded-2xl px-5 py-[26px] font-light`}>

            {children}

        </div>
    );
}

export default TextBox;