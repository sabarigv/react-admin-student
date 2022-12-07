import React from 'react'
import { useParams } from 'react-router-dom'
import User from './User';

function ViewUser() {
    let users = [
        {
            id: 1,
            name: "Kalai",
            position: "Developer",
            office: "Chennai",
            age: 45,
            startDate: '01/01/2021',
            salary: 135000
        },
        {
            id: 2,
            name: "Ramya",
            position: "Developer",
            office: "Chennai",
            age: 24,
            startDate: '01/01/2021',
            salary: 35000
        },
        {
            id: 3,
            name: "Pavithra",
            position: "Developer",
            office: "Chennai",
            age: 24,
            startDate: '01/01/2021',
            salary: 35000
        },
    ]
    let {id} = useParams();
    console.log(id)
  return (
    <div>Name : {users[id -1 ].name}</div>
  )
}

export default ViewUser