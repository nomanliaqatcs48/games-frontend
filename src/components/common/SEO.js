import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({
  description,
  lang,
  meta,
  url = "",
  title,
}) => {
 
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
    
    >
      
      {/* {(function () {
        function asyncLoad() {
          var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
          s1.async = true;
          s1.src = "https://widget.invocom.io/widget.js";
          s1.charset = "UTF-8";
          s1.setAttribute("crossorigin", "*");
          s1.onload = function () {
            injectWidget({
              APP_ID: "981be528-4cf4-488a-bbbe-fef208d5621f",
              position: "right",
              APP_URL: "https://invocom.io",
              API_BASE_URL: "https://api.invocom.io/api/v1",
            });
          };
          s0.parentNode.insertBefore(s1, s0);
        }
        if (window.attachEvent) {
          window.attachEvent("onload", asyncLoad);
        } else {
          window.addEventListener("load", asyncLoad, false);
        }
      })()} */}


   <script type="text/javascript" async="true" crossorigin="*" src="https://widget.invocom.io/widget.js" charset="UTF-8" onload="injectWidget({ APP_ID: '981be528-4cf4-488a-bbbe-fef208d5621f', position: 'right', APP_URL: 'https://invocom.io', API_BASE_URL: 'https://api.invocom.io/api/v1', })"></script>


      {/* {" "} */}
      {/* <script
        type="text/javascript"
        src="https://widget.invocom.io/widget.js"
        charSet="UTF-8"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            injectWidget({
              APP_ID: "981be528-4cf4-488a-bbbe-fef208d5621f",
              position: "right",
              APP_URL: "https://invocom.io",
              API_BASE_URL: "https://api.invocom.io/api/v1",
            });
           `,
        }}
      /> */}
{/* ___________ */}
{/* <script
          dangerouslySetInnerHTML={{
            _html: `(function () {
                function asyncLoad() {
                  var s1 = document.createElement("script"),
                    s0 = document.getElementsByTagName("script")[0];
                  s1.async = true;
                  s1.src = "https://widget.invocom.io/widget.js";
                  s1.charset = "UTF-8";
                  s1.setAttribute("crossorigin", "*");
                  s1.onload = "
                    injectWidget({
                      APP_ID: '408d8ae7-6d48-48af-b341-de0ff286d547',
                      position: 'right',
                      APP_URL: 'https://red-rock.quickxi-foodapp.invo.zone',
                      API_BASE_URL: 'https://api.invocom.io/api/v1',
                    });
                  "
                  s0.parentNode.insertBefore(s1, s0);
                }
                if (window.attachEvent) {
                  window.attachEvent("onload", asyncLoad);
                } else {
                  window.addEventListener("load", asyncLoad, false);
                }
              })();`,
          }}
        ></script> */}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
