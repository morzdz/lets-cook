const Reset = ({ handleReset }) => {
    return (
        <button className="border rounded-md bg-theme1-dark text-white font-medium py-2 px-4" onClick={handleReset}>
            Reset
        </button>
    );
};

export default Reset