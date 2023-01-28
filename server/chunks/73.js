"use strict";
exports.id = 73;
exports.ids = [73];
exports.modules = {

/***/ 8073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/styles/GlobalComponents/index.tsx

const Section = (external_styled_components_default()).section`
  display: ${(props)=>props.grid ? "grid" : "flex"};
  flex-direction: ${(props)=>props.row ? "row" : "column"};
  padding: ${(props)=>props.nopadding ? "0" : "32px 48px 0"};
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 3fr 1fr;

  @media ${(props)=>props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    padding: ${(props)=>props.nopadding ? "0" : "16px 16px 0"};

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;
const SectionTitle = (external_styled_components_default()).h2`
  font-weight: 800;
  font-size: ${(props)=>props.main ? "65px" : "56px"};
  line-height: ${(props)=>props.main ? "72px" : "67px"};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props)=>props.main ? "58px 0 16px" : "0"};

  @media ${(props)=>props.theme.breakpoints.md} {
    font-size: ${(props)=>props.main ? "56px" : "48px"};
    line-height: ${(props)=>props.main ? "56px" : "48px"};
    margin-bottom: 12px;
    padding: ${(props)=>props.main ? "40px 0 12px" : "0"};
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props)=>props.main ? "28px" : "32px"};
    line-height: ${(props)=>props.main ? "32px" : "40px"};
    margin-bottom: 8px;
    padding: ${(props)=>props.main ? "16px 0 8px" : "0"};
    max-width: 100%;
  }
`;
const StrongTag = (external_styled_components_default()).strong`
  font-weight: 700;
`;
const SectionText = (external_styled_components_default()).p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props)=>props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;
const SectionDivider = (external_styled_components_default()).div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props)=>props.colorAlt ? "linear-gradient(270deg, #F46737 0%, #c74545 100%)" : "linear-gradient(270deg, #363636 0%, #c74545 100%)"};

  margin: ${(props)=>props.divider ? "4rem 0" : ""};

  @media ${(props)=>props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`;
const SecondaryBtn = (external_styled_components_default()).button`
  color: #fff;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #1c1c1c;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props)=>props.theme.breakpoints.md} {
    margin-top: 24px;
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`;
const ButtonBack = (external_styled_components_default()).div`
  width: ${({ alt  })=>alt ? "150px" : "262px"};
  height: ${({ alt  })=>alt ? "52px" : "64px"};
  border-radius: 50px;
  font-size: ${({ alt  })=>alt ? "20px" : "24px"};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt , form  })=>alt || form ? "0" : "0 0 80px"};
  color: #fff;
  background: ${({ alt  })=>alt ? "linear-gradient(270deg, #ff622e 0%, #c73131 100%)" : "linear-gradient(270deg, #282828 0%, #c73131 100%)"};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled  })=>disabled ? ".5" : "1"};

  @media ${(props)=>props.theme.breakpoints.md} {
    width: ${({ alt  })=>alt ? "150px" : "184px"};
    height: ${({ alt  })=>alt ? "52px" : "48px"};
    font-size: ${({ alt  })=>alt ? "20px" : "16px"};
    margin-bottom: ${({ alt  })=>alt ? "0" : "64px"};
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({ alt  })=>alt ? "0" : "32px"};
  }
`;
const ButtonFront = (external_styled_components_default()).button`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ alt  })=>alt ? "linear-gradient(270deg, #F46737 0%, #c74545 100%)" : "linear-gradient(270deg, #363636 0%, #c74545 100%)"};
  opacity: ${({ disabled  })=>disabled ? ".5" : "1"};
  transition: 0.4s ease;
  font-size: ${({ alt  })=>alt ? "20px" : "24px"};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled  })=>disabled ? "inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)" : "none"};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled {
    background: linear-gradient(270deg, #282828 0%, #c73131 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props)=>props.theme.breakpoints.md} {
    font-size: ${({ alt  })=>alt ? "20px" : "16px"};
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;
const LinkContainer = (external_styled_components_default()).div`
  margin-left: ${({ large  })=>large ? "24px" : "16px"};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #272727;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props)=>props.theme.breakpoints.md} {
    margin-left: ${({ large  })=>large ? "16px" : "8px"};
  }
  @media ${(props)=>props.theme.breakpoints.sm} {
    margin-left: ${({ large  })=>large ? "0" : "8px"};
  }
`;
const LinkIconImg = (external_styled_components_default()).div`
  display: flex;
  height: ${({ large  })=>large ? "32px" : "24px"};

  @media ${(props)=>props.theme.breakpoints.md} {
    height: ${({ nav  })=>nav ? "16px" : "24px"};
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    height: ${({ large  })=>large ? "32px" : "16px"};
  }
`;
const Link = (external_styled_components_default()).a`
  color: ${(props)=>props.theme.colors.link};
`;

;// CONCATENATED MODULE: ./src/components/Acomplishments/AcomplishmentsStyles.ts

const Boxes = (external_styled_components_default()).div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${(props)=>props.theme.breakpoints.md} {
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`;
const Box = (external_styled_components_default()).div`
  background: #272727;
  border-radius: 12px;
  height: 144px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  svg {
    margin-bottom: 1rem;
    path {
      stroke: #ffc500;
    }
  }

  transition: transform 0.2s;
  transition: opacity 0.1s;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  @media ${(props)=>props.theme.breakpoints.lg} {
    height: 210px;
  }

  @media ${(props)=>props.theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    height: 110px;
    padding: 12px;

    &:nth-child(2n) {
      grid-row: 2;
    }
  }
`;
const BoxText = (external_styled_components_default()).p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props)=>props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 20px;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 14px;
  }
