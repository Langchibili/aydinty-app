import Script from 'next/Script';

export default function FootMetaLoggedIn(){
      return (
        <>
        <Script data-cfasync="false" src="/jquery-3.6.0.slim.min.js"/> 
        <Script src="/app.bundle.min.js"/>
      </>);
}