import './style.scss';
import { useNavigate } from 'react-router-dom';
export function Header(props) {
  let navigate = useNavigate();

  return (
    <div className='header'>
      <span className='title'>{props.title}</span>
      <div className="options">
        <span 
        className='option today'
        onClick={() => {navigate('/')}}
        >
          今天
        </span>
        <span 
        className='option preview'
        onClick={() => {navigate('/preview')}}
        >预览</span>
      </div>
    </div>
  );
}