`;
const Join = (external_styled_components_default()).div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${(props)=>props.theme.breakpoints.md} {
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`;
const JoinText = (external_styled_components_default()).h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props)=>props.theme.breakpoints.md} {
    line-height: 32px;
    font-size: 20px;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 16px;
  }
`;
const IconContainer = (external_styled_components_default()).div`
  display: flex;

  @media ${(props)=>props.theme.breakpoints.sm} {
    width: 160px;
    justify-content: space-between;
  }
`;

// EXTERNAL MODULE: external "react-icons/gr"
var gr_ = __webpack_require__(8547);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Acomplishments/Acomplishments.tsx






const data = [
    {
        text: "Complete the PRONATEC course.",
        Component: gr_.GrCertificate,
        href: "https://www.google.com/search?rlz=1C5GCEM_enBR1025BR1027&sxsrf=AJOqlzUg4aEbYkgLy0NxJBOEwIXlD61kGA:1674879300118&q=escola+santo+tom%C3%A1s+de+aquino+divinopolis&spell=1&sa=X&ved=2ahUKEwj9mebNs-n8AhXHOrkGHZkpAVIQBSgAegQICRAB&biw=1440&bih=694&dpr=2"
    },
    {
        text: "Working at Banco Inter",
        Component: gr_.GrWorkshop,
        href: "https://www.bancointer.com.br/"
    },
    {
        text: "Formed Specialist in ReactJS",
        Component: gr_.GrCertificate,
        href: "https://www.rocketseat.com.br/"
    },
    {
        text: "Enrolled in Calgary's Bayswater",
        Component: gr_.GrMap,
        href: "https://www.bayswater.ac/destination/calgary"
    }
];
const Acomplishments = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle, {
                children: "Personal Achievements"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Boxes, {
                children: data.map((Card, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: Card.href,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("picture", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card.Component, {
                                        size: "2rem"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(BoxText, {
                                    children: Card.text
                                })
                            ]
                        })
                    }, index))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SectionDivider, {})
        ]
    });
/* harmony default export */ const Acomplishments_Acomplishments = (Acomplishments);

;// CONCATENATED MODULE: ./src/components/BackgrooundAnimation/BackgroundAnimation.tsx


const BackgroundAnimation = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            className: "BgAnimation__svg",
            viewBox: "0 0 602 602",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                    opacity: "0.15",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",
                            stroke: "url(#paint0_radial)",
                            id: "path_0"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",
                            stroke: "url(#paint1_radial)",
                            id: "path_1"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",
                            stroke: "url(#paint2_radial)",
                            id: "path_2"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                    cx: "295.027",
                    cy: "193.118",
                    transform: "translate(-295.027 -193.118)",
                    rx: "1.07306",
                    ry: "1.07433",
                    fill: "#945DD6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("animateMotion", {
                        dur: "10s",
                        repeatCount: "indefinite",
                        rotate: "auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("mpath", {
                            xlinkHref: "#path_2"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M294.685 193.474L268.932 219.258",
                    transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
                    stroke: "url(#paint3_linear)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("animateMotion", {
                        dur: "10s",
                        repeatCount: "indefinite",
                        rotate: "auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("mpath", {
                            xlinkHref: "#path_2"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                    cx: "295.027",
                    cy: "193.118",
                    transform: "translate(-295.027 -193.118)",
                    rx: "1.07306",
                    ry: "1.07433",
                    fill: "#46737",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("animateMotion", {
                        dur: "5s",
                        begin: "1",
                        repeatCount: "indefinite",
                        rotate: "auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("mpath", {
                            xlinkHref: "#path_2"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M294.685 193.474L268.932 219.258",
                    transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
                    stroke: "url(#paint7_linear)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("animateMotion", {
                        dur: "5s",
                        begin: "1",
                        repeatCount: "indefinite",
                        rotate: "auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("mpath", {
                            xlinkHref: "#path_2"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                    cx: "476.525",
                    cy: "363.313",
                    rx: "1.07433",
                    ry: "1.07306",
                    transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
                    fill: "#945DD6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("animateMotion", {
                        dur: "10s",
                        repeatCount: "indefinite",
                        rotate: "auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("mpath", {
                            xlinkHref: "#path_0"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M476.171 362.952L450.417 337.168",
                    transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
                    stroke: "url(#paint4_linear)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("animateMotion", {
                        dur: "10s",
                        repeatCount: "indefinite",
                        rotate: "auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("mpath", {
                            xlinkHref: "#path_0"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                    cx: "382.164",
                    cy: "155.029",
                    rx: "1.07433",
                    ry: "1.07306",
                    transform: "translate(-382.164 -155.029) rotate(90 382.164 155.029)",
                    fill: "#F46737",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("animateMotion", {
                        dur: "10s",
                        begin: "1",
                        repeatCount: "indefinite",
                        rotate: "auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("mpath", {
                            xlinkHref: "#path_0"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M381.81 154.669L356.057 128.885",
                    transform: "translate(-381.81 -154.669) rotate(-45 381.81 154.669)",
                    stroke: "url(#paint5_linear)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("animateMotion", {
                        dur: "10s",
                        begin: "1",
                        repeatCount: "indefinite",
                        rotate: "auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("mpath", {
                            xlinkHref: "#path_0"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                    cx: "333.324",
                    cy: "382.691",
                    rx: "1.07306",
                    ry: "1.07433",
                    transform: "translate(-333.324 -382.691) rotate(-180 333.324 382.691)",
                    fill: "#F46737",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("animateMotion", {
                        dur: "5s",
                        begin: "0",
                        repeatCount: "indefinite",
                        rotate: "auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("mpath", {
                            xlinkHref: "#path_1"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M333.667 382.335L359.42 356.551",
                    transform: "scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",
                    stroke: "url(#paint6_linear)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("animateMotion", {
                        dur: "5s",
                        begin: "0",
                        repeatCount: "indefinite",
                        rotate: "auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("mpath", {
                            xlinkHref: "#path_1"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                    cx: "165.524",
                    cy: "93.9596",
                    rx: "1.07306",
                    ry: "1.07433",
                    transform: "translate(-165.524 -93.9596)",
                    fill: "#F46737",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("animateMotion", {
                        dur: "10s",
                        begin: "3",
                        repeatCount: "indefinite",
                        rotate: "auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("mpath", {
                            xlinkHref: "#path_0"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M165.182 94.3159L139.429 120.1",
                    transform: "translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",
                    stroke: "url(#paint7_linear)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("animateMotion", {
                        dur: "10s",
                        begin: "3",
                        repeatCount: "indefinite",
                        rotate: "auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("mpath", {
                            xlinkHref: "#path_0"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                    cx: "476.525",
                    cy: "363.313",
                    rx: "1.07433",
                    ry: "1.07306",
                    transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
                    fill: "#13ADC7",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("animateMotion", {
                        dur: "12s",
                        begin: "4",
                        repeatCount: "indefinite",
                        rotate: "auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("mpath", {
                            xlinkHref: "#path_0"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M476.171 362.952L450.417 337.168",
                    transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
                    stroke: "url(#paint11_linear)",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("animateMotion", {
                        dur: "12s",
                        begin: "4",
                        repeatCount: "indefinite",
                        rotate: "auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("mpath", {
                            xlinkHref: "#path_0"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("radialGradient", {
                            id: "paint0_radial",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform: "translate(301 301) rotate(90) scale(300)",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    offset: "0.333333",
                                    stopColor: "#FBFBFB"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    offset: "1",
                                    stopColor: "white",
                                    stopOpacity: "0"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("radialGradient", {
                            id: "paint1_radial",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform: "translate(301 301) rotate(90) scale(300)",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    offset: "0.333333",
                                    stopColor: "#FBFBFB"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    offset: "1",
                                    stopColor: "white",
                                    stopOpacity: "0"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("radialGradient", {
                            id: "paint2_radial",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform: "translate(301 301) rotate(90) scale(300)",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    offset: "0.333333",
                                    stopColor: "#FBFBFB"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    offset: "1",
                                    stopColor: "white",
                                    stopOpacity: "0"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                            id: "paint3_linear",
                            x1: "295.043",
                            y1: "193.116",
                            x2: "269.975",
                            y2: "218.154",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    stopColor: "#945DD6"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    offset: "1",
                                    stopColor: "#945DD6",
                                    stopOpacity: "0"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                            id: "paint4_linear",
                            x1: "476.529",
                            y1: "363.31",
                            x2: "451.461",
                            y2: "338.272",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    stopColor: "#945DD6"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    offset: "1",
                                    stopColor: "#945DD6",
                                    stopOpacity: "0"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                            id: "paint5_linear",
                            x1: "382.168",
                            y1: "155.027",
                            x2: "357.1",
                            y2: "129.989",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    stopColor: "#F46737"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    offset: "1",
                                    stopColor: "#F46737",
                                    stopOpacity: "0"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                            id: "paint6_linear",
                            x1: "333.309",
                            y1: "382.693",
                            x2: "358.376",
                            y2: "357.655",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    stopColor: "#F46737"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    offset: "1",
                                    stopColor: "#F46737",
                                    stopOpacity: "0"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                            id: "paint7_linear",
                            x1: "165.54",
                            y1: "93.9578",
                            x2: "140.472",
                            y2: "118.996",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    stopColor: "#F46737"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    offset: "1",
                                    stopColor: "#F46737",
                                    stopOpacity: "0"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                            id: "paint8_linear",
                            x1: "414.367",
                            y1: "301.156",
                            x2: "439.435",
                            y2: "276.118",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    stopColor: "#13ADC7"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    offset: "1",
                                    stopColor: "#13ADC7",
                                    stopOpacity: "0"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                            id: "paint9_linear",
                            x1: "515.943",
                            y1: "288.238",
                            x2: "541.339",
                            y2: "291.454",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    stopColor: "#13ADC7"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    offset: "1",
                                    stopColor: "#13ADC7",
                                    stopOpacity: "0"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                            id: "paint10_linear",
                            x1: "117.001",
                            y1: "230.619",
                            x2: "117.36",
                            y2: "258.193",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    stopColor: "#945DD6"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    offset: "1",
                                    stopColor: "#945DD6",
                                    stopOpacity: "0"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                            id: "paint11_linear",
                            x1: "476.529",
                            y1: "363.31",
                            x2: "451.461",
                            y2: "338.272",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    stopColor: "#13ADC7"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                    offset: "1",
                                    stopColor: "#13ADC7",
                                    stopOpacity: "0"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
/* harmony default export */ const BackgrooundAnimation_BackgroundAnimation = (BackgroundAnimation);

;// CONCATENATED MODULE: ./src/styles/GlobalComponents/Button.tsx



const Button = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ButtonBack, {
        alt: props.alt,
        form: props.form,
        disabled: props.disabled,
        children: [
            props.children,
            /*#__PURE__*/ jsx_runtime_.jsx(ButtonFront, {
                alt: props.alt,
                onClick: props.onClick,
                disabled: props.disabled,
                children: props.children
            })
        ]
    });
/* harmony default export */ const GlobalComponents_Button = (Button);

;// CONCATENATED MODULE: ./src/components/Hero/HeroStyles.ts

const LeftSection = (external_styled_components_default()).div`
  width: 100%;
  @media ${(props)=>props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props)=>props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

