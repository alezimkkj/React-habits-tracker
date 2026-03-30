type Props = {
    text: string,
    author: string,
}

export const Mention = ({ text, author }: Props) => {
    return (
        <div className="w-full max-w-md sm:max-w-xl mx-auto my-4 px-3 py-6 text-white bg-blue-600 rounded-md shadow">
            <p className="font-bold text-center text-shadow-2xs">{text}</p>
            <p className="text-right mt-2">{author}</p>
        </div>
    );
}