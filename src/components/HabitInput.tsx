import { useState } from "react";

type Props = {
    addHabit: (text: string) => void;
};

export const HabitInput = ({ addHabit }: Props) => {
    const [inputValue, setInputValue] = useState("");
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(inputValue.trim().length > 0) {
            addHabit(inputValue);
            setInputValue("");
        }
    }
    
    return (
        <form
            onSubmit={handleSubmit}
            className="w-85 mx-auto flex items-center my-7 border border-gray-300 rounded-md"
        >
            <input
                className="text-lg flex-1 px-3 py-2 outline-blue-600"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Digite o hábito aqui..."
            />
            
            <button
                type="submit"
                className="text-lg px-3 py-2 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white"
                >
            +
            </button>
        </form>
    );
}