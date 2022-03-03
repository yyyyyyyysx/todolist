import './style.scss';
import { MyDate } from '../../domain/MyDate.ts';
import { Task } from '../../domain/Task.ts';
import { Task as CTask } from '../../components/task/Task.tsx';
import { LSUtils } from '../../utils/localstorage.ts';
import { useState } from 'react';
export function TaskList(props: {date: Date}) {
  let myDate: MyDate = new MyDate(props.date);
  const [list, setList] = useState(LSUtils.getTasks(props.date));
  const taskItems = list.map((task: Task) => <CTask title={task.title} content={task.content} key={task.title}/>);
  return (
    <div className='task-list'>
      <div className='list-date'>
        {myDate.month}月{myDate.day}日 ‧ 星期{myDate.day}
      </div>
      <ul className="tasks">
        {taskItems}
      </ul>
    </div>
  )
}