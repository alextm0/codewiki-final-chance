"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-parse-selector";
exports.ids = ["vendor-chunks/hast-util-parse-selector"];
exports.modules = {

/***/ "(ssr)/./node_modules/hast-util-parse-selector/lib/index.js":
/*!************************************************************!*\
  !*** ./node_modules/hast-util-parse-selector/lib/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseSelector: () => (/* binding */ parseSelector)\n/* harmony export */ });\n/**\n * @typedef {import('hast').Element} Element\n * @typedef {import('hast').Properties} Properties\n */ /**\n * @template {string} SimpleSelector\n *   Selector type.\n * @template {string} DefaultTagName\n *   Default tag name.\n * @typedef {(\n *   SimpleSelector extends ''\n *     ? DefaultTagName\n *     : SimpleSelector extends `${infer TagName}.${infer Rest}`\n *     ? ExtractTagName<TagName, DefaultTagName>\n *     : SimpleSelector extends `${infer TagName}#${infer Rest}`\n *     ? ExtractTagName<TagName, DefaultTagName>\n *     : SimpleSelector extends string\n *     ? SimpleSelector\n *     : DefaultTagName\n * )} ExtractTagName\n *   Extract tag name from a simple selector.\n */ const search = /[#.]/g;\n/**\n * Create a hast element from a simple CSS selector.\n *\n * @template {string} Selector\n *   Type of selector.\n * @template {string} [DefaultTagName='div']\n *   Type of default tag name (default: `'div'`).\n * @param {Selector | null | undefined} [selector]\n *   Simple CSS selector (optional).\n *\n *   Can contain a tag name (`foo`), classes (`.bar`), and an ID (`#baz`).\n *   Multiple classes are allowed.\n *   Uses the last ID if multiple IDs are found.\n * @param {DefaultTagName | null | undefined} [defaultTagName='div']\n *   Tag name to use if `selector` does not specify one (default: `'div'`).\n * @returns {Element & {tagName: ExtractTagName<Selector, DefaultTagName>}}\n *   Built element.\n */ function parseSelector(selector, defaultTagName) {\n    const value = selector || \"\";\n    /** @type {Properties} */ const props = {};\n    let start = 0;\n    /** @type {string | undefined} */ let previous;\n    /** @type {string | undefined} */ let tagName;\n    while(start < value.length){\n        search.lastIndex = start;\n        const match = search.exec(value);\n        const subvalue = value.slice(start, match ? match.index : value.length);\n        if (subvalue) {\n            if (!previous) {\n                tagName = subvalue;\n            } else if (previous === \"#\") {\n                props.id = subvalue;\n            } else if (Array.isArray(props.className)) {\n                props.className.push(subvalue);\n            } else {\n                props.className = [\n                    subvalue\n                ];\n            }\n            start += subvalue.length;\n        }\n        if (match) {\n            previous = match[0];\n            start++;\n        }\n    }\n    return {\n        type: \"element\",\n        // @ts-expect-error: tag name is parsed.\n        tagName: tagName || defaultTagName || \"div\",\n        properties: props,\n        children: []\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXBhcnNlLXNlbGVjdG9yL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7OztDQUdDLEdBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBaUJDLEdBRUQsTUFBTUEsU0FBUztBQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztDQWlCQyxHQUNNLFNBQVNDLGNBQWNDLFFBQVEsRUFBRUMsY0FBYztJQUNwRCxNQUFNQyxRQUFRRixZQUFZO0lBQzFCLHVCQUF1QixHQUN2QixNQUFNRyxRQUFRLENBQUM7SUFDZixJQUFJQyxRQUFRO0lBQ1osK0JBQStCLEdBQy9CLElBQUlDO0lBQ0osK0JBQStCLEdBQy9CLElBQUlDO0lBRUosTUFBT0YsUUFBUUYsTUFBTUssTUFBTSxDQUFFO1FBQzNCVCxPQUFPVSxTQUFTLEdBQUdKO1FBQ25CLE1BQU1LLFFBQVFYLE9BQU9ZLElBQUksQ0FBQ1I7UUFDMUIsTUFBTVMsV0FBV1QsTUFBTVUsS0FBSyxDQUFDUixPQUFPSyxRQUFRQSxNQUFNSSxLQUFLLEdBQUdYLE1BQU1LLE1BQU07UUFFdEUsSUFBSUksVUFBVTtZQUNaLElBQUksQ0FBQ04sVUFBVTtnQkFDYkMsVUFBVUs7WUFDWixPQUFPLElBQUlOLGFBQWEsS0FBSztnQkFDM0JGLE1BQU1XLEVBQUUsR0FBR0g7WUFDYixPQUFPLElBQUlJLE1BQU1DLE9BQU8sQ0FBQ2IsTUFBTWMsU0FBUyxHQUFHO2dCQUN6Q2QsTUFBTWMsU0FBUyxDQUFDQyxJQUFJLENBQUNQO1lBQ3ZCLE9BQU87Z0JBQ0xSLE1BQU1jLFNBQVMsR0FBRztvQkFBQ047aUJBQVM7WUFDOUI7WUFFQVAsU0FBU08sU0FBU0osTUFBTTtRQUMxQjtRQUVBLElBQUlFLE9BQU87WUFDVEosV0FBV0ksS0FBSyxDQUFDLEVBQUU7WUFDbkJMO1FBQ0Y7SUFDRjtJQUVBLE9BQU87UUFDTGUsTUFBTTtRQUNOLHdDQUF3QztRQUN4Q2IsU0FBU0EsV0FBV0wsa0JBQWtCO1FBQ3RDbUIsWUFBWWpCO1FBQ1prQixVQUFVLEVBQUU7SUFDZDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29kZXdpa2lfbmV4dC8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtcGFyc2Utc2VsZWN0b3IvbGliL2luZGV4LmpzP2NhYmQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuRWxlbWVudH0gRWxlbWVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlByb3BlcnRpZXN9IFByb3BlcnRpZXNcbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7c3RyaW5nfSBTaW1wbGVTZWxlY3RvclxuICogICBTZWxlY3RvciB0eXBlLlxuICogQHRlbXBsYXRlIHtzdHJpbmd9IERlZmF1bHRUYWdOYW1lXG4gKiAgIERlZmF1bHQgdGFnIG5hbWUuXG4gKiBAdHlwZWRlZiB7KFxuICogICBTaW1wbGVTZWxlY3RvciBleHRlbmRzICcnXG4gKiAgICAgPyBEZWZhdWx0VGFnTmFtZVxuICogICAgIDogU2ltcGxlU2VsZWN0b3IgZXh0ZW5kcyBgJHtpbmZlciBUYWdOYW1lfS4ke2luZmVyIFJlc3R9YFxuICogICAgID8gRXh0cmFjdFRhZ05hbWU8VGFnTmFtZSwgRGVmYXVsdFRhZ05hbWU+XG4gKiAgICAgOiBTaW1wbGVTZWxlY3RvciBleHRlbmRzIGAke2luZmVyIFRhZ05hbWV9IyR7aW5mZXIgUmVzdH1gXG4gKiAgICAgPyBFeHRyYWN0VGFnTmFtZTxUYWdOYW1lLCBEZWZhdWx0VGFnTmFtZT5cbiAqICAgICA6IFNpbXBsZVNlbGVjdG9yIGV4dGVuZHMgc3RyaW5nXG4gKiAgICAgPyBTaW1wbGVTZWxlY3RvclxuICogICAgIDogRGVmYXVsdFRhZ05hbWVcbiAqICl9IEV4dHJhY3RUYWdOYW1lXG4gKiAgIEV4dHJhY3QgdGFnIG5hbWUgZnJvbSBhIHNpbXBsZSBzZWxlY3Rvci5cbiAqL1xuXG5jb25zdCBzZWFyY2ggPSAvWyMuXS9nXG5cbi8qKlxuICogQ3JlYXRlIGEgaGFzdCBlbGVtZW50IGZyb20gYSBzaW1wbGUgQ1NTIHNlbGVjdG9yLlxuICpcbiAqIEB0ZW1wbGF0ZSB7c3RyaW5nfSBTZWxlY3RvclxuICogICBUeXBlIG9mIHNlbGVjdG9yLlxuICogQHRlbXBsYXRlIHtzdHJpbmd9IFtEZWZhdWx0VGFnTmFtZT0nZGl2J11cbiAqICAgVHlwZSBvZiBkZWZhdWx0IHRhZyBuYW1lIChkZWZhdWx0OiBgJ2RpdidgKS5cbiAqIEBwYXJhbSB7U2VsZWN0b3IgfCBudWxsIHwgdW5kZWZpbmVkfSBbc2VsZWN0b3JdXG4gKiAgIFNpbXBsZSBDU1Mgc2VsZWN0b3IgKG9wdGlvbmFsKS5cbiAqXG4gKiAgIENhbiBjb250YWluIGEgdGFnIG5hbWUgKGBmb29gKSwgY2xhc3NlcyAoYC5iYXJgKSwgYW5kIGFuIElEIChgI2JhemApLlxuICogICBNdWx0aXBsZSBjbGFzc2VzIGFyZSBhbGxvd2VkLlxuICogICBVc2VzIHRoZSBsYXN0IElEIGlmIG11bHRpcGxlIElEcyBhcmUgZm91bmQuXG4gKiBAcGFyYW0ge0RlZmF1bHRUYWdOYW1lIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2RlZmF1bHRUYWdOYW1lPSdkaXYnXVxuICogICBUYWcgbmFtZSB0byB1c2UgaWYgYHNlbGVjdG9yYCBkb2VzIG5vdCBzcGVjaWZ5IG9uZSAoZGVmYXVsdDogYCdkaXYnYCkuXG4gKiBAcmV0dXJucyB7RWxlbWVudCAmIHt0YWdOYW1lOiBFeHRyYWN0VGFnTmFtZTxTZWxlY3RvciwgRGVmYXVsdFRhZ05hbWU+fX1cbiAqICAgQnVpbHQgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU2VsZWN0b3Ioc2VsZWN0b3IsIGRlZmF1bHRUYWdOYW1lKSB7XG4gIGNvbnN0IHZhbHVlID0gc2VsZWN0b3IgfHwgJydcbiAgLyoqIEB0eXBlIHtQcm9wZXJ0aWVzfSAqL1xuICBjb25zdCBwcm9wcyA9IHt9XG4gIGxldCBzdGFydCA9IDBcbiAgLyoqIEB0eXBlIHtzdHJpbmcgfCB1bmRlZmluZWR9ICovXG4gIGxldCBwcmV2aW91c1xuICAvKiogQHR5cGUge3N0cmluZyB8IHVuZGVmaW5lZH0gKi9cbiAgbGV0IHRhZ05hbWVcblxuICB3aGlsZSAoc3RhcnQgPCB2YWx1ZS5sZW5ndGgpIHtcbiAgICBzZWFyY2gubGFzdEluZGV4ID0gc3RhcnRcbiAgICBjb25zdCBtYXRjaCA9IHNlYXJjaC5leGVjKHZhbHVlKVxuICAgIGNvbnN0IHN1YnZhbHVlID0gdmFsdWUuc2xpY2Uoc3RhcnQsIG1hdGNoID8gbWF0Y2guaW5kZXggOiB2YWx1ZS5sZW5ndGgpXG5cbiAgICBpZiAoc3VidmFsdWUpIHtcbiAgICAgIGlmICghcHJldmlvdXMpIHtcbiAgICAgICAgdGFnTmFtZSA9IHN1YnZhbHVlXG4gICAgICB9IGVsc2UgaWYgKHByZXZpb3VzID09PSAnIycpIHtcbiAgICAgICAgcHJvcHMuaWQgPSBzdWJ2YWx1ZVxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHByb3BzLmNsYXNzTmFtZSkpIHtcbiAgICAgICAgcHJvcHMuY2xhc3NOYW1lLnB1c2goc3VidmFsdWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wcy5jbGFzc05hbWUgPSBbc3VidmFsdWVdXG4gICAgICB9XG5cbiAgICAgIHN0YXJ0ICs9IHN1YnZhbHVlLmxlbmd0aFxuICAgIH1cblxuICAgIGlmIChtYXRjaCkge1xuICAgICAgcHJldmlvdXMgPSBtYXRjaFswXVxuICAgICAgc3RhcnQrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IHRhZyBuYW1lIGlzIHBhcnNlZC5cbiAgICB0YWdOYW1lOiB0YWdOYW1lIHx8IGRlZmF1bHRUYWdOYW1lIHx8ICdkaXYnLFxuICAgIHByb3BlcnRpZXM6IHByb3BzLFxuICAgIGNoaWxkcmVuOiBbXVxuICB9XG59XG4iXSwibmFtZXMiOlsic2VhcmNoIiwicGFyc2VTZWxlY3RvciIsInNlbGVjdG9yIiwiZGVmYXVsdFRhZ05hbWUiLCJ2YWx1ZSIsInByb3BzIiwic3RhcnQiLCJwcmV2aW91cyIsInRhZ05hbWUiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJtYXRjaCIsImV4ZWMiLCJzdWJ2YWx1ZSIsInNsaWNlIiwiaW5kZXgiLCJpZCIsIkFycmF5IiwiaXNBcnJheSIsImNsYXNzTmFtZSIsInB1c2giLCJ0eXBlIiwicHJvcGVydGllcyIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hast-util-parse-selector/lib/index.js\n");

/***/ })

};
;