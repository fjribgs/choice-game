function TextBox ({ children, isWarning = false }) {
    const textColor = isWarning ? "text-start text-red-400" : "text-start";
    
    return (
        <div
            className={`${textColor} flex h-full flex-3 text-[14px] md:text-[15px] lg:text-[16px] 2xl:text-[20px] border-2 border-(--normal) rounded-2xl px-3.5 md:px-5 xl:px-8 py-4.5 md:py-[26px] xl:py-9 font-light overflow-auto`}>

            {children}
        </div>
    );
}

export default TextBox;