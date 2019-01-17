import React from 'react';
import fetch from 'isomorphic-fetch';

export default class extends React.Component {
    static async getInitialProps({res, req, query}) {

        // fetch data on the server
        const mockData = await fetch('http://www.mocky.io/v2/5c4046de350000b02dec3c33');

        // will log on server
        console.log('This is mockData ====> : ', mockData);

        const data = await mockData.json();

        return {
            data
        };
    }

    render() {
        const {data} = this.props;
        console.log('The data we use to render on server side', data);
        return (
            <div>
                Hello data fetch in next.
                <div>
                    <h2>data sample</h2>
                    <ul>
                        {Object.keys(data[0]).map((prop) => <li><b>{`${prop} :`}</b>{`${data[0][prop]}`}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}
