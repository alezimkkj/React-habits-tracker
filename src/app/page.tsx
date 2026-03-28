"use client"

import { HabitsList } from "../components/HabitsList";
import { Header } from "../components/Header";
import { Mention } from "../components/Mention";
import { habits } from "../data/habits";

const Page = () => {
  return (
    <div>
      <Header />

      <Mention text="'Foco, disciplina e determinação, e todos os seus sonhos se realizarão.'" author="- Citação, 2026"/>

      <div className="w-85 mx-auto flex items-center my-7 border border-gray-300 rounded-md">
        <input className="text-lg flex-1 px-3 py-2 outline-blue-600" type="text" placeholder="Digite o hábito aqui..."/>
        <button className="text-lg px-3 py-2 hover:bg-blue-600 hover:text-white">+</button>
      </div>
      
      <h2 className="text-xl text-blue-600 font-bold uppercase ml-6 my-2">Seus Hábitos:</h2>
      <HabitsList habits={habits} />
    </div>
  );
}

export default Page;