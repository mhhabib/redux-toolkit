import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { updateConfig } from "../slices/ConfigSlice";

const ConfigPage=()=>{
    const navigate = useNavigate();
    const config = useSelector((state) => state.config);
    const profile = useSelector((state)=> state.profile);
    const dispatch = useDispatch();
    const [isValid, setIsValid]=useState(false);
    const [errors, setValidationErrors] = useState({});

    useEffect(()=>{
        if(!profile.name) navigate('/')
        setIsValid(validateForm(config)); 
    },[config, profile, navigate])

    const handlePrevious = (event) => {
        event.preventDefault();
        navigate('/')
    };
    
    const handleNext = (event) => {
        event.preventDefault();
        navigate('/summary')
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        dispatch(updateConfig({ field: name, value }));
        handleBlur(event);
    };
      
    const handleBlur = (event)=>{
        const {name, value} = event.target;
        const error={...errors}
        if(name==='experience'){
            if(!value) error.experience='User must select a experience level'
            else delete error.experience
        }
        if(name==='education'){
            if(!value) error.education='User must select a education level'
            else delete error.education
        }
        setValidationErrors(error)
    }
    const validateForm = (configData) => {     
        return configData.education && configData.experience;
    };
    
    return <>
        <div class="styled-form">
            <div class="mb-3">
                <label for="education" class="block text-sm font-medium text-gray-700">Education:</label>
                <select id="education" name="education" value={config.education} onChange={handleChange} onBlur={handleBlur} class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option value="">Select Degree</option>
                    <option value="bsc">BSc</option>
                    <option value="msc">MSc</option>
                    <option value="phd">Phd</option>
                    <option value="postdoc">Post-Doc</option>
                </select>
                {errors.education && <p className='w-full text-sm text-red-500'>{errors.education}</p>}
            </div>
            <div class="mb-3">
                <label for="experience" class="block text-sm font-medium text-gray-700">Experience:</label>
                <select id="experience" name="experience" value={config.experience} onChange={handleChange} onBlur={handleBlur} class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option value="">Select Years</option>
                    <option value="fresher">0-2 Years</option>
                    <option value="mid">2-5 Years</option>
                    <option value="senior">5-10 Years</option>
                    <option value="manager">10+ Years</option>
                </select>
                {errors.experience && <p className='w-full text-sm text-red-500'>{errors.experience}</p>}
            </div>
            <div class="button-container">
                <button type="submit" disabled={false} onClick={handlePrevious} class="inline-flex items-center px-4 py-2 bg-blue-700 text-white font-bold rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 disabled:opacity-50">Previous</button>
                <button type="submit" disabled={!isValid} onClick={handleNext} class="inline-flex items-center px-4 py-2 bg-green-700 text-white font-bold rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 disabled:opacity-50">Next</button>
            </div>
        </div>
    </>
}

export default ConfigPage;