;// CONCATENATED MODULE: ./src/components/Hero/Hero.tsx





const Hero = ()=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Section, {
            row: true,
            nopadding: true,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LeftSection, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle, {
                        main: true,
                        center: true,
                        children: "Hey there,"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SectionText, {
                        children: [
                            "I am currently ",
                            /*#__PURE__*/ jsx_runtime_.jsx(StrongTag, {
                                children: "twenty-five years old"
                            }),
                            " and live in the city of Divin\xf3polis in the state of Minas Gerais. I work as a",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx(StrongTag, {
                                children: "full stack developer at Banco Inter"
                            }),
                            ". I am communicative, competitive, optimistic and helpful. In addition, I have learned to work as a team. My motto is",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx(StrongTag, {
                                children: "Run until you fly"
                            }),
                            "."
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(GlobalComponents_Button, {
                        onClick: (e)=>{
                            e.preventDefault();
                            window.location.href = "/files/resume.pdf";
                        },
                        children: "My Resume"
                    })
                ]
            })
        })
    });
/* harmony default export */ const Hero_Hero = (Hero);

;// CONCATENATED MODULE: ./src/components/Projects/ProjectsStyles.ts

const Img = (external_styled_components_default()).img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;
const GridContainer = (external_styled_components_default()).section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding-top: 3rem;
  padding-bottom: 3rem;
  place-items: center;
  column-gap: 1rem;
  row-gap: 3rem;
  @media ${(props)=>props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 1.5rem;
  }
