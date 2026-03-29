import { useState } from "react";

type Props = {
    addHabit: (text: string, priority: number) => void;
};

export const HabitInput = ({ addHabit }: Props) => {
    const [inputValue, setInputValue] = useState("");
    const [priority, setPriority] = useState(1);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(inputValue.trim().length > 0) {
            addHabit(inputValue, priority);
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

            <select
            className="outline-none"
            value={priority}
            onChange={(e) => setPriority(Number(e.target.value))}
            >
                <option value="0">Fácil</option>
                <option value="1">Médio</option>
                <option value="2">Difícil</option>
            </select>
            
            <button
                type="submit"
                className="text-lg px-3 py-2 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white"
                >
            +
            </button>
        </form>
    );
}