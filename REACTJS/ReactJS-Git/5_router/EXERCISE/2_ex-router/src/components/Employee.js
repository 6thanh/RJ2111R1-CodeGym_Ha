import { useLocation, useNavigate } from "react-router-dom"

export const Employee = () => {
    // get objects declared from navigation
    const { state } = useLocation();
    const navigate = useNavigate();
    // declare employee list
    const employees = [
        {
            id: 1,
            name: "Hoa",
            age: 20
        },
        {
            id: 2,
            name: "Khánh",
            age: 25
        },
        {
            id: 3,
            name: "Tú",
            age: 22
        },
    ];
    // handle event when user click "Details" button
    const handleClick = (e) => {
        let employeeIndex = e.target.value;
        navigate('/employee-detail', { state: employees[employeeIndex] });
    }
    // create react elements of employee list to perform by table
    const employeeRows = employees.map((employee, index) => (
        <tr>
            <th className="text-center">{employee.id}</th>
            <td className="text-center">{employee.name}</td>
            <td className="text-center">{employee.age}</td>
            <td className="text-center"><button className="btn btn-info" onClick={handleClick} value={index}>Details</button></td>
        </tr>
    ));
    // return info
    return (
        <div className="employeeContent container mt-3">
            <p className="loginInfo">Your account is: {state.username} - {state.password}</p>
            <h3>Employee list</h3>
            <table className="table table-striped border" cellPadding='5px' cellSpacing='5px'>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Age</th>
                    <th className="text-center">Action</th>
                </tr>
                {employeeRows}
            </table>
            <br />
            <button onClick={() => { navigate(-1) }}>Go back</button>
        </div>
    )
}