`;
const BlogCard = (external_styled_components_default()).div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props)=>props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
const TitleContent = (external_styled_components_default()).div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 0.7em;
  color: #ff6b6b;
  font-size: 1.8rem;
  font-weight: 500;
`;
const HeaderThree = (external_styled_components_default()).h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #ff6b6b;
  padding: 0.5rem 0;
  margin-top: 1rem;
  font-size: ${(props)=>props.title ? "3rem" : "2rem"};
`;
const Hr = (external_styled_components_default()).hr`
  width: 50px;
  height: 3px;
  margin: 8px auto;
  border: 0;
  background: #a3a3a3;
`;
const Intro = (external_styled_components_default()).div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;
const CardInfo = (external_styled_components_default()).p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: center;
  margin-top: 2rem;
  @media ${(props)=>props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;
const UtilityList = (external_styled_components_default()).ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;
const ExternalLinks = (external_styled_components_default()).a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #c74545;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #c73131;
  }
`;
const TagList = (external_styled_components_default()).ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  row-gap: 1.5rem;
  padding: 3rem;
`;
const Tag = (external_styled_components_default()).li`
  color: #d8bfbf;
  font-size: 1.5rem;
  list-style-type: circle;
  text-align: left;
`;

;// CONCATENATED MODULE: ./src/constants/constants.ts
const projects = [
    {
        title: "Coffee Delivery",
        date: "2023-01-27",
        description: "During this challenge, we used slightly more advanced concepts developing a coffee ordering application from scratch!",
        image: "/images/coffee-delivery.png",
        tags: [
            "Vite",
            "Styled Comp.",
            "Typescript",
            "Context API",
            "Local Storage",
            "Router Dom",
            "ReactHookForm",
            "Formul\xe1rio",
            "Github Pages"
        ],
        source: "https://github.com/tuliooov/ignite-2022-reactjs-coffee-challenge-02-delivery",
        visit: "https://tuliooov.github.io/ignite-2022-reactjs-coffee-challenge-02-delivery/",
        id: 0
    },
    {
        title: "Ignite Timer",
        date: "2023-01-25",
        description: "We built a complete application with routing and several important concepts of the React ecosystem.",
        image: "/images/ignite-timer.png",
        tags: [
            "Vite",
            "Styled Comp.",
            "Typescript",
            "Local Storage",
            "Router Dom",
            "Immer",
            "ReactHookForm",
            "Formul\xe1rio",
            "Github Pages"
        ],
        source: "https://github.com/tuliooov/02-ignite-timer",
        visit: "https://tuliooov.github.io/02-ignite-timer/",
        id: 1
    },
    {
        title: "ToDo List",
        date: "2023-01-06",
        description: "We reinforce the most important concepts of ReactJS.",
        image: "/images/to-do-list.png",
        tags: [
            "Vite",
            "Typescript",
            "Local Storage",
            "Github Pages"
        ],
        source: "https://github.com/tuliooov/Ignite-ReactJS-Desafio-01-Praticando-os-conceitos-do-ReactJS",
        visit: "https://tuliooov.github.io/Ignite-ReactJS-Desafio-01-Praticando-os-conceitos-do-ReactJS/",
        id: 1
    }
];
const TimeLineData = [
    {
        year: 2013,
        text: "Graduated from elementary school."
    },
    {
        year: 2015,
        text: "Started studying HTML, CSS and JS in the PRONATEC course."
    },
    {
        year: 2016,
        text: "Completed high school."
    },
    {
        year: 2016,
        text: "My first job, in a Casa Art Festas online store."
    },
    {
        year: 2017,
        text: "Started my job at Cliente Fiel."
    },
    {
        year: 2018,
        text: "Developed tools for the company MV Tecidos."
    },
    {
        year: 2019,
        text: "Started studying at RocketSeat, where I study until today."
    },
    {
        year: 2020,
        text: "Started my degree in Computer Science at PUC - Minas."
    },
    {
        year: 2020,
        text: "Developed several incredible tools for Cliente Fiel."
    },
    {
        year: 2021,
        text: "Got an amazing job at Banco Inter."
    },
    {
        year: 2022,
        text: "Discovered the importance of speaking English."
    },
    {
        year: 2023,
        text: "I will carry out my first exchange for studies."
    },
    {
        year: 2024,
        text: "I hope to return and finish my graduation."
    }
];

;// CONCATENATED MODULE: ./src/components/Projects/Projects.tsx





const Projects = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section, {
        id: "projects",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SectionDivider, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle, {
                main: true,
                children: "Projects"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(GridContainer, {
                children: projects.map((p, i)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BlogCard, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Img, {
                                src: p.image
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(HeaderThree, {
                                title: p.title,
                                children: p.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Hr, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(CardInfo, {
                                className: "card-info",
                                children: p.description
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(TitleContent, {
                                        children: "Tech Stack"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Hr, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(TagList, {
                                        children: p.tags.map((t, i)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx(Tag, {
                                                children: t
                                            }, i);
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(UtilityList, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ExternalLinks, {
                                        href: p.visit,
                                        children: "Live Preview"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ExternalLinks, {
                                        href: p.source,
                                        children: "Source Code"
                                    })
                                ]
                            })
                        ]
                    }, i);
                })
            })
        ]
    });
/* harmony default export */ const Projects_Projects = (Projects);

;// CONCATENATED MODULE: ./src/components/Technologies/TechnologiesStyles.tsx

const ImageContainer = (external_styled_components_default()).div`
  text-align: center;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    rgba(79, 108, 176, 0.25) 53.8%,
    rgba(79, 108, 176, 0) 100%
  );
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${(props)=>props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${(props)=>props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`;
const MainImage = (external_styled_components_default()).img`
  width: 100%;
`;
const List = (external_styled_components_default()).ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: ${(props)=>`repeat(${props.columns || 3}, 1fr)`};
  gap: 40px;
  margin-bottom: 4rem;

  @media ${(props)=>props.theme.breakpoints.lg} {
    margin: 64px 0;
  }

  @media ${(props)=>props.theme.breakpoints.md} {
    margin: 64px 0;
    gap: 24px;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: ${(props)=>`repeat(${props.columns}, 1fr)`};
    padding: 15px;
  }

  @media ${(props)=>props.theme.breakpoints.xs} {
    ${(props)=>props.onlyIcon && external_styled_components_.css`
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        padding: 15px;
      `}

    ${(props)=>!props.onlyIcon && external_styled_components_.css`
        display: flex;
        flex-direction: column;
      `}
  }
`;
const ListContainer = (external_styled_components_default()).div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;

  @media ${(props)=>props.theme.breakpoints.sm} {
    display: flex;
    margin-left: 18px;
  }
`;
const ListTitle = (external_styled_components_default()).h4`
  font-weight: 700;
  font-size: ${(props)=>props.variant === "small" ? "18px" : "28px"};
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 8px;

  @media ${(props)=>props.theme.breakpoints.md} {
    font-size: 24px;
    line-height: 28px;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
`;
const ListParagraph = (external_styled_components_default()).div`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props)=>props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;
const ListItem = (external_styled_components_default()).li`
  max-width: 320px;
  display: flex;
  flex-direction: row;

  @media ${(props)=>props.theme.breakpoints.md} {
    max-width: 203px;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    margin-bottom: 14px;
    max-width: 320px;
  }
`;
const ListIcon = (external_styled_components_default()).img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;

  @media ${(props)=>props.theme.breakpoints.md} {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`;

// EXTERNAL MODULE: external "react-icons/di"
var di_ = __webpack_require__(9872);
// EXTERNAL MODULE: external "react-icons/si"
var si_ = __webpack_require__(764);
;// CONCATENATED MODULE: ./src/components/Technologies/Skills.tsx



const Skills = [
    {
        slug: "reactjs",
        Component: di_.DiReact,
        title: "ReactJS",
        Description: ()=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: "I work creating microfrontends with Nextjs and Vite"
            })
    },
    {
        slug: "java",
        Component: si_.SiJava,
        title: "Java",
        Description: ()=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: "I can code in Java. But I mostly use it for CRUDs"
            })
    },
    {
        slug: "node",
        Component: di_.DiNodejs,
        title: "NodeJS",
        Description: ()=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: "I`ve written dozens of Rest APIs in NodeJS for various purposes."
            })
    },
    {
        slug: "mysql",
        Component: di_.DiMysql,
        title: "Mysql",
        Description: ()=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: "I have already developed database tables and hundreds of commands for querys."
            })
    },
    {
        slug: "firebase",
        Component: si_.SiFirebase,
        title: "Firebase",
        Description: ()=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: "I have used Firebase for auth, hosting, database & analytics in my apps."
            })
    },
    {
        slug: "git",
        Component: si_.SiGit,
        title: "Git",
        Description: ()=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: "Git is a tool that I use every day. I use GitHub for pushing my code."
            })
    }
];
const OtherSkills = [
    {
        slug: "flutter",
        Component: si_.SiFlutter,
        title: "Flutter"
    },
    {
        slug: "docker",
        Component: si_.SiDocker,
        title: "Docker"
    },
    {
        slug: "aws",
        Component: si_.SiAmazonaws,
        title: "AWS"
    },
    {
        slug: "postgresql",
        Component: si_.SiPostgresql,
        title: "PostgreSQL"
    },
    {
        slug: "postman",
        Component: si_.SiPostman,
        title: "Postman"
    },
    {
        slug: "adobe",
        Component: si_.SiAdobe,
        title: "Adobe"
    },
    {
        slug: "microsoft",
        Component: si_.SiMicrosoft,
        title: "Microsoft"
    },
    {
        slug: "mongodb",
        Component: si_.SiMongodb,
        title: "MongoDB"
    },
    {
        slug: "c",
        Component: si_.SiC,
        title: "C & C++"
    },
    {
        slug: "python",
        Component: si_.SiPython,
        title: "Python"
    },
    {
        slug: "go",
        Component: si_.SiGo,
        title: "GO"
    },
    {
        slug: "gitlab",
        Component: si_.SiGitlab,
        title: "Gitlab"
    }
];

