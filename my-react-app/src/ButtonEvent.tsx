function ButtonEvent(){

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        (e.target as HTMLButtonElement).textContent = "OUCH! 🤕"
    }

    return(
        <button onClick={(e) => handleClick(e)}>Click me! 😁</button>
    );
}

export default ButtonEvent;