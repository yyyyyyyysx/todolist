import './style.scss';
import { DeleteOutlined } from '@ant-design/icons';

export function Task(props) {
  return (
    <li className="task">
      <div className="task-title">
        {props.title}
        <DeleteOutlined className='edit-icon'/>
      </div>
      <div className="task-content">
        {props.content}
      </div>
    </li>
  )
}