import React, { Component } from 'react';
import api from './api';

class Responses extends Component {
    componentDidMount() {
         api.getResponses().then(responses => {
            for (var i = 0; i < responses.data.data.length; i++) {
                var time = responses.data.data[i].time;
                var tr = document.createElement('tr');
                
                var tdTime = document.createElement('td');
                var tdName = document.createElement('td');
                var tdEmail = document.createElement('td');
                var tdMessage = document.createElement('td');

                if (!time) {
                    time = "NA";
                }

                tdTime.appendChild(document.createTextNode(time));
                tdName.appendChild(document.createTextNode(responses.data.data[i].name));
                tdEmail.appendChild(document.createTextNode(responses.data.data[i].email));
                tdMessage.appendChild(document.createTextNode(responses.data.data[i].message));
                
                tr.appendChild(tdTime);
                tr.appendChild(tdName);
                tr.appendChild(tdEmail);
                tr.appendChild(tdMessage);

                document.getElementById('resTable').appendChild(tr);
            };
        });
    };

    render() {
        return (
            <table id="resTable">
                <tr id="tableHeader">
                    <th>Time</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                </tr>
            </table>
        );
    };
};

export default Responses;