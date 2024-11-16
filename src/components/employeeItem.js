import React from "react";
import '../styles/employeeitem.css'

export default function EmployeeItem(){

    const staffMembers = [
        {
          img: 'https://via.placeholder.com/150',
          name: 'Alice Johnson',
          jobTitle: 'Software Engineer',
        },
        {
          img: 'https://via.placeholder.com/150',
          name: 'Bob Smith',
          jobTitle: 'Project Manager',
        },
        {
          img: 'https://via.placeholder.com/150',
          name: 'Charlie Brown',
          jobTitle: 'UI/UX Designer',
        },
        {
            img: 'https://via.placeholder.com/150',
            name: 'Jen Kosy',
            jobTitle: 'Software tester-quality',
          },
          
        
      ];
    return(
        <ul className="staff-list">
      {staffMembers.map((staff, index) => (
        <li key={index} className="employee-item">
          <img src={staff.img} alt={staff.name} className="employee-img" />
          <div className="employee-details">
            <h3 className="employee-name">{staff.name}</h3>
            <p className="employee-job">{staff.jobTitle}</p>
          </div>
        </li>
      ))}
    </ul>
    )
}