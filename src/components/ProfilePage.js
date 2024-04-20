import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../slices/ProfileSlice';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);
    const [isValid, setIsValid]=useState(false);
    const [errors, setValidationErrors] = useState({})
    const navigate = useNavigate();

    useEffect(()=>{
      setIsValid(checkError(profile));
    },[profile])

    const checkError=(profileData)=>{
      return profileData.name.length>=3 && profileData.name.length<=50 && profileData.gender && profileData.department.length>=3 && profileData.department.length<=50;
    }
    
    const handleChange = (event) => {
      const { name, value } = event.target;
      dispatch(updateProfile({ field: name, value }));
      handleBlur(event);
    };
    
    const handleBlur = (event)=>{
      const {name, value} = event.target;
      const error={...errors}
      if(name==='name'){
        if(value.length<3 || value.length>50) error.name= 'Name length should be 3 <= length <= 50'
        else delete error.name
      }
      if(name==='gender'){
        if(!value) error.gender='User must select a gender'
        else delete error.gender
      }
      if(name==='department'){
        if(value.length<3 || value.length>50) error.department= 'Department length should be 3 <= length <= 50'
        else delete error.department
      }
      setValidationErrors(error)
    }
      
    const handleNext = (event) => {
      event.preventDefault();
      navigate('/config')
    };
  
    return (
      <div class="styled-form">
          <div class="mb-3">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" value={profile.name} onChange={handleChange} onBlur={handleBlur} class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
            {errors.name && <p className='w-full text-sm text-red-500'>{errors.name}</p>}
            </div>
          <div class="mb-3">
            <label for="gender" class="block text-sm font-medium text-gray-700">Gender</label>
            <select id="gender" name="gender" value={profile.gender} onChange={handleChange} onBlur={handleBlur} class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className='w-full text-sm text-red-500'>{errors.gender}</p>}
          </div>
          <div class="mb-3">
            <label for="department" class="block text-sm font-medium text-gray-700">Department</label>
            <input type="text" id="department" name="department" value={profile.department} onChange={handleChange} onBlur={handleBlur} class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
            {errors.department && <p className='w-full text-sm text-red-500'>{errors.department}</p>}
          </div>
          <button type="submit" disabled={!isValid} onClick={handleNext} class="inline-flex items-center px-4 py-2 bg-green-700 text-white font-bold rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 disabled:opacity-50">Next</button>
      </div>
    );
  };
  
  export default ProfilePage;