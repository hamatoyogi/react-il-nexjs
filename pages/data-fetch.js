import React from 'react';
import fetch from 'isomorphic-fetch';

export default class extends React.Component {
    static async getInitialProps({res, req, query}) {

        let data = {};

        try {
            // fetch data on the server
            const mockData = await fetch('https://swapi.co/api/people/1/');

            // will log on server
            console.log('This is mockData ====> : ', mockData);

            data = await mockData.json();
        }
        catch (e) {
            console.log('this is e ====> : ', e);
        }


        return {
            data
        };
    }

    render() {
        const {data} = this.props;
        if (!data) {
            return null
        }
        console.log('The data we use to render on server side', data);
        return (
            <div>
                Hello data fetch in next.
                <div>
                    <h2>data sample</h2>
                    <ul>
                        { Object.keys(data).map((prop) => <li><b>{`${prop} :`}</b>{`${data[prop]}`}</li>) }
                    </ul>
                </div>
            </div>
        )
    }
}