;// CONCATENATED MODULE: ./src/components/Technologies/Technologies.tsx





const Technologies = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section, {
        id: "skills",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SectionDivider, {
                divider: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle, {
                children: "Hard Skills"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SectionText, {
                children: "I`ve worked with multiple technologies as a developer to develop & maintain my projects."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(List, {
                children: Skills.map((Skill)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListItem, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("picture", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Skill.Component, {
                                    size: "3rem"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListContainer, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ListTitle, {
                                        children: Skill.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ListParagraph, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Skill.Description, {})
                                    })
                                ]
                            })
                        ]
                    }, Skill.slug))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(List, {
                columns: 12,
                onlyIcon: true,
                children: OtherSkills.map((Skill)=>/*#__PURE__*/ jsx_runtime_.jsx(ListItem, {
                        title: Skill.title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("picture", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Skill.Component, {
                                size: "3rem"
                            })
                        })
                    }, Skill.slug))
            })
        ]
    });
/* harmony default export */ const Technologies_Technologies = (Technologies);

;// CONCATENATED MODULE: ./src/components/SoftSkills/SoftSkillsStyles.ts

const SoftSkillsStyles_ImageContainer = (external_styled_components_default()).div`
  text-align: center;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    rgba(79, 108, 176, 0.25) 53.8%,
    rgba(79, 108, 176, 0) 100%
  );
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${(props)=>props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${(props)=>props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`;
const SoftSkillsStyles_MainImage = (external_styled_components_default()).img`
  width: 100%;
`;
const SoftSkillsStyles_List = (external_styled_components_default()).ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 4rem;

  @media ${(props)=>props.theme.breakpoints.lg} {
    margin: 64px 0;
  }

  @media ${(props)=>props.theme.breakpoints.md} {
    margin: 64px 0;
    gap: 24px;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 15px;
  }

  @media ${(props)=>props.theme.breakpoints.xs} {
    display: flex;
    flex-direction: column;
  }
