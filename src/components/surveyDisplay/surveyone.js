import React,{useCallback,useState} from 'react';
import Mysurvey from '../surveyTypes/surveyTypeOne';
import Thanks from './Thanks'

const SurveyOne = ()=>{
    const [showPage,setShowPage] = useState(true)

    const onCompletePage = useCallback((data)=>{
        console.log(data)
        setShowPage(!showPage)
    },[showPage])

    
    return (
        <div className='App'>
            {
                showPage?
                <Mysurvey showCompletedPage = {data=>onCompletePage(data)} /> :
                <Thanks />
            }

        </div>
    )
}
export default SurveyOne;