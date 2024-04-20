import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SummaryPage = () => {
  const profile = useSelector((state) => state.profile);
  const config = useSelector((state) => state.config);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!profile.name) navigate('/');
    if(!config.education) navigate('/config')
  },[profile, config, navigate])

  const handleProfileEdit=(e)=>{
    e.preventDefault();
    navigate('/')
  }
  const handleConfigEdit=(e)=>{
    e.preventDefault();
    navigate('/config')
  }
  return (
    <div class="styled-form">
      <div style={{padding: '20px', marginBottom: '10px'}}>
        <h2 class="flex items-center justify-between text-xl font-medium text-green-600">
          Profile Info
          <button type="button" class="focus:outline-none text-blue-500 hover:text-blue-700" onClick={handleProfileEdit}>
            <svg class="w-6 h-6 text-green-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
            </svg>
          </button>
        </h2>
        <hr/>
        <p>Name: <span className='capitalize font-semibold text-sky-500'>{profile.name}</span></p>
        <p>Gender: <span className='capitalize font-semibold text-sky-500'>{profile.gender}</span></p>
        <p>Department: <span className='capitalize font-semibold text-sky-500'>{profile.department}</span></p>
      </div>
      
      <div style={{padding: '20px'}}>
        <h2 class="flex items-center justify-between text-xl font-medium text-teal-600">
          Configuration Info
          <button type="button" class="focus:outline-none text-blue-500 hover:text-blue-700" onClick={handleConfigEdit}>
            <svg class="w-6 h-6 text-teal-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
            </svg>
          </button>
        </h2>
        <hr/>
        <p>Education: <span className='capitalize font-semibold text-sky-500'>{config.education}</span></p>
        <p>Experience: <span className='capitalize font-semibold text-sky-500'>{config.experience}</span></p>
      </div>
    </div>
  );
};

export default SummaryPage;