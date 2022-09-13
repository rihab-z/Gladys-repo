import React from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react'
import Json from '../survey/question'


const Mysurvey = (prop)=>{
    return (
        <Survey.Survey
        showCompletedPage={false}
        onComplet={data=>prop.showCompletedPage(data.valuesHash)}
        json={Json}
        />
    )
}
export default Mysurvey;