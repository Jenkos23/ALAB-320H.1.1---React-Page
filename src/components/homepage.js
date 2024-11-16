import SearchBar from "./search"
import Header1 from "./header"
import EmployeeList from "./employeeList"
import React from "react"
import '../styles/homepage.css'

export default function HomePage(){
    return(
        
        <div className="homepage-container">
        <Header1 />
        <SearchBar />
        <EmployeeList />
    </div>
    )
}