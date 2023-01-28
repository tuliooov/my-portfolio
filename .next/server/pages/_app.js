"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./src/themes/default.ts
/* harmony default export */ const themes_default = ({
    // Temp fonts
    fonts: {
        title: "Open Sans, sans-serif",
        main: "Open Sans, sans-serif"
    },
    // Colors for layout
    colors: {
        primary1: "hsl(204,23.8%,95.9%)",
        background1: "#1c1c1c",
        accent1: "hsl(34.9,98.6%,72.9%)",
        button: "hsl(205.1,100%,36.1%)",
        background2: "hsl(232.7,27.3%,23.7%)",
        link: "#c74545"
    },
    // Breakpoints for responsive design
    breakpoints: {
        xs: "screen and (max-width: 450px)",
        sm: "screen and (max-width: 640px)",
        md: "screen and (max-width: 768px)",
        lg: "screen and (max-width: 1024px)",
        xl: "screen and (max-width: 1280px)",
        big: "screen and (max-width: 2000px)"
    }
});

;// CONCATENATED MODULE: external "styled-normalize"
const external_styled_normalize_namespaceObject = require("styled-normalize");
;// CONCATENATED MODULE: ./src/styles/globals.ts


const GlobalStyles = external_styled_components_.createGlobalStyle`
  ${external_styled_normalize_namespaceObject.normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props)=>props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props)=>props.theme.colors.background1};
    color: ${(props)=>props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props)=>props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;
/* harmony default export */ const globals = (GlobalStyles);

;// CONCATENATED MODULE: ./src/styles/theme.tsx




const Theme = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
        theme: themes_default,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(globals, {}),
            children
        ]
    });
/* harmony default export */ const theme = (Theme);

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/_app.tsx



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Vipul Jha - Android & Flutter Dev"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(theme, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8412));
module.exports = __webpack_exports__;

})();