`;
const SoftSkillsStyles_ListContainer = (external_styled_components_default()).div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;

  @media ${(props)=>props.theme.breakpoints.sm} {
    display: flex;
    margin-left: 18px;
  }
`;
const SoftSkillsStyles_ListTitle = (external_styled_components_default()).h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 8px;

  @media ${(props)=>props.theme.breakpoints.md} {
    font-size: 24px;
    line-height: 28px;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
`;
const SoftSkillsStyles_ListParagraph = (external_styled_components_default()).div`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props)=>props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;
const SoftSkillsStyles_ListItem = (external_styled_components_default()).li`
  max-width: 320px;
  display: flex;
  flex-direction: row;

  & path {
    stroke: white;
  }

  @media ${(props)=>props.theme.breakpoints.md} {
    max-width: 203px;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    margin-bottom: 14px;
    max-width: 320px;
  }
`;
const SoftSkillsStyles_ListIcon = (external_styled_components_default()).img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;

  @media ${(props)=>props.theme.breakpoints.md} {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`;

;// CONCATENATED MODULE: ./src/components/SoftSkills/constants.tsx


const constants_Skills = [
    {
        slug: "communicative",
        Component: gr_.GrAccessibility,
        title: "Communicative",
        Description: ()=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: "I always try to communicate in the best possible way."
            })
    },
    {
        slug: "innovative",
        Component: gr_.GrAnnounce,
        title: "Innovative",
        Description: ()=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: "Always giving ideas for news and improvements."
            })
    },
    {
        slug: "productive",
        Component: gr_.GrAlarm,
        title: "Productive",
        Description: ()=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: "Delivering before expected time."
            })
    },
    {
        slug: "competitive",
        Component: gr_.GrYoga,
        title: "Competitive",
        Description: ()=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: "I seek to be among the best to stand out."
            })
    },
    {
        slug: "optimistic",
        Component: gr_.GrYoga,
        title: "Optimistic",
        Description: ()=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: "Dealing with challenges such as: doing what has to be done."
            })
    },
    {
        slug: "grateful",
        Component: gr_.GrLock,
        title: "Grateful",
        Description: ()=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: "Dedicating to the company as if it were mine."
            })
    }
];

;// CONCATENATED MODULE: ./src/components/SoftSkills/SoftSkills.tsx





const SoftSkills = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section, {
        id: "skills",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SectionDivider, {
                divider: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle, {
                children: "Soft Skills"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SectionText, {
                children: "I work daily with my ethical, moral and professional skills. Always seek to improve these qualities"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SoftSkillsStyles_List, {
                children: constants_Skills.map((Skill)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(SoftSkillsStyles_ListItem, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("picture", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Skill.Component, {
                                    size: "3rem"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SoftSkillsStyles_ListContainer, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(SoftSkillsStyles_ListTitle, {
                                        children: Skill.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(SoftSkillsStyles_ListParagraph, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Skill.Description, {})
                                    })
                                ]
                            })
                        ]
                    }, Skill.slug))
            })
        ]
    });
/* harmony default export */ const SoftSkills_SoftSkills = (SoftSkills);

;// CONCATENATED MODULE: ./src/components/TimeLine/TimeLineStyles.ts

const CarouselContainer = (external_styled_components_default()).ul`
  max-width: 1040px;
  background: #1c1c1c;
  padding: 0rem;
  list-style: none;

  /* overflow-x: hidden; */

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 3rem;

  margin-left: 32px;
  &:first-of-type {
    margin-left: 0px;
  }

  margin-bottom: 80px;

  //remove scrollbar
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }

  @media ${(props)=>props.theme.breakpoints.md} {
    display: flex;
    justify-content: space-between;
    grid-template-columns: none;
  }
