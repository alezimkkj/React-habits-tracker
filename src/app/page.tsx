"use client"

import { useState } from "react";
import { HabitInput } from "../components/HabitInput";
import { HabitsList } from "../components/HabitsList";
import { Header } from "../components/Header";
import { Mention } from "../components/Mention";
import { HabitsType } from "../types/HabitsType";

const Page = () => {
  const [habits, setHabits] = useState<HabitsType[]>([
    { id: 0, content: 'Estudar', priority: 1, done: false },
    { id: 1, content: 'Treinar', priority: 2, done: false },
    { id: 2, content: 'Ler', priority: 0, done: false },
  ]);

  const completedCount = habits.filter(habit => habit.done).length;
  const pendingCount = habits.length;

  const addHabit = (text: string, priority: number) => {
    const newHabits = [...habits, { id: Date.now(), content: text, priority: priority, done: false }];

    setHabits(newHabits);
  };

  const habitDone = (id: number) => {
    const newHabits = [...habits];

    newHabits.map(item => {
      if (item.id === id) {
        item.done = !item.done;
      }
    })

    setHabits(newHabits);
  };

  const deleteHabit = (id: number) => {
    const newHabits = habits.filter(item => item.id !== id);

    setHabits(newHabits);
  };

  return (
    <div>
      <Header />

      <Mention text="'Foco, disciplina e determinação, e todos os seus sonhos se realizarão.'" author="- Citação, 2026" />

      <HabitInput addHabit={addHabit} />

      <h2 className="text-xl md:text-2xl text-blue-600 font-bold uppercase text-center my-2">Seus Hábitos:</h2>
      <HabitsList habits={habits} habitDone={habitDone} deleteHabit={deleteHabit} />

      <p className="text-center my-3 text-gray-400">
        {pendingCount > 0 ? (
          <span>Concluídos: {completedCount} / {pendingCount}</span>
        ) : (
          <span>Sem hábitos adicionados.</span>
        )}
      </p>
    </div>
  );
}

export default Page;