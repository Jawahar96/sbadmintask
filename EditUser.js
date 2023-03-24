import React, { useEffect } from 'react'
import {formik,useFormik} from 'formik';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Edituser() {
  const params=useParams()
  const navigate=useNavigate()
         const formik= useFormik({
    initialValues : {
      name :"",
      Position :"",
      Office :"",
      Age : "",
      Startdate : "",
      Salary :"",
      Company : ""

    },
    validate :(values)=>{

      let errors={};
     if(values.name ==="" &&  values.name.length < 5){
      errors.name ="Enter a valid  name"
     }

     if(values.Position=""){
      errors.Position="Enter valid position"
     }

     return errors;

    },
    onSubmit : async (values)=>{
      let users=await axios.put(`https://641c669b1a68dc9e4608a87e.mockapi.io/users/${params.id}`,values);
 navigate('/users/')
      console.log(values);

    }
  });


  useEffect(()=>{
    loadUser()
  },[])

  let loadUser=async()=>{
    try{
      let user=await axios.get(`https://641c669b1a68dc9e4608a87e.mockapi.io/users/${params.id}`)
      formik.setValues({
      
        name:user.data.name,
        Position:user.data.position,
        Office:user.data.office,
        Age:user.data.age,
         Startdate:user.data.startdate,
        Salary:user.data.salary,
        Company:user.data.company
      })
    }catch(error){

    }
  }
  return (
    <div>
      <div className='container'>
    <form onSubmit={formik.handleSubmit}>
    <div className='row'>
        <div className='col-lg-6'>
          <label>User name</label>
          <input className='form-control' type={'text'} 
          value={formik.values.name}
            onChange={formik.handleChange} 
            name='name'
            />
            <span style={{color :"red"}}>{formik.errors.name}</span>
         
        </div>
     
      <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Position</label>
          <input className={`form-control ${formik.errors.Position ? `input-error` : ``}`} type={'text'} 
          value={formik.values.Position}
          onChange={formik.handleChange} 
            name='Position'

          />

        </div>
        </div>

        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Age</label>
          <input className='form-control' type={'text'} 
          value={formik.values.Age}
          onChange={formik.handleChange} 
            name='Age' />
          
        </div>
        </div></div>
        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Office</label>
          <input className='form-control' type={'text'}
            value={formik.values.Office}
            onChange={formik.handleChange}
            name='office'

          />


        </div></div>
        </div>
        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Start date</label>
          <input className='form-control' type={'text'} 
          value={formik.values.Startdate}
          onChange={formik.handleChange} 
          name='Start date'
     

          />
        <div className='col-lg-6'></div>
        </div>
        </div>
        
        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Company</label>
          <input className='form-control' type={'text'} value={formik.values.Company}
        onChange={formik.handleChange}
        name='Company'

          />
          

        </div>

</div>
</div>
<div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Salary</label>
          <input className='form-control' 
          type={'text'}
          value={formik.values.Salary}
          onChange={formik.handleChange}
          name='Salary'
l
          />
</div>
        </div>
</div>
<div className='col-lg-6'>
  <button className='btn-btn-sm btn-success ' disabled={!formik.isValid}>Submit
    
  </button>
</div>
</div></div></div>
</form>
</div>
</div>

  
  )
}

export default Edituser