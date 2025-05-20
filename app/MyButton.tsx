import Link from "next/link";

const MyButton: React.FC = () => {
    return (
        <Link href = "\App2">
            <button className="bg-white p-20 rounded-lg shadow-md w-full max-w-md text-black fontSize 20">
                <b>Start Calculating</b>
                <br></br>
                <b>Click Here!</b>
                </button>
        </Link>
    );
};

export default MyButton;
/*only use this if this is the only function on page*/