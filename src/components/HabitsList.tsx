import { priorityColors } from "../data/priorityColors";
import { HabitsType } from "../types/HabitsType";

type Props = {
  habits: HabitsType[];
};

export const HabitsList = ({habits}: Props) => {
    return (
        <div className="flex flex-col items-center gap-5">
        {
          habits.map(item => {
            return (
              <div key={item.id} className="w-85 flex items-center gap-5 p-4 border border-gray-300 rounded-lg shadow">
                <input className="appearance-none h-5 w-5 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-transparent" type="checkbox" checked={item.done}/>
                <p className="text-xl flex-1">{item.content}</p>
                <div className={`h-5 w-5 rounded-full shadow ${priorityColors[item.priority]}`}></div>
              </div>
            )
          })
        }
      </div>
    );
};