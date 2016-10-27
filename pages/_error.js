'use strict';

import React from 'react';
import Head from 'next/head';

const BASEURL = 'https://http.cat/';

export default class Error extends React.Component {
    static getInitialProps ({res,xhr}) {
        const statusCode = res ? res.statusCode : xhr.status
        return {statusCode}
    }

    render () {
        return (
            <div>
                <Head>
                    <title>Error {this.props.statusCode}</title>
                </Head>
                <img
                    src={`${BASEURL}/${this.props.statusCode}`}
                    alt="error kitten" />
            </div>
        );
    }
}
