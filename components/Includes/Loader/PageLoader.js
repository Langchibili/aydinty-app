import HeadMetaLoggedIn from '../HtmlMeta/HeadMetaLoggedIn'
import FootMetaLoggedIn from '../HtmlMeta/FootMetaLoggedIn'

export default function PageLoader() { 
    return (
               <> 
               <HeadMetaLoggedIn />
              <div className="page-loader">
                   
                    {/* PAGE LOADER INFO */}
                    <div className="page-loader-info">
                        {/* PAGE LOADER INFO TITLE */}
                        <p className="page-loader-info-title">Aydinty</p>
                        {/* /PAGE LOADER INFO TITLE */}
                        {/* PAGE LOADER INFO TEXT */}
                        <p className="page-loader-info-text">Loading...</p>
                        {/* /PAGE LOADER INFO TEXT */}
                    </div>
                    {/* /PAGE LOADER INFO */}
                    {/* PAGE LOADER INDICATOR */}
                    <div className="page-loader-indicator loader-bars">
                        <div className="loader-bar" />
                        <div className="loader-bar" />
                        <div className="loader-bar" />
                        <div className="loader-bar" />
                        <div className="loader-bar" />
                        <div className="loader-bar" />
                        <div className="loader-bar" />
                        <div className="loader-bar" />
                    </div>
                    {/* /PAGE LOADER INDICATOR */}
                </div>
                <FootMetaLoggedIn />
                </>
     )
     
}