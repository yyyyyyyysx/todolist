import './style.scss';

export function TaskForm(props) {

  let getTask = (): void => {
    let title = document.querySelector('.task-form .task-title').value;
    let content = document.querySelector('.task-form .task-content').value;
    props.confirmAdd(title, content);
  }

  return (
    <div className="task-form">
        <input className='task-title' type="text" placeholder='标题'/>
        <textarea placeholder='描述' className='task-content' aria-invalid='false'></textarea>
        <div className="options">
          <button className='add-button' onClick={getTask}>添加任务</button>
          <button className="cancel-button" onClick={props.cancelAdd}>
            取消
          </button>
        </div>
      </div>
  )
}