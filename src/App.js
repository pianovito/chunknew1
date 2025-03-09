"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./styles.css");
var App = function () {
    // State variables
    var _a = (0, react_1.useState)("A1"), cefrLevel = _a[0], setCefrLevel = _a[1];
    var _b = (0, react_1.useState)("Travel"), topic = _b[0], setTopic = _b[1]; // Allow any topic input
    var _c = (0, react_1.useState)("conditionals"), grammarFunction = _c[0], setGrammarFunction = _c[1];
    var _d = (0, react_1.useState)(""), sentence = _d[0], setSentence = _d[1];
    var _e = (0, react_1.useState)(""), example = _e[0], setExample = _e[1];
    var _f = (0, react_1.useState)(30), timer = _f[0], setTimer = _f[1];
    var _g = (0, react_1.useState)(false), isRunning = _g[0], setIsRunning = _g[1];
    var _h = (0, react_1.useState)({
        correct: 0,
        incorrect: 0
    }), score = _h[0], setScore = _h[1];
    var _j = (0, react_1.useState)(false), showSolution = _j[0], setShowSolution = _j[1];
    var _k = (0, react_1.useState)(""), userAnswer = _k[0], setUserAnswer = _k[1];
    var _l = (0, react_1.useState)(null), isCorrect = _l[0], setIsCorrect = _l[1];
    // Constants for dropdown options
    var cefrLevels = ["A1", "A2", "B1", "B2", "C1", "C2"];
    var grammarFunctions = [
        "conditionals",
        "comparatives",
        "reported speech",
        "English tenses",
        "past tenses",
        "future tenses",
        "miscellaneous",
    ];
    // Function to generate a sentence using Gemini API
    var generateSentence = function () { return __awaiter(void 0, void 0, void 0, function () {
        var randomElement, prompt, response, data, generatedText, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    randomElement = Math.random().toString(36).substring(7);
                    prompt = "Generate a short, incomplete ESL sentence for CEFR level " + cefrLevel + " about " + topic + " focusing on " + grammarFunction + ". The sentence should be challenging but appropriate for the level. " + randomElement;
                    if (grammarFunction === "conditionals") {
                        prompt = "Generate only the \"if\" clause or conditional clause of a sentence for CEFR level " + cefrLevel + " about " + topic + ". " + randomElement;
                    }
                    else if (grammarFunction === "reported speech") {
                        prompt = "Generate a direct speech sentence for CEFR level " + cefrLevel + " about " + topic + ". " + randomElement;
                    }
                    else if (grammarFunction === "comparatives") {
                        prompt = "Generate a sentence for CEFR level " + cefrLevel + " about " + topic + " focusing on comparatives. The sentence should have a blank for the adjective or adverb, excluding the comparative structure (e.g., \"more/less\" or \"as\"). Example: \"She is _____ than her sister.\" " + randomElement;
                    }
                    else if (grammarFunction === "future tenses" ||
                        grammarFunction === "past tenses" ||
                        grammarFunction === "English tenses") {
                        prompt = "Generate a fill-in-the-gap sentence for CEFR level " + cefrLevel + " about " + topic + " focusing on " + grammarFunction + ". The sentence should have a gap for the correct verb tense and should not always start with \"By the time...\". Example: \"She _____ (go) to the park yesterday.\" " + randomElement;
                    }
                    console.log("Prompt:", prompt); // Log the prompt
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyC0UR9FCQ_IWGN1_yPEV-_4mO3U7Dwm6_0", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                contents: [
                                    {
                                        parts: [
                                            {
                                                text: prompt
                                            },
                                        ]
                                    },
                                ]
                            })
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("API request failed with status " + response.status);
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    console.log("API Response:", data); // Log the full response
                    generatedText = data.candidates[0].content.parts[0].text;
                    // Set the generated sentence and example
                    setSentence(generatedText);
                    setExample(""); // Clear the example initially
                    setShowSolution(false); // Hide the solution initially
                    setUserAnswer(""); // Clear the user's answer
                    setIsCorrect(null); // Reset correctness state
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error("Error generating sentence:", error_1);
                    setSentence("Failed to generate sentence. Please try again.");
                    setExample("");
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    // Function to show the solution
    var showSolutionHandler = function () { return __awaiter(void 0, void 0, void 0, function () {
        var prompt_1, response, data, generatedText, error_2, prompt_2, response, data, generatedText, error_3, prompt_3, response, data, generatedText, error_4, prompt_4, response, data, generatedText, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(grammarFunction === "future tenses" ||
                        grammarFunction === "past tenses" ||
                        grammarFunction === "English tenses")) return [3 /*break*/, 6];
                    prompt_1 = "Fill in the gap in the following sentence with the correct verb tense: " + sentence;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyC0UR9FCQ_IWGN1_yPEV-_4mO3U7Dwm6_0", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                contents: [
                                    {
                                        parts: [
                                            {
                                                text: prompt_1
                                            },
                                        ]
                                    },
                                ]
                            })
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("API request failed with status " + response.status);
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    generatedText = data.candidates[0].content.parts[0].text;
                    setExample(generatedText); // Set the correct answer
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    console.error("Error generating solution:", error_2);
                    setExample("Failed to generate solution. Please try again.");
                    return [3 /*break*/, 5];
                case 5: return [3 /*break*/, 23];
                case 6:
                    if (!(grammarFunction === "conditionals")) return [3 /*break*/, 12];
                    prompt_2 = "Complete the following conditional sentence: " + sentence;
                    _a.label = 7;
                case 7:
                    _a.trys.push([7, 10, , 11]);
                    return [4 /*yield*/, fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyC0UR9FCQ_IWGN1_yPEV-_4mO3U7Dwm6_0", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                contents: [
                                    {
                                        parts: [
                                            {
                                                text: prompt_2
                                            },
                                        ]
                                    },
                                ]
                            })
                        })];
                case 8:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("API request failed with status " + response.status);
                    }
                    return [4 /*yield*/, response.json()];
                case 9:
                    data = _a.sent();
                    generatedText = data.candidates[0].content.parts[0].text;
                    setExample(generatedText); // Set the full solution
                    return [3 /*break*/, 11];
                case 10:
                    error_3 = _a.sent();
                    console.error("Error generating solution:", error_3);
                    setExample("Failed to generate solution. Please try again.");
                    return [3 /*break*/, 11];
                case 11: return [3 /*break*/, 23];
                case 12:
                    if (!(grammarFunction === "reported speech")) return [3 /*break*/, 18];
                    prompt_3 = "Convert the following direct speech into reported speech: " + sentence;
                    _a.label = 13;
                case 13:
                    _a.trys.push([13, 16, , 17]);
                    return [4 /*yield*/, fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyC0UR9FCQ_IWGN1_yPEV-_4mO3U7Dwm6_0", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                contents: [
                                    {
                                        parts: [
                                            {
                                                text: prompt_3
                                            },
                                        ]
                                    },
                                ]
                            })
                        })];
                case 14:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("API request failed with status " + response.status);
                    }
                    return [4 /*yield*/, response.json()];
                case 15:
                    data = _a.sent();
                    generatedText = data.candidates[0].content.parts[0].text;
                    setExample(generatedText); // Set the reported speech solution
                    return [3 /*break*/, 17];
                case 16:
                    error_4 = _a.sent();
                    console.error("Error generating solution:", error_4);
                    setExample("Failed to generate solution. Please try again.");
                    return [3 /*break*/, 17];
                case 17: return [3 /*break*/, 23];
                case 18:
                    if (!(grammarFunction === "comparatives")) return [3 /*break*/, 23];
                    prompt_4 = "Fill in the blank with the correct adjective or adverb in the following sentence: " + sentence;
                    _a.label = 19;
                case 19:
                    _a.trys.push([19, 22, , 23]);
                    return [4 /*yield*/, fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyC0UR9FCQ_IWGN1_yPEV-_4mO3U7Dwm6_0", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                contents: [
                                    {
                                        parts: [
                                            {
                                                text: prompt_4
                                            },
                                        ]
                                    },
                                ]
                            })
                        })];
                case 20:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("API request failed with status " + response.status);
                    }
                    return [4 /*yield*/, response.json()];
                case 21:
                    data = _a.sent();
                    generatedText = data.candidates[0].content.parts[0].text;
                    setExample(generatedText); // Set the correct answer
                    return [3 /*break*/, 23];
                case 22:
                    error_5 = _a.sent();
                    console.error("Error generating solution:", error_5);
                    setExample("Failed to generate solution. Please try again.");
                    return [3 /*break*/, 23];
                case 23:
                    setShowSolution(true); // Show the solution
                    return [2 /*return*/];
            }
        });
    }); };
    // Function to check the user's answer
    var checkAnswer = function () {
        // Normalize the user's answer and the correct answer
        var normalizedUserAnswer = userAnswer
            .trim() // Remove leading/trailing spaces
            .toLowerCase() // Convert to lowercase
            .replace(/[^\w\s]/g, ""); // Remove punctuation
        var normalizedCorrectAnswer = example
            .trim() // Remove leading/trailing spaces
            .toLowerCase() // Convert to lowercase
            .replace(/[^\w\s]/g, ""); // Remove punctuation
        // Compare the normalized answers
        if (normalizedUserAnswer === normalizedCorrectAnswer) {
            setIsCorrect(true);
            setScore(function (prev) { return (__assign(__assign({}, prev), { correct: prev.correct + 1 })); });
        }
        else {
            setIsCorrect(false);
            setScore(function (prev) { return (__assign(__assign({}, prev), { incorrect: prev.incorrect + 1 })); });
        }
    };
    // Handle correct answer
    var handleCorrect = function () {
        setScore(function (prev) { return (__assign(__assign({}, prev), { correct: prev.correct + 1 })); });
        setTimer(30); // Reset the timer
        generateSentence();
    };
    // Handle incorrect answer
    var handleIncorrect = function () {
        setScore(function (prev) { return (__assign(__assign({}, prev), { incorrect: prev.incorrect + 1 })); });
        setTimer(30); // Reset the timer
        generateSentence();
    };
    // Timer logic
    (0, react_1.useEffect)(function () {
        if (isRunning) {
            var interval_1 = setInterval(function () {
                setTimer(function (prev) {
                    if (prev === 0) {
                        generateSentence();
                        return 30;
                    }
                    return prev - 1;
                });
            }, 1000);
            return function () { return clearInterval(interval_1); };
        }
    }, [isRunning]);
    // Start the timer and generate the first sentence
    var handleStart = function () {
        setIsRunning(true);
        generateSentence();
    };
    // Stop the timer and reset the UI
    var handleStop = function () {
        setIsRunning(false);
        setTimer(30);
        setSentence("");
        setExample("");
        setShowSolution(false);
        setUserAnswer("");
        setIsCorrect(null);
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "app" }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "ESL Sentence Generator" }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "controls" }, { children: [(0, jsx_runtime_1.jsxs)("label", { children: ["CEFR Level:", (0, jsx_runtime_1.jsx)("select", __assign({ value: cefrLevel, onChange: function (e) { return setCefrLevel(e.target.value); }, disabled: isRunning }, { children: cefrLevels.map(function (level) { return ((0, jsx_runtime_1.jsx)("option", __assign({ value: level }, { children: level }), level)); }) }), void 0)] }, void 0), (0, jsx_runtime_1.jsxs)("label", { children: ["Topic:", (0, jsx_runtime_1.jsx)("input", { type: "text", value: topic, onChange: function (e) { return setTopic(e.target.value); }, placeholder: "Enter a topic", disabled: isRunning }, void 0)] }, void 0), (0, jsx_runtime_1.jsxs)("label", { children: ["Grammar Function:", (0, jsx_runtime_1.jsx)("select", __assign({ value: grammarFunction, onChange: function (e) {
                                    return setGrammarFunction(e.target.value);
                                }, disabled: isRunning }, { children: grammarFunctions.map(function (func) { return ((0, jsx_runtime_1.jsx)("option", __assign({ value: func }, { children: func }), func)); }) }), void 0)] }, void 0), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: handleStart, disabled: isRunning }, { children: "Start" }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: handleStop, disabled: !isRunning }, { children: "Stop" }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: generateSentence, disabled: !isRunning }, { children: "Generate Next" }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "sentence-container" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Sentence:" }, void 0), (0, jsx_runtime_1.jsx)("p", { children: sentence }, void 0), (grammarFunction === "future tenses" ||
                        grammarFunction === "past tenses" ||
                        grammarFunction === "English tenses" ||
                        grammarFunction === "comparatives") && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { type: "text", value: userAnswer, onChange: function (e) { return setUserAnswer(e.target.value); }, placeholder: "Fill in the gap", disabled: showSolution }, void 0), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: checkAnswer, disabled: showSolution }, { children: "Check Answer" }), void 0), isCorrect !== null && ((0, jsx_runtime_1.jsx)("p", { children: isCorrect ? "Correct! 🎉" : "Incorrect. Try again! ❌" }, void 0))] }, void 0)), showSolution && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Solution:" }, void 0), (0, jsx_runtime_1.jsx)("p", { children: example }, void 0)] }, void 0)), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "timer" }, { children: ["Time Left: ", timer, "s"] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "score" }, { children: ["Correct: ", score.correct, " | Incorrect: ", score.incorrect] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "buttons" }, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ onClick: handleCorrect, disabled: !isRunning }, { children: "Correct" }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: handleIncorrect, disabled: !isRunning }, { children: "Incorrect" }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: showSolutionHandler, disabled: !isRunning || showSolution }, { children: "Show Solution" }), void 0)] }), void 0)] }), void 0)] }), void 0));
};
exports["default"] = App;