`;
const CarouselMobileScrollNode = (external_styled_components_default()).div`
  /* @media ${(props)=>props.theme.breakpoints.sm} { */
  display: flex;
  min-width: ${({ final  })=>final ? `120%;` : `min-content`};
  /* } */
`;
const CarouselItem = (external_styled_components_default()).div`
  background: #1c1c1c;
  border-radius: 3px;
  max-width: 196px;

  @media ${(props)=>props.theme.breakpoints.md} {
    max-width: 124px;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    background: #1c1c1c;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;

    ${(props)=>props.active === props.index ? `opacity: 1` : `opacity: 0.5`};
  }
`;
const CarouselItemTitle = (external_styled_components_default()).h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  background: linear-gradient(
    121.57deg,
    #ffffff 10%,
    rgba(255, 255, 255, 0.66) 30.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${(props)=>props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 28px;
  }
`;
const CarouselItemImg = (external_styled_components_default()).svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  width: 100%;

  @media ${(props)=>props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`;
const CarouselItemText = (external_styled_components_default()).p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;

  @media ${(props)=>props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${(props)=>props.theme.breakpoints.sm} {
    font-size: 11px;
    line-height: 18px;
    padding-right: 0;
  }
`;
const CarouselButtons = (external_styled_components_default()).div`
  width: 288px;

  display: none;
  visibility: hidden;

  @media ${(props)=>props.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`;
const CarouselButton = (external_styled_components_default()).button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props)=>props.active === props.index ? `1` : `.33`};
  transform: ${(props)=>props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
`;
const CarouselButtonDot = (external_styled_components_default()).div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`;

;// CONCATENATED MODULE: ./src/components/TimeLine/TimeLine.tsx





const TOTAL_CAROUSEL_COUNT = TimeLineData.length;
const Timeline = ()=>{
    const [activeItem, setActiveItem] = (0,external_react_.useState)(0);
    const carouselRef = (0,external_react_.useRef)(null);
    const scroll = (node, left)=>{
        if (node) {
            node.scrollTo({
                left,
                behavior: "smooth"
            });
        }
    };
    const handleClick = (e, i)=>{
        e.preventDefault();
        if (carouselRef.current) {
            const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
            scroll(carouselRef.current, scrollLeft);
        }
    };
    const handleScroll = ()=>{
        if (carouselRef.current) {
            const index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * TimeLineData.length);
            setActiveItem(index);
        }
    };
    (0,external_react_.useEffect)(()=>{
        const handleResize = ()=>{
            scroll(carouselRef.current, 0);
        };
        window.addEventListener("resize", handleResize);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section, {
        id: "about",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SectionDivider, {
                divider: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SectionTitle, {
                children: "My Journey"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SectionText, {
                children: "In my journey to date, I have learned a great deal about development and life in general."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CarouselContainer, {
                ref: carouselRef,
                onScroll: handleScroll,
                children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: TimeLineData.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(CarouselMobileScrollNode, {
                            final: index === TOTAL_CAROUSEL_COUNT - 1,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CarouselItem, {
                                index: index,
                                id: `carousel__item-${index}`,
                                active: activeItem,
                                onClick: (e)=>handleClick(e, index),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CarouselItemTitle, {
                                        children: [
                                            `${item.year}`,
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CarouselItemImg, {
                                                width: "208",
                                                height: "6",
                                                viewBox: "0 0 208 6",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        d: "M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",
                                                        fill: "url(#paint0_linear)",
                                                        fillOpacity: "0.33"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                                                            id: "paint0_linear",
                                                            x1: "-4.30412e-10",
                                                            y1: "0.5",
                                                            x2: "208",
                                                            y2: "0.500295",
                                                            gradientUnits: "userSpaceOnUse",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                                                    stopColor: "white"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                                                    offset: "0.79478",
                                                                    stopColor: "white",
                                                                    stopOpacity: "0"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CarouselItemText, {
                                        children: item.text
                                    })
                                ]
                            })
                        }, index))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CarouselButtons, {
                children: TimeLineData.map((item, index)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(CarouselButton, {
                        index: index,
                        active: activeItem,
                        onClick: (e)=>handleClick(e, index),
                        type: "button",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CarouselButtonDot, {
                            active: activeItem
                        })
                    }, index);
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SectionDivider, {})
        ]
    });
};
/* harmony default export */ const TimeLine = (Timeline);

// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
;// CONCATENATED MODULE: ./src/components/Header/HeaderStyles.tsx

const Container = (external_styled_components_default()).div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props)=>props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
const Div1 = (external_styled_components_default()).div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props)=>props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
const Div2 = (external_styled_components_default()).div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  margin-top: 0.75em;
  justify-content: space-between;
  @media ${(props)=>props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
const Div3 = (external_styled_components_default()).div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props)=>props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;
// Navigation Links
const NavLink = (external_styled_components_default()).span`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props)=>props.theme.breakpoints.sm} {
    padding: 0.5rem;
    font-size: 1.7rem;
  }
`;
/// DropDown Contact
const ContactDropDown = (external_styled_components_default()).button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props)=>props.theme.breakpoints.md} {
    padding: 0;
  }
