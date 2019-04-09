import React from 'react';
import ReactDOM from 'react-dom';
import {init as d2Init, config, getManifest, getUserSettings} from 'd2';

// temporary workaround until new ui headerbar is ready
import 'material-design-icons/iconfont/material-icons.css';
import './reset.css';

import App from './App';
import './index.css';


const init = async () => {
    const manifest = await getManifest(`${process.env.PUBLIC_URL}/manifest.webapp`);
    // log app info
    console.info(`DHIS2 Smart Display app, v${manifest.version}, ${manifest.manifest_generated_at}`);

    const isProd = process.env.NODE_ENV === 'production';

    if (!isProd && (!process.env.REACT_APP_DHIS2_BASE_URL || !process.env.REACT_APP_DHIS2_AUTHORIZATION)) {
        throw new Error('Missing env variables REACT_APP_DHIS2_BASE_URL and REACT_APP_DHIS2_AUTHORIZATION');
    }
    // api config
    const baseUrl = isProd
        ? manifest.activities.dhis.href
        : process.env.REACT_APP_DHIS2_BASE_URL;
    const authorization = process.env.REACT_APP_DHIS2_AUTHORIZATION;

    console.log(manifest);

    config.baseUrl = `${baseUrl}`;
    config.headers = isProd ? null : {Authorization: authorization};

    console.log(config);

    getUserSettings()
        .then(() => d2Init(config))
        .then(initializedD2 => {
            ReactDOM.render(
                <App baseUrl={baseUrl} d2={initializedD2}/>,
                document.getElementById('root')
            );
        });
};

init();