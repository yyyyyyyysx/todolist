import './style.scss';
import { PlusSquareTwoTone } from '@ant-design/icons';
import { TaskList } from '../../components/tasklist/TaskList.tsx';
import { TaskForm } from '../../components/taskform/TaskForm.tsx';
import { useState } from 'react';
import { LSUtils } from '../../utils/localstorage.ts';

function Today(props) {
  const date = new Date();
  const week = ['日', '一', '二', '三', '四', '五', '六'];
  const [todayTasks, setTodayTasks] = useState(LSUtils.getTasks(date));
  const [isAdding, setIsAdding] = useState(false);

  let cancelAdd = (): void => {
    setIsAdding(false);
  }

  let confirmAdd = (title: string, content: string): void => {
    LSUtils.addTask(date, title, content);
    setTodayTasks(LSUtils.getTasks(date));
    setIsAdding(false);
  }

  return (
    <div className='today'>
      <div className="head">
        <span className='title'>今天</span>
        <span className='subtitle week'>{week[date.getDay()]}</span>
        <span className='subtitle date'>{(date.getMonth() + 1) + '月' + date.getDate() + '日'}</span>
      </div>
      <TaskList date={date}/>
      {
        isAdding ? 
        <TaskForm
        cancelAdd={cancelAdd}
        confirmAdd={confirmAdd}
        /> : 
        (
        <div className="add-task" onClick={() => setIsAdding(true)}>
           <PlusSquareTwoTone className='add-icon' twoToneColor="#DB4C3F"/>
           <div className="add">添加任务</div>
        </div>
        ) 
      }
    </div>
  )
}

export {Today}