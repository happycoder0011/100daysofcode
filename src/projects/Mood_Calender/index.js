import React from 'react'

function Mood() {
    const currentYear = 2020;
    const weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const months = [
        'Jaunary',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const colors = ['#2d6b5f', '#72e3a6', '#dff4c7', '#edbf98', '#ea3d36'];
    const defaultColor = '#888';
    let activeColor = '';

    
    const getAllDays = year => {
        const firstDay = new Date(`Jaunary 1 ${year}`);
        
        const lastDay = new Date(`December 31 ${year}`);

        const days = [firstDay];

        let lastDayInArray = firstDay;

        while(lastDayInArray.getTime() !== lastDay.getTime())
        {
          /*  days.push(addDays(lastDayInArray,1));*/
            lastDayInArray = days[days.length - 1];
        }
        return days;
    }
    return (
        <div>
            mood here
            <h2>
                2020 Mood Calender
            </h2>
            <h4>Color of each day represents your mood of the day</h4>
            <p>Select Mood:</p>
            <div class="mood_container">
                <button class="mood mood_1" id = 'mood_1'>
                    <i class="far fa-laugh"></i>
                </button>
                <button class="mood mood_2" id = 'mood_2'>
                    <i class="far fa-smile"></i>
                </button>
                <button class="mood mood_3" id = 'mood_3'>
                    <i class="far fa-meh"></i>
                </button>
                <button class="mood mood_4" id = 'mood_4'>
                    <i class="far fa-frown"></i>
                </button>
                <button class="mood mood_5" id = 'mood_5'>
                    <i class="far fa-sad-tear"></i>
                </button>
            </div>
            <div>Then click the circles below in the calender</div>
            <button id="randomize" class='action_btn randomize'>
                <i class='fas fa-random'></i>
            </button>
            <button id='clear' class='action_btn_clear'>
                <i class="fas fa-sync"></i>
            </button>
            <div id='calender' class="calender"></div>
        </div>

    )
}

export default Mood
