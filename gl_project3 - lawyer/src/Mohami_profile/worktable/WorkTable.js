import React, { useState, useEffect } from 'react';
import './workTable.css';

function WorkTable() {
    useEffect(() => {
        const handleDropdownClick = (event) => {
            const dropdown = event.currentTarget;
            const select = dropdown.querySelector('.select');
            const caret = dropdown.querySelector('.caret');
            const menu = dropdown.querySelector('.menuu');
            const options = dropdown.querySelectorAll('.menuu li');
            const selected = dropdown.querySelector('.selected');
            
            select.classList.toggle('select-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open');
        };

        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('click', handleDropdownClick);
        });

        return () => {
            dropdowns.forEach(dropdown => {
                dropdown.removeEventListener('click', handleDropdownClick);
            });
        };
    }, []);

    const handleCheckButtonClick = () => {
        const selectedDay = document.querySelector('.dropdown:nth-child(1) .selected').innerText.toLowerCase();
        const selectedTime = document.querySelector('.dropdown:nth-child(2) .selected').innerText.toLowerCase();
        const dayIndex = getDayIndex(selectedDay);
        const timeIndex = getTimeIndex(selectedTime);
        if (dayIndex !== -1 && timeIndex !== -1) {
            const table = document.querySelector('.schedule table');
            const cell = table.rows[timeIndex].cells[dayIndex];
            if (!cell.classList.contains('checked')) {
                cell.classList.add('checked');
                cell.innerHTML += '<span class="check-mark">✓</span>';
            }
        }
    };

    const handleDismissButtonClick = () => {
        const selectedDay = document.querySelector('.dropdown:nth-child(1) .selected').innerText.toLowerCase();
        const selectedTime = document.querySelector('.dropdown:nth-child(2) .selected').innerText.toLowerCase();
        const dayIndex = getDayIndex(selectedDay);
        const timeIndex = getTimeIndex(selectedTime);
        
        if (dayIndex !== -1 && timeIndex !== -1) {
            const table = document.querySelector('.schedule table');
            const cell = table.rows[timeIndex].cells[dayIndex];
            
            cell.classList.remove('checked');
            const checkMark = cell.querySelector('.check-mark');
            if (checkMark) {
                checkMark.remove();
            }
        }
    };

    function getDayIndex(day) {
        switch (day) {
            case 'sunday':
                return 7;
            case 'monday':
                return 1;
            case 'tuesday':
                return 2;
            case 'wednesday':
                return 3;
            case 'thursday':
                return 4;
            case 'friday':
                return 5;
            case 'saturday':
                return 6;
            default:
                return -1;
        }
    }

    function getTimeIndex(time) {
        switch (time) {
            case '8:00-10:00':
                return 1;
            case '10:00-12:00':
                return 2;
            case '12:00-14:00':
                return 3;
            case '14:00-16:00':
                return 4;
            case '16:00-18:00':
                return 5;
            case '18:00-20:00':
                return 6;
            default:
                return -1;
        }
    }

    return (
        <div className="containerrr">
            <div className="cony">
            <div className="title">
                <div className="bare"></div>
                <div>
                    <h3>schedule of work</h3>
                </div>
            </div>
            </div>
              
            <div className="conatain">
                <h1 className="h1">Your Availability :</h1>
                <div className="inputs">
                    <div className="dropdown">
                        <div className="select">
                            <span className="selected">Sunday</span>
                            <div className="caret"></div>
                        </div>
                        <ul className="menuu">
                            <li className="active">Sunday</li>
                            <li>Monday</li>
                            <li>Tuesday</li>
                            <li>Wednesday</li>
                            <li>Thursday</li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <div className="select">
                            <span className="selected">8:00-10:00</span>
                            <div className="caret"></div>
                        </div>
                        <ul className="menuu">
                            <li className="active">8:00-10:00</li>
                            <li>10:00-12:00</li>
                            <li>12:00-14:00</li>
                            <li>14:00-16:00</li>
                            <li>16:00-18:00</li>
                            <li>18:00-20:00</li>
                        </ul>
                    </div>
                </div>
                <h1></h1>
                <button id="checkButton" onClick={handleCheckButtonClick} className="btn1">
                    Validate
                </button>
                <button id="dismissButton" onClick={handleDismissButtonClick} className="btn2">
                    Dismiss
                </button>
            </div>
            <div className="schedule">
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ color: 'black' }}>Time</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                            <th>Sunday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>8:00-10:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10:00-12:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>12:00-14:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>14:00-16:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>16:00-18:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>18:00-20:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default WorkTable;
