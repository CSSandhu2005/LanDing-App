"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/sections/Pricing.tsx":
/*!**********************************!*\
  !*** ./src/sections/Pricing.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Pricing: function() { return /* binding */ Pricing; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _assets_check_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/check.svg */ \"(app-pages-browser)/./src/assets/check.svg\");\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-merge */ \"(app-pages-browser)/./node_modules/tailwind-merge/dist/bundle-mjs.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* __next_internal_client_entry_do_not_use__ Pricing auto */ \n\n\n\nconst pricingTiers = [\n    {\n        title: \"Free\",\n        monthlyPrice: 0,\n        buttonText: \"Get started for free\",\n        popular: false,\n        inverse: false,\n        features: [\n            \"Up to 5 project members\",\n            \"Unlimited tasks and projects\",\n            \"2GB storage\",\n            \"Integrations\",\n            \"Basic support\"\n        ]\n    },\n    {\n        title: \"Pro\",\n        monthlyPrice: 9,\n        buttonText: \"Sign up now\",\n        popular: true,\n        inverse: true,\n        features: [\n            \"Up to 50 project members\",\n            \"Unlimited tasks and projects\",\n            \"50GB storage\",\n            \"Integrations\",\n            \"Priority support\",\n            \"Advanced support\",\n            \"Export support\"\n        ]\n    },\n    {\n        title: \"Business\",\n        monthlyPrice: 19,\n        buttonText: \"Sign up now\",\n        popular: false,\n        inverse: false,\n        features: [\n            \"Up to 5 project members\",\n            \"Unlimited tasks and projects\",\n            \"200GB storage\",\n            \"Integrations\",\n            \"Dedicated account manager\",\n            \"Custom fields\",\n            \"Advanced analytics\",\n            \"Export capabilities\",\n            \"API access\",\n            \"Advanced security features\"\n        ]\n    }\n];\nconst Pricing = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-24 bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"section-heading\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"\",\n                            children: \"Pricing\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\New folder (2)\\\\src\\\\sections\\\\Pricing.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"section-description mt-5\",\n                            children: \"Free forever. Upgrade for unlimited tasks, better security, and exclusive features.\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\New folder (2)\\\\src\\\\sections\\\\Pricing.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\New folder (2)\\\\src\\\\sections\\\\Pricing.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center\",\n                    children: pricingTiers.map((param, index)=>{\n                        let { title, monthlyPrice, buttonText, popular, inverse, features } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.twMerge)(\"card\", inverse === true && \"border-black bg-black text-white\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.twMerge)(\"text-lg font-bold text-black/50\", inverse === true && \"text-white/60\"),\n                                            children: title\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\New folder (2)\\\\src\\\\sections\\\\Pricing.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        popular === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                                                animate: {\n                                                    backgroundPositionX: \"100%\"\n                                                },\n                                                transition: {\n                                                    duration: 1,\n                                                    repeat: Infinity,\n                                                    ease: \"linear\",\n                                                    repeatType: \"loop\"\n                                                },\n                                                className: \"bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium\",\n                                                children: \"Popular\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\New folder (2)\\\\src\\\\sections\\\\Pricing.tsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\New folder (2)\\\\src\\\\sections\\\\Pricing.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\New folder (2)\\\\src\\\\sections\\\\Pricing.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-baseline gap-1 mt-[30px]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-4xl font-bold tracking-tighter leading-none\",\n                                            children: [\n                                                \"$\",\n                                                monthlyPrice\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\New folder (2)\\\\src\\\\sections\\\\Pricing.tsx\",\n                                            lineNumber: 115,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"tracking-tight font-bold text-black/50\",\n                                            children: \"/month\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\New folder (2)\\\\src\\\\sections\\\\Pricing.tsx\",\n                                            lineNumber: 118,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\New folder (2)\\\\src\\\\sections\\\\Pricing.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.twMerge)(\"btn btn-primary w-full mt-[30px]\", inverse === true && \"bg-white text-black\"),\n                                    children: buttonText\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\New folder (2)\\\\src\\\\sections\\\\Pricing.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"flex flex-col gap-5 mt-8\",\n                                    children: features.map((feature, featureIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"text-sm flex items-center gap-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_check_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                    className: \"h-6 w-6\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\New folder (2)\\\\src\\\\sections\\\\Pricing.tsx\",\n                                                    lineNumber: 133,\n                                                    columnNumber: 23\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: feature\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\New folder (2)\\\\src\\\\sections\\\\Pricing.tsx\",\n                                                    lineNumber: 134,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            ]\n                                        }, featureIndex, true, {\n                                            fileName: \"D:\\\\New folder (2)\\\\src\\\\sections\\\\Pricing.tsx\",\n                                            lineNumber: 132,\n                                            columnNumber: 21\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\New folder (2)\\\\src\\\\sections\\\\Pricing.tsx\",\n                                    lineNumber: 130,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"D:\\\\New folder (2)\\\\src\\\\sections\\\\Pricing.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\New folder (2)\\\\src\\\\sections\\\\Pricing.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\New folder (2)\\\\src\\\\sections\\\\Pricing.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\New folder (2)\\\\src\\\\sections\\\\Pricing.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Pricing;\nvar _c;\n$RefreshReg$(_c, \"Pricing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZWN0aW9ucy9QcmljaW5nLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDMkM7QUFDRjtBQUNGO0FBRXZDLE1BQU1HLGVBQWU7SUFDbkI7UUFDRUMsT0FBTztRQUNQQyxjQUFjO1FBQ2RDLFlBQVk7UUFDWkMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLFVBQVU7WUFDUjtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7SUFDSDtJQUNBO1FBQ0VMLE9BQU87UUFDUEMsY0FBYztRQUNkQyxZQUFZO1FBQ1pDLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxVQUFVO1lBQ1I7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDRDtJQUNIO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxjQUFjO1FBQ2RDLFlBQVk7UUFDWkMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLFVBQVU7WUFDUjtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO0lBQ0g7Q0FDRDtBQUVNLE1BQU1DLFVBQVU7SUFDckIscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBR0YsV0FBVTtzQ0FBRzs7Ozs7O3NDQUNqQiw4REFBQ0c7NEJBQUVILFdBQVU7c0NBQTJCOzs7Ozs7Ozs7Ozs7OEJBSzFDLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDWlQsYUFBYWEsR0FBRyxDQUNmLFFBT0dDOzRCQVBGLEVBQ0NiLEtBQUssRUFDTEMsWUFBWSxFQUNaQyxVQUFVLEVBQ1ZDLE9BQU8sRUFDUEMsT0FBTyxFQUNQQyxRQUFRLEVBQ1Q7NkNBQ0MsOERBQUNJOzRCQUVDRCxXQUFXWCx1REFBT0EsQ0FDaEIsUUFDQU8sWUFBWSxRQUFROzs4Q0FHdEIsOERBQUNLO29DQUFJRCxXQUFVOztzREFDYiw4REFBQ007NENBQ0NOLFdBQVdYLHVEQUFPQSxDQUNoQixtQ0FDQU8sWUFBWSxRQUFRO3NEQUdyQko7Ozs7Ozt3Q0FFRkcsWUFBWSxzQkFDWCw4REFBQ007NENBQUlELFdBQVU7c0RBQ2IsNEVBQUNWLGlEQUFNQSxDQUFDaUIsSUFBSTtnREFDVkMsU0FBUztvREFDUEMscUJBQXFCO2dEQUN2QjtnREFDQUMsWUFBWTtvREFDVkMsVUFBVTtvREFDVkMsUUFBUUM7b0RBQ1JDLE1BQU07b0RBQ05DLFlBQVk7Z0RBQ2Q7Z0RBQ0FmLFdBQVU7MERBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQU1QLDhEQUFDQztvQ0FBSUQsV0FBVTs7c0RBQ2IsOERBQUNPOzRDQUFLUCxXQUFVOztnREFBbUQ7Z0RBQy9EUDs7Ozs7OztzREFFSiw4REFBQ2M7NENBQUtQLFdBQVU7c0RBQXlDOzs7Ozs7Ozs7Ozs7OENBSTNELDhEQUFDZ0I7b0NBQ0NoQixXQUFXWCx1REFBT0EsQ0FDaEIsb0NBQ0FPLFlBQVksUUFBUTs4Q0FHckJGOzs7Ozs7OENBRUgsOERBQUN1QjtvQ0FBR2pCLFdBQVU7OENBQ1hILFNBQVNPLEdBQUcsQ0FBQyxDQUFDYyxTQUFTQyw2QkFDdEIsOERBQUNDOzRDQUFzQnBCLFdBQVU7OzhEQUMvQiw4REFBQ1oseURBQVNBO29EQUFDWSxXQUFVOzs7Ozs7OERBQ3JCLDhEQUFDTzs4REFBTVc7Ozs7Ozs7MkNBRkFDOzs7Ozs7Ozs7OzsyQkFwRFJkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUVyQixFQUFFO0tBdkZXUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VjdGlvbnMvUHJpY2luZy50c3g/MmNkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBDaGVja0ljb24gZnJvbSBcIkAvYXNzZXRzL2NoZWNrLnN2Z1wiO1xuaW1wb3J0IHsgdHdNZXJnZSB9IGZyb20gXCJ0YWlsd2luZC1tZXJnZVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgcHJpY2luZ1RpZXJzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRnJlZVwiLFxuICAgIG1vbnRobHlQcmljZTogMCxcbiAgICBidXR0b25UZXh0OiBcIkdldCBzdGFydGVkIGZvciBmcmVlXCIsXG4gICAgcG9wdWxhcjogZmFsc2UsXG4gICAgaW52ZXJzZTogZmFsc2UsXG4gICAgZmVhdHVyZXM6IFtcbiAgICAgIFwiVXAgdG8gNSBwcm9qZWN0IG1lbWJlcnNcIixcbiAgICAgIFwiVW5saW1pdGVkIHRhc2tzIGFuZCBwcm9qZWN0c1wiLFxuICAgICAgXCIyR0Igc3RvcmFnZVwiLFxuICAgICAgXCJJbnRlZ3JhdGlvbnNcIixcbiAgICAgIFwiQmFzaWMgc3VwcG9ydFwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQcm9cIixcbiAgICBtb250aGx5UHJpY2U6IDksXG4gICAgYnV0dG9uVGV4dDogXCJTaWduIHVwIG5vd1wiLFxuICAgIHBvcHVsYXI6IHRydWUsXG4gICAgaW52ZXJzZTogdHJ1ZSxcbiAgICBmZWF0dXJlczogW1xuICAgICAgXCJVcCB0byA1MCBwcm9qZWN0IG1lbWJlcnNcIixcbiAgICAgIFwiVW5saW1pdGVkIHRhc2tzIGFuZCBwcm9qZWN0c1wiLFxuICAgICAgXCI1MEdCIHN0b3JhZ2VcIixcbiAgICAgIFwiSW50ZWdyYXRpb25zXCIsXG4gICAgICBcIlByaW9yaXR5IHN1cHBvcnRcIixcbiAgICAgIFwiQWR2YW5jZWQgc3VwcG9ydFwiLFxuICAgICAgXCJFeHBvcnQgc3VwcG9ydFwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJCdXNpbmVzc1wiLFxuICAgIG1vbnRobHlQcmljZTogMTksXG4gICAgYnV0dG9uVGV4dDogXCJTaWduIHVwIG5vd1wiLFxuICAgIHBvcHVsYXI6IGZhbHNlLFxuICAgIGludmVyc2U6IGZhbHNlLFxuICAgIGZlYXR1cmVzOiBbXG4gICAgICBcIlVwIHRvIDUgcHJvamVjdCBtZW1iZXJzXCIsXG4gICAgICBcIlVubGltaXRlZCB0YXNrcyBhbmQgcHJvamVjdHNcIixcbiAgICAgIFwiMjAwR0Igc3RvcmFnZVwiLFxuICAgICAgXCJJbnRlZ3JhdGlvbnNcIixcbiAgICAgIFwiRGVkaWNhdGVkIGFjY291bnQgbWFuYWdlclwiLFxuICAgICAgXCJDdXN0b20gZmllbGRzXCIsXG4gICAgICBcIkFkdmFuY2VkIGFuYWx5dGljc1wiLFxuICAgICAgXCJFeHBvcnQgY2FwYWJpbGl0aWVzXCIsXG4gICAgICBcIkFQSSBhY2Nlc3NcIixcbiAgICAgIFwiQWR2YW5jZWQgc2VjdXJpdHkgZmVhdHVyZXNcIixcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFByaWNpbmcgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMjQgYmctd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkaW5nXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIlwiPlByaWNpbmc8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNlY3Rpb24tZGVzY3JpcHRpb24gbXQtNVwiPlxuICAgICAgICAgICAgRnJlZSBmb3JldmVyLiBVcGdyYWRlIGZvciB1bmxpbWl0ZWQgdGFza3MsIGJldHRlciBzZWN1cml0eSwgYW5kXG4gICAgICAgICAgICBleGNsdXNpdmUgZmVhdHVyZXMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC02IGl0ZW1zLWNlbnRlciBtdC0xMCBsZzpmbGV4LXJvdyBsZzppdGVtcy1lbmQgbGc6anVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICB7cHJpY2luZ1RpZXJzLm1hcChcbiAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgICBtb250aGx5UHJpY2UsXG4gICAgICAgICAgICAgIGJ1dHRvblRleHQsXG4gICAgICAgICAgICAgIHBvcHVsYXIsXG4gICAgICAgICAgICAgIGludmVyc2UsXG4gICAgICAgICAgICAgIGZlYXR1cmVzLFxuICAgICAgICAgICAgfSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IC8vIEFkZGVkIGtleSBwcm9wIGhlcmVcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3R3TWVyZ2UoXG4gICAgICAgICAgICAgICAgICBcImNhcmRcIixcbiAgICAgICAgICAgICAgICAgIGludmVyc2UgPT09IHRydWUgJiYgXCJib3JkZXItYmxhY2sgYmctYmxhY2sgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3R3TWVyZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWJsYWNrLzUwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaW52ZXJzZSA9PT0gdHJ1ZSAmJiBcInRleHQtd2hpdGUvNjBcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAge3BvcHVsYXIgPT09IHRydWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IHRleHQtc20gcHgtNCBweS0xLjUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXdoaXRlLzIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvblg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdDogSW5maW5pdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVhc2U6IFwibGluZWFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdFR5cGU6IFwibG9vcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVtsaW5lYXItZ3JhZGllbnQodG9fcmlnaHQsI0REN0RERiwjRTFDRDg2LCNCQkNCOTIsIzcxQzJFRiwjM0JGRkZGLCNERDdEREYsI0UxQ0Q4NiwjQkJDQjkyLCM3MUMyRUYsIzNCRkZGRiwjREQ3RERGKV0gW2JhY2tncm91bmQtc2l6ZToyMDAlXSB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBmb250LW1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgUG9wdWxhclxuICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtYmFzZWxpbmUgZ2FwLTEgbXQtWzMwcHhdXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRlciBsZWFkaW5nLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgJHttb250aGx5UHJpY2V9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFja2luZy10aWdodCBmb250LWJvbGQgdGV4dC1ibGFjay81MFwiPlxuICAgICAgICAgICAgICAgICAgICAvbW9udGhcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3R3TWVyZ2UoXG4gICAgICAgICAgICAgICAgICAgIFwiYnRuIGJ0bi1wcmltYXJ5IHctZnVsbCBtdC1bMzBweF1cIixcbiAgICAgICAgICAgICAgICAgICAgaW52ZXJzZSA9PT0gdHJ1ZSAmJiBcImJnLXdoaXRlIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7YnV0dG9uVGV4dH1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNSBtdC04XCI+XG4gICAgICAgICAgICAgICAgICB7ZmVhdHVyZXMubWFwKChmZWF0dXJlLCBmZWF0dXJlSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17ZmVhdHVyZUluZGV4fSBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrSWNvbiBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZmVhdHVyZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiQ2hlY2tJY29uIiwidHdNZXJnZSIsIm1vdGlvbiIsInByaWNpbmdUaWVycyIsInRpdGxlIiwibW9udGhseVByaWNlIiwiYnV0dG9uVGV4dCIsInBvcHVsYXIiLCJpbnZlcnNlIiwiZmVhdHVyZXMiLCJQcmljaW5nIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwicCIsIm1hcCIsImluZGV4IiwiaDMiLCJzcGFuIiwiYW5pbWF0ZSIsImJhY2tncm91bmRQb3NpdGlvblgiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJyZXBlYXQiLCJJbmZpbml0eSIsImVhc2UiLCJyZXBlYXRUeXBlIiwiYnV0dG9uIiwidWwiLCJmZWF0dXJlIiwiZmVhdHVyZUluZGV4IiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/sections/Pricing.tsx\n"));

/***/ })

});