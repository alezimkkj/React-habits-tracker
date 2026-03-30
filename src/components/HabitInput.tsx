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
            className="w-[calc(100%-1.5rem)] max-w-2xl lg:max-w-3xl px-2 my-5 mx-auto flex items-center rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
        >
            <input
                className="text-lg flex-1 p-2 outline-blue-600"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Digite o hábito aqui..."
            />
            
            <div className="flex flex-col sm:flex-row">
                <select
                className="outline-none text-sm py-2 sm:py-0"
                value={priority}
                onChange={(e) => setPriority(Number(e.target.value))}
                >
                    <option value="0">Fácil</option>
                    <option value="1">Médio</option>
                    <option value="2">Difícil</option>
                </select>
                
                <button
                    type="submit"
                    className="text-lg px-3 py-2 rounded-md cursor-pointer transition hover:bg-blue-600 hover:text-white"
                    >
                +
                </button>
            </div>
        </form>
    );
}