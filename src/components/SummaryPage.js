import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SummaryPage = () => {
  const profile = useSelector((state) => state.profile);
  const config = useSelector((state) => state.config);
  const navigate = useNavigate();

  const handlePrevious = (event) => {
    event.preventDefault();
    navigate('/config')
  };

  const handleSummaryEdit=(e)=>{
    e.preventDefault();
    navigate('/')
  }
  const handleConfigEdit=(e)=>{
    e.preventDefault();
    navigate('/config')
  }
  return (
    <div>
      
      <div style={{padding: '20px'}}>
        <h2 style={{display: 'flex', justifyContent: 'space-between', textTransform: 'capitalize'}}>Summary Info<span onClick={handleSummaryEdit} style={{cursor: 'pointer', color: 'blueviolet'}}>edit</span></h2>
        <p>Name: {profile.name}</p>
        <p>Gender: {profile.gender}</p>
        <p>Department: {profile.department}</p>
      </div>
      
      <hr/>
      <div style={{ padding: '20px' }}>
        <h2 style={{display: 'flex', justifyContent: 'space-between', textTransform: 'capitalize'}}>Configuration Info <span onClick={handleConfigEdit} style={{cursor: 'pointer', color: 'blueviolet'}}>edit</span></h2>
        <p>Highest Level of Education: {config.education}</p>
        <p>Number of Years Experience: {config.experience}</p>
        <button type="submit" disabled={false} onClick={handlePrevious} >Previous</button>
      </div>
      
      
    </div>
  );
};

export default SummaryPage;