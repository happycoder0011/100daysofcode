import TimelineData from './Data';
import TimelineItem from './TimelineItem';
import React from 'react';
import './Timeline.css';

function Timeline() {

return(
    <>
    <h1>Timeline</h1>
    <div className='timeline-container'>
        {TimelineData.map((data,idx)=> (
            <TimelineItem data = {data} key={idx}/>
        ))}
    </div>
    </>);

    }



export default Timeline;