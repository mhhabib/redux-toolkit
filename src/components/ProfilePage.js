import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setGender, setDepartment } from '../slices/ProfileSlice';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);
    const [isValid, setIsValid]=useState(false);
    const navigate = useNavigate();
    

    useEffect(()=>{
      setIsValid(validateForm(profile)); 
      console.log("Profile page info: ", profile)
    },[profile])

    const handleChange = (event) => {
      const { name, value } = event.target;
      if(name==='name') dispatch(setName(value))
      if(name==='gender') dispatch(setGender(value))
      if(name==='department') dispatch(setDepartment(value))
      setIsValid(validateForm(profile)); 
    };
    
      const validateForm = (profileData) => {     
        return profileData.name.length>=3 && profileData.name.length<=50 && profileData.gender && profileData.department.length>=3 && profileData.department.length<=50;
      };

      
    const handleNext = (event) => {
      event.preventDefault();
      navigate('/config')
    };
  
    return (
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={profile.name}
          onChange={handleChange}
        />
        <br />
  
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={profile.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
  
        <label htmlFor="department">Department:</label>
        <input
          type="text"
          id="department"
          name="department"
          value={profile.department}
          onChange={handleChange}
        />
        <br />
  
        <button type="submit" disabled={!isValid} onClick={handleNext} >Next</button>
      </form>
    );
  };
  
  export default ProfilePage;