import './style.scss';
import { MyDate } from '../../domain/MyDate.ts';
import { TaskList } from '../../components/tasklist/TaskList.tsx';
import { DownOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { LSUtils } from '../../utils/localstorage.ts';

export function Preview(props) {
  
  let list: MyDate[] = [new MyDate(new Date())];
  for(let i = 0; i < 6; i++) {
    let lastDay = list[list.length - 1];
    list.push(lastDay.getNextDay());
  }

  const [calendar, setCalendar] = useState(list);

  let lists = []
  for(let date of calendar) {
    lists.push(LSUtils.getTasks(date.date));
  }
  
  

  return (
    <div className="preview">
      <div className="head">
        <button className="drop-down">
          3月 2022
          <DownOutlined className='down-icon'/>
        </button>
        <button className="back-to-today">
          今天
        </button>
      </div>
      <div className="date-list">
        <LeftOutlined className='tool-icon'/>
        {
          calendar.map((date, i) => (
            <div className={i === 0 ? "cur day" : "day"}>
              <span className='week'>{date.week}</span>
              <span className="date">{date.day}</span>
            </div>
          ))
        }
        <RightOutlined className='tool-icon'/>
      </div>
      <div className='task-lists'>
        {
          calendar.map(date => <TaskList date={date.date}/>)
        }
      </div>
    </div>
  )
}