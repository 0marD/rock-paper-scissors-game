import React from 'react';
import Head from "./components/Head";
import data from './copy/main.json';
import { Title } from "./elements/Title";
import { Score } from './elements/Score';

const App: React.FC = () => {
    return (
        <>
            <Head>
                <Title text={data.title} />
                <Score/>
            </Head>
        </>
    );
}

export { App };
