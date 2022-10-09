import React from 'react';
import Header from '../Header/Header'
import 'survey-react/survey.css';

import * as Survey from 'survey-react'
import Json from '../survey/question'


const Mysurvey = (prop)=>{
    return (
        <div className='HeaderContainer'>
            
            
            <Survey.Survey
                showCompletedPage={false}
                onComplet={data=>prop.showCompletedPage(data.valuesHash)}
                json={Json}
            />
        </div>
    )
}
export default Mysurvey;