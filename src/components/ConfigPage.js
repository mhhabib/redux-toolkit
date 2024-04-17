import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setEducation, setExperience } from "../slices/ConfigSlice";

const ConfigPage=()=>{
    const navigate = useNavigate();
    const config = useSelector((state) => state.config);
    const dispatch = useDispatch();
    const [isValid, setIsValid]=useState(false);

    useEffect(()=>{
        setIsValid(validateForm(config)); 
        console.log("Config page info: ", config)
    },[config])

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
        if(name==='education') dispatch(setEducation(value))
        if(name==='experience') dispatch(setExperience(value))
        setIsValid(validateForm(config));
        
        
    };
    
    const validateForm = (configData) => {     
        return configData.education && configData.experience;
    };
    
    return <>
        <div>
            <form>
                
                <label htmlFor="education">Highest Level of Education:</label>
                <select id="education" name="education" value={config.education} onChange={handleChange}>
                    <option value="">Select Degree</option>
                    <option value="bsc">BSc</option>
                    <option value="msc">MSc</option>
                    <option value="phd">Phd</option>
                    <option value="postdoc">Post-Doc</option>
                </select>
                <br />

                <label htmlFor="experience">Years of Experience:</label>
                <select id="experience" name="experience" value={config.experience} onChange={handleChange}>
                    <option value="">Select Years</option>
                    <option value="fresher">0-2 Years</option>
                    <option value="mid">2-5 Years</option>
                    <option value="senior">5-10 Years</option>
                    <option value="manager">10+ Years</option>
                </select>
                <br />
            </form>
        </div>
        <div>
            <button type="submit" disabled={false} onClick={handlePrevious} >Previous</button>
            <button type="submit" disabled={!isValid} onClick={handleNext} >Next</button>
        </div>
    </>
}

export default ConfigPage;