import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const EmployeeDetails = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    return (
        <div className='employee-detail'>
            <p>{state.id}: {state.name} - {state.age}</p>
            <button onClick={() => { navigate(-1) }}>Go back</button>
        </div>

    )
}