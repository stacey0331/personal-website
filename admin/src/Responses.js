import React, { Component } from 'react';
import api from './api';

class Responses extends Component {
    componentDidMount() {
         api.getResponses().then(responses => {
            for (var i = 0; i < responses.data.data.length; i++) {
                var tr = document.createElement('tr');
                
                var tdName = document.createElement('td');
                var tdEmail = document.createElement('td');
                var tdMessage = document.createElement('td');

                tdName.appendChild(document.createTextNode(responses.data.data[i].name));
                tdEmail.appendChild(document.createTextNode(responses.data.data[i].email));
                tdMessage.appendChild(document.createTextNode(responses.data.data[i].message));

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
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                </tr>
            </table>
        );
    };
};

export default Responses;