import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function User() {
    const [users,setUsers]=useState([])
    const [isLoading,setLoading]=useState(false)


useEffect(()=>{
    loadData()
},[])

let loadData=async()=>{
    setLoading(true)
let users= await axios.get(
    'https://641c669b1a68dc9e4608a87e.mockapi.io/users'
    );
    setUsers(users.data)
    setLoading(false)
}

let userDelete=async (id)=>{
    try{
        let ask=window.confirm("Are you sure you want delete it");
        if(ask){
            await axios.delete(`https://641c669b1a68dc9e4608a87e.mockapi.io/users/${id}`)
            users.slice(users.id)
            loadData()

        }
        
    }catch(error){

    }
}
  return (
    <div>
     <div class="container-fluid">

<h1 class="h3 mb-2 text-gray-800">Tables</h1>
<div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">User</h1>
                        <Link to="/create-user" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i>Create User</Link>
                    </div>

{
    isLoading ?<span>LOADING....</span>:<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                    <th>SI</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                        <th>Company</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tfoot>
                
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                        <th>Company</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
                <tbody>
                    {
                        users.map((user,index)=>{
                            return <tr>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.position}</td>
                            <td>{user.office}</td>
                            <td>{user.Age}</td>
                            <td>{user.Startdate}
                            </td>
                            <td>{user.Salary}</td>
                            <td>{user.Company}</td>
                            <td><Link to={`/users/${user.id}`}className='btn-btn-sm- btn-primary'>View</Link></td>
                            <td><Link to={`/user/edit/${user.id}`} className='btn-btn-sm btn-success'>Edit</Link></td>
                            <td><button onClick={()=> userDelete(user.id)}
                             className='btn-btn-sm- btn-warning'>Delete</button></td>
                          </tr>
                        })
                    }
                </tbody>
                
                    </table>
                    </div>
                    </div>
                    </div>
}

                    </div>
                    </div>
  )
}

export default User