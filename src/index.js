"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var App_1 = __importDefault(require("./App"));
react_dom_1["default"].render((0, jsx_runtime_1.jsx)(react_1["default"].StrictMode, { children: (0, jsx_runtime_1.jsx)(App_1["default"], {}, void 0) }, void 0), document.getElementById("root"));
