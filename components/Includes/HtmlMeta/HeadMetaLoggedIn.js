import Head from 'next/head';

export default function HeadMetaLoggedIn(props){
    return (<Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            {/* <!-- bootstrap 4.3.1 --> */}
            <link rel="stylesheet" href="/css/vendor/bootstrap.min.css" />
            {/* <!-- styles --> */}
            <link rel="stylesheet" href="/css/styles.min.css" />
            {/* <!-- simplebar styles --> */}
            <link rel="stylesheet" href="/css/vendor/simplebar.css" />
            {/* <!-- tiny-slider styles --> */}
            <link rel="stylesheet" href="/css/vendor/tiny-slider.css" />
            {/* <!-- favicon --> */}
            <link rel="icon" href="/img/favicon.ico" />
            <title>Aydinty | Newsfeed</title>
        </Head>);
}