export const Button = ({ handleClick, children }) =>(
    <button
        onClick={() => handleClick()}
    >
        {children}
    </button>
);