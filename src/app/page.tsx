"use client"

import { useState } from "react";
import { HabitInput } from "../components/HabitInput";
import { HabitsList } from "../components/HabitsList";
import { Header } from "../components/Header";
import { Mention } from "../components/Mention";
import { HabitsType } from "../types/HabitsType";

const Page = () => {
  const [habits, setHabits] = useState<HabitsType[]>([
    { id: 0, content: 'Estudar', priority: 1, done: false},
    { id: 1, content: 'Treinar', priority: 2, done: false},
    { id: 2, content: 'Ler', priority: 0, done: false},
  ]);
  
  const addHabit = (text: string) => {
    const newHabits = [...habits, { id: habits.length, content: text, priority: 1, done: false}];

    setHabits(newHabits);
  };
  
  return (
    <div>
      <Header />

      <Mention text="'Foco, disciplina e determinação, e todos os seus sonhos se realizarão.'" author="- Citação, 2026"/>

      <HabitInput addHabit={addHabit} />
      
      <h2 className="text-xl text-blue-600 font-bold uppercase ml-6 my-2">Seus Hábitos:</h2>
      <HabitsList habits={habits} />
    </div>
  );
}

export default Page;