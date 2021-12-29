import React from 'react';

class Student extends React.Component {
    constructor() {
        super();
        this.state = {
            students : [
                {
                id: 1,
                name: 'Nguyen Van A',
                age: 30,
                adress: 'Hà Nội'
            },
            {
                id: 2,
                name: 'Nguyen Van B',
                age: 30,
                adress: 'Hồ Chí Minh'
            }]
        }
    }
    render(){
        return(
            <div className='container w-50'>
                <table className='table'>
                    <thead>
                        <tr style={{background: 'green'}}>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Adress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((student) =>{
                            return(
                                <tr>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td>{student.adress}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
};
export default Student;