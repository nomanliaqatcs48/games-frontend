import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="facebook-domain-verification" content="9wmku1cbn7ngo1lni3r50i80qrrdlo" />

                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-55T8RGC')`,
                    }}
                />

                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-55T8RGC"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    }}
                />

                
                {/* <script
                    dangerouslySetInnerHTML={{
                        __html: `(function () {  function asyncLoad() { var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0]; s1.async = true; s1.src = "https://widget.invocom.io/widget.js"; s1.charset = "UTF-8"; s1.setAttribute("crossorigin", "*"); s1.onload = function () { injectWidget({ position: "right" }); }; s0.parentNode.insertBefore(s1, s0); }
          if (window.attachEvent) {
            window.attachEvent("onload", asyncLoad);
          } else {
            window.addEventListener("load", asyncLoad, false);
          } })();`,
                    }}
                /> */}
                {props.preBodyComponents}
                <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
                {props.postBodyComponents}
            </body>
        </html>
    );
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
};