`;
const SocialIcons = (external_styled_components_default()).a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #272727;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

;// CONCATENATED MODULE: ./src/components/Footer/FooterStyles.ts

const FooterWrapper = (external_styled_components_default()).section`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;

  @media ${(props)=>props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`;
const LinkItem = (external_styled_components_default()).a`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 16px;
  transition: 0.3s ease;
  position: relative;
  left: 0;

  &:hover {
    color: #fff;
    left: 6px;
  }

  @media ${(props)=>props.theme.breakpoints.md} {
    font-size: 17px;
    line-height: 28px;
    display: flex;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    font-size: 15px;
    line-height: 14px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }
`;
const SocialIconsContainer = (external_styled_components_default()).div`
  max-width: 1040px;
  display: flex;
  justify-content: space-between;

  @media ${(props)=>props.theme.breakpoints.md} {
    display: flex;
    justify-content: space-between;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;
const CompanyContainer = (external_styled_components_default()).div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-right: auto;

  @media ${(props)=>props.theme.breakpoints.md} {
    flex-direction: column;
    align-items: baseline;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 0 0 32px;
    align-items: center;
  }
`;
const Slogan = (external_styled_components_default()).p`
  color: rgba(255, 255, 255, 0.5);
  min-width: 280px;
  letter-spacing: 0.02em;
  font-size: 18px;
  line-height: 30px;
  padding-top: 1rem;

  @media ${(props)=>props.theme.breakpoints.md} {
    font-size: 17px;
    line-height: 28px;
  }

  @media ${(props)=>props.theme.breakpoints.sm} {
    line-height: 22px;
    font-size: 15px;
    min-width: 100px;
  }
`;
const SocialContainer = (external_styled_components_default()).div`
  display: flex;
  align-items: center;

  @media ${(props)=>props.theme.breakpoints.md} {
    justify-content: center;
    padding-right: 16px;
    flex-wrap: wrap;
  }
`;
const LinkList = (external_styled_components_default()).ul`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(3, minmax(85px, 220px));
  gap: 40px;
  padding: 40px 0 28px;

  @media ${(props)=>props.theme.breakpoints.lg} {
    padding: 32px 0 16px;
  }

  @media ${(props)=>props.theme.breakpoints.md} {
    width: 100%;
    padding: 32px 0 16px;
    gap: 16px;
  }
  @media ${(props)=>props.theme.breakpoints.sm} {
    width: 100%;
    padding: 32px 4px 16px;
    gap: 5px;
  }
`;
const LinkColumn = (external_styled_components_default()).div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
`;
const LinkTitle = (external_styled_components_default()).h4`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 16px;

  @media ${(props)=>props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 8px;
  }
`;

;// CONCATENATED MODULE: ./src/components/Footer/Footer.tsx






const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FooterWrapper, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LinkList, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LinkColumn, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(LinkTitle, {
                                children: "Chat"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                                href: "https://wa.me/5537988031061",
                                children: "Whatsapp"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LinkColumn, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(LinkTitle, {
                                children: "Email"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                                href: "mailto:marcotuliovaleriano2014@gmail.com",
                                children: "marcotuliovaleriano2014@gmail.com"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SocialIconsContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CompanyContainer, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Slogan, {
                            children: [
                                "\xa9 2023",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx(Link, {
                                    href: "https://github.com/tuliooov",
                                    children: " Tuliooov"
                                }),
                                ". Run until you fly!"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SocialContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons, {
                                href: "https://github.com/tuliooov",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiFillGithub, {
                                    size: "3rem"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons, {
                                href: "https://www.linkedin.com/in/marcotuliovaleriano/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiFillLinkedin, {
                                    size: "3rem"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons, {
                                href: "https://www.instagram.com/_marcovaleriano/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiFillInstagram, {
                                    size: "3rem"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons, {
                                href: "https://wa.me/5537988031061/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineWhatsApp, {
                                    size: "3rem"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/Header/Header.tsx





const Header = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Div1, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "/",
                    style: {
                        display: "flex",
                        alignItems: "center",
                        color: "white"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/profile.jpeg",
                            height: 40,
                            width: 40,
                            style: {
                                borderRadius: "100%"
                            }
                        }),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            style: {
                                marginLeft: 10,
                                marginTop: 7,
                                fontSize: 20
                            },
                            children: "Marco T\xfalio"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Div2, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#projects",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                children: "Projects"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#skills",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                children: "Skills"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#about",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                children: "About"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Div3, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons, {
                        href: "https://github.com/tuliooov",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiFillGithub, {
                            size: "3rem"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons, {
                        href: "https://www.linkedin.com/in/marcotuliovaleriano/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiFillLinkedin, {
                            size: "3rem"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons, {
                        href: "https://www.instagram.com/_marcovaleriano/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiFillInstagram, {
                            size: "3rem"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons, {
                        href: "https://wa.me/5537988031061/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineWhatsApp, {
                            size: "3rem"
                        })
                    })
                ]
            })
        ]
    });
/* harmony default export */ const Header_Header = (Header);

;// CONCATENATED MODULE: ./src/layout/LayoutStyles.ts

const LayoutStyles_Container = (external_styled_components_default()).div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`;

;// CONCATENATED MODULE: ./src/layout/Layout.tsx





const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LayoutStyles_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
        ]
    });
};

;// CONCATENATED MODULE: ./src/pages/index.tsx










const Home = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section, {
                grid: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Hero_Hero, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(BackgrooundAnimation_BackgroundAnimation, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Projects_Projects, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Technologies_Technologies, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(SoftSkills_SoftSkills, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(TimeLine, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Acomplishments_Acomplishments, {})
        ]
    });
};
/* harmony default export */ const pages = (Home);


/***/ })

};
;