"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/hello.js":
/*!****************************!*\
  !*** ./pages/api/hello.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _util_db_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/db.connect */ \"(api)/./util/db.connect.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n// hossam\n// import dbConnect from \"../../utiles/dbConnect\";\n// export default async function handler(req, res) {\n//     try {\n//         await dbConnect();\n//         console.log(\"Database connected successfully\");\n//     } catch (error) {\n//         console.log(error);\n//     }\n// }\n//Ahmed Magdy\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst mongodb = __webpack_require__(/*! mongodb */ \"mongodb\");\n\nasync function handler(req, res) {\n    const client = await _util_db_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const db = client.db(\"next_test\");\n    // let myPost = await db.collection(\"test\").insertOne({name:\"mego\"});\n    // console.log(myPost);\n    res.status(200).json({\n        message: \"Database connected successfully\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGVsbG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2RUFBNkU7QUFFN0UsU0FBUztBQUNULGtEQUFrRDtBQUVsRCxvREFBb0Q7QUFDcEQsWUFBWTtBQUNaLDZCQUE2QjtBQUM3QiwwREFBMEQ7QUFDMUQsd0JBQXdCO0FBQ3hCLDhCQUE4QjtBQUM5QixRQUFRO0FBQ1IsSUFBSTtBQUVKLGFBQWE7QUFDYiw2RUFBNkU7QUFDN0UsTUFBTUEsVUFBVUMsbUJBQU9BLENBQUMsd0JBQVM7QUFDaUI7QUFFbkMsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsTUFBTUMsU0FBUyxNQUFNSix3REFBYUE7SUFDbEMsTUFBTUssS0FBS0QsT0FBT0MsRUFBRSxDQUFDO0lBQ3JCLHFFQUFxRTtJQUNyRSx1QkFBdUI7SUFDdkJGLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsU0FBUztJQUFrQztBQUN0RSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC8uL3BhZ2VzL2FwaS9oZWxsby5qcz8xZjc0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcblxyXG4vLyBob3NzYW1cclxuLy8gaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiLi4vLi4vdXRpbGVzL2RiQ29ubmVjdFwiO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGFiYXNlIGNvbm5lY3RlZCBzdWNjZXNzZnVsbHlcIik7XHJcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy9BaG1lZCBNYWdkeVxyXG4vLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5jb25zdCBtb25nb2RiID0gcmVxdWlyZShcIm1vbmdvZGJcIik7XHJcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi91dGlsL2RiLmNvbm5lY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYihcIm5leHRfdGVzdFwiKTtcclxuICAgIC8vIGxldCBteVBvc3QgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidGVzdFwiKS5pbnNlcnRPbmUoe25hbWU6XCJtZWdvXCJ9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKG15UG9zdCk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiRGF0YWJhc2UgY29ubmVjdGVkIHN1Y2Nlc3NmdWxseVwiIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJtb25nb2RiIiwicmVxdWlyZSIsImNsaWVudFByb21pc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY2xpZW50IiwiZGIiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/hello.js\n");

/***/ }),

/***/ "(api)/./util/db.connect.js":
/*!****************************!*\
  !*** ./util/db.connect.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {\n    useUnifiedTopology: true,\n    useNewUrlParser: true\n};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Add Mongo URI to .env.local\");\n}\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsL2RiLmNvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztBQUNuQyxNQUFNQyxVQUFVO0lBQ1pDLG9CQUFvQixJQUFJO0lBQ3hCQyxpQkFBaUIsSUFBSTtBQUN6QjtBQUVBLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJLENBQUNQLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO0lBQzFCLE1BQU0sSUFBSU0sTUFBTSwrQkFBK0I7QUFDbkQsQ0FBQztBQUVELElBQUlSLElBQXNDLEVBQUU7SUFDeEMsSUFBSSxDQUFDUyxPQUFPQyxtQkFBbUIsRUFBRTtRQUM3QkosU0FBUyxJQUFJUixnREFBV0EsQ0FBQ0MsS0FBS0k7UUFDOUJNLE9BQU9DLG1CQUFtQixHQUFHSixPQUFPSyxPQUFPO0lBQy9DLENBQUM7SUFDREosZ0JBQWdCRSxPQUFPQyxtQkFBbUI7QUFDOUMsT0FBTyxFQUdOO0FBRUQsaUVBQWVILGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0Ly4vdXRpbC9kYi5jb25uZWN0LmpzPzExMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbn07XHJcblxyXG5sZXQgY2xpZW50O1xyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkFkZCBNb25nbyBVUkkgdG8gLmVudi5sb2NhbFwiKTtcclxufVxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcclxuICAgIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcclxuICAgICAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICAgICAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbiAgICB9XHJcbiAgICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2U7XHJcbn0gZWxzZSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICAgIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlOyJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiRXJyb3IiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./util/db.connect.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/hello.js"));
module.exports = __webpack_exports__;

})();