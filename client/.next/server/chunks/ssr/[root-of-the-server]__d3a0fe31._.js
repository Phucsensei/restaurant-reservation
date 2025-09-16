module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/services/auth.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authService",
    ()=>authService
]);
const API_URL = ("TURBOPACK compile-time value", "http://localhost:3001/api");
const authService = {
    async login (credentials) {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(credentials)
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Login failed');
        }
        if (data.accessToken) {
            localStorage.setItem('accessToken', data.accessToken);
        }
        return data;
    },
    async register (credentials) {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Registration failed');
        }
        return data;
    },
    logout () {
        localStorage.removeItem('accessToken');
    },
    getAccessToken () {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return null;
    }
};
}),
"[project]/src/contexts/auth.context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/auth.service.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    user: null,
    loading: true,
    login: ()=>{},
    logout: ()=>{}
});
const useAuth = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].getAccessToken();
        if (token) {
            const tokenData = JSON.parse(atob(token.split('.')[1]));
            setUser({
                email: tokenData.email,
                id: tokenData.sub,
                name: tokenData.name || tokenData.email
            });
        }
        setLoading(false);
    }, []);
    const login = (userData)=>{
        setUser(userData);
    };
    const logout = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].logout();
        setUser(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            loading,
            login,
            logout
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/auth.context.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/assets/logo.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/logo.0d90af2b.svg");}),
"[project]/src/app/assets/logo.svg.mjs { IMAGE => \"[project]/src/app/assets/logo.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$logo$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/logo.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$logo$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 561,
    height: 86,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/gmail_logo.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/gmail_logo.611bbd8e.svg");}),
"[project]/src/app/assets/gmail_logo.svg.mjs { IMAGE => \"[project]/src/app/assets/gmail_logo.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$gmail_logo$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/gmail_logo.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$gmail_logo$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 20,
    height: 20,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/facebook_logo.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/facebook_logo.e5133be5.svg");}),
"[project]/src/app/assets/facebook_logo.svg.mjs { IMAGE => \"[project]/src/app/assets/facebook_logo.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$facebook_logo$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/facebook_logo.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$facebook_logo$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 20,
    height: 20,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/instagram_logo.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/instagram_logo.0c44e96a.svg");}),
"[project]/src/app/assets/instagram_logo.svg.mjs { IMAGE => \"[project]/src/app/assets/instagram_logo.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$instagram_logo$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/instagram_logo.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$instagram_logo$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 20,
    height: 20,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/twitter_logo.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/twitter_logo.75d0f9aa.svg");}),
"[project]/src/app/assets/twitter_logo.svg.mjs { IMAGE => \"[project]/src/app/assets/twitter_logo.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$twitter_logo$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/twitter_logo.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$twitter_logo$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 20,
    height: 20,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/menu_icon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/menu_icon.70421917.svg");}),
"[project]/src/app/assets/menu_icon.svg.mjs { IMAGE => \"[project]/src/app/assets/menu_icon.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$menu_icon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/menu_icon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$menu_icon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 21,
    height: 15,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/search_icon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/search_icon.4d7df3e6.svg");}),
"[project]/src/app/assets/search_icon.svg.mjs { IMAGE => \"[project]/src/app/assets/search_icon.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$search_icon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/search_icon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$search_icon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 16,
    height: 16,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/close_icon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/close_icon.be45fbd6.svg");}),
"[project]/src/app/assets/close_icon.svg.mjs { IMAGE => \"[project]/src/app/assets/close_icon.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$close_icon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/close_icon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$close_icon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 15,
    height: 15,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/users_icon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/users_icon.965a9ea5.svg");}),
"[project]/src/app/assets/users_icon.svg.mjs { IMAGE => \"[project]/src/app/assets/users_icon.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$users_icon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/users_icon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$users_icon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 12,
    height: 11,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/car_icon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/car_icon.b8733ec3.svg");}),
"[project]/src/app/assets/car_icon.svg.mjs { IMAGE => \"[project]/src/app/assets/car_icon.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_icon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/car_icon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_icon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 12,
    height: 10,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/location_icon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/location_icon.7c0d3fbb.svg");}),
"[project]/src/app/assets/location_icon.svg.mjs { IMAGE => \"[project]/src/app/assets/location_icon.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$location_icon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/location_icon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$location_icon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 8,
    height: 11,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/fuel_icon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/fuel_icon.1dcd9ae4.svg");}),
"[project]/src/app/assets/fuel_icon.svg.mjs { IMAGE => \"[project]/src/app/assets/fuel_icon.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$fuel_icon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/fuel_icon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$fuel_icon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 10,
    height: 10,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/addIcon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/addIcon.323583a8.svg");}),
"[project]/src/app/assets/addIcon.svg.mjs { IMAGE => \"[project]/src/app/assets/addIcon.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$addIcon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/addIcon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$addIcon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 16,
    height: 16,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/carIcon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/carIcon.035917da.svg");}),
"[project]/src/app/assets/carIcon.svg.mjs { IMAGE => \"[project]/src/app/assets/carIcon.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$carIcon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/carIcon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$carIcon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 19,
    height: 19,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/carIconColored.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/carIconColored.b2d8de66.svg");}),
"[project]/src/app/assets/carIconColored.svg.mjs { IMAGE => \"[project]/src/app/assets/carIconColored.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$carIconColored$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/carIconColored.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$carIconColored$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 19,
    height: 19,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/dashboardIcon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/dashboardIcon.f3dd6311.svg");}),
"[project]/src/app/assets/dashboardIcon.svg.mjs { IMAGE => \"[project]/src/app/assets/dashboardIcon.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$dashboardIcon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/dashboardIcon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$dashboardIcon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 20,
    height: 20,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/dashboardIconColored.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/dashboardIconColored.34adc420.svg");}),
"[project]/src/app/assets/dashboardIconColored.svg.mjs { IMAGE => \"[project]/src/app/assets/dashboardIconColored.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$dashboardIconColored$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/dashboardIconColored.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$dashboardIconColored$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 20,
    height: 20,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/addIconColored.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/addIconColored.f7763c59.svg");}),
"[project]/src/app/assets/addIconColored.svg.mjs { IMAGE => \"[project]/src/app/assets/addIconColored.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$addIconColored$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/addIconColored.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$addIconColored$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 16,
    height: 16,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/listIcon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/listIcon.83e9e570.svg");}),
"[project]/src/app/assets/listIcon.svg.mjs { IMAGE => \"[project]/src/app/assets/listIcon.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$listIcon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/listIcon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$listIcon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 16,
    height: 16,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/listIconColored.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/listIconColored.c4a51aa7.svg");}),
"[project]/src/app/assets/listIconColored.svg.mjs { IMAGE => \"[project]/src/app/assets/listIconColored.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$listIconColored$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/listIconColored.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$listIconColored$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 16,
    height: 16,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/cautionIconColored.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/cautionIconColored.3ab5ce58.svg");}),
"[project]/src/app/assets/cautionIconColored.svg.mjs { IMAGE => \"[project]/src/app/assets/cautionIconColored.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$cautionIconColored$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/cautionIconColored.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$cautionIconColored$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 18,
    height: 18,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/arrow_icon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/arrow_icon.a6937c7e.svg");}),
"[project]/src/app/assets/arrow_icon.svg.mjs { IMAGE => \"[project]/src/app/assets/arrow_icon.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$arrow_icon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/arrow_icon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$arrow_icon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 15,
    height: 12,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/star_icon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/star_icon.936bc23c.svg");}),
"[project]/src/app/assets/star_icon.svg.mjs { IMAGE => \"[project]/src/app/assets/star_icon.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$star_icon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/star_icon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$star_icon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 14,
    height: 15,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/check_icon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/check_icon.37a89014.svg");}),
"[project]/src/app/assets/check_icon.svg.mjs { IMAGE => \"[project]/src/app/assets/check_icon.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$check_icon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/check_icon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$check_icon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 16,
    height: 16,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/tick_icon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/tick_icon.24eac802.svg");}),
"[project]/src/app/assets/tick_icon.svg.mjs { IMAGE => \"[project]/src/app/assets/tick_icon.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$tick_icon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/tick_icon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$tick_icon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 16,
    height: 16,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/delete_icon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/delete_icon.20e947a6.svg");}),
"[project]/src/app/assets/delete_icon.svg.mjs { IMAGE => \"[project]/src/app/assets/delete_icon.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$delete_icon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/delete_icon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$delete_icon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 40,
    height: 40,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/eye_icon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/eye_icon.6a031351.svg");}),
"[project]/src/app/assets/eye_icon.svg.mjs { IMAGE => \"[project]/src/app/assets/eye_icon.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$eye_icon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/eye_icon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$eye_icon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 40,
    height: 40,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/eye_close_icon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/eye_close_icon.f673ceec.svg");}),
"[project]/src/app/assets/eye_close_icon.svg.mjs { IMAGE => \"[project]/src/app/assets/eye_close_icon.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$eye_close_icon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/eye_close_icon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$eye_close_icon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 40,
    height: 40,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/filter_icon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/filter_icon.f8d480b8.svg");}),
"[project]/src/app/assets/filter_icon.svg.mjs { IMAGE => \"[project]/src/app/assets/filter_icon.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$filter_icon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/filter_icon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$filter_icon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 20,
    height: 20,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/edit_icon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/edit_icon.1f459a63.svg");}),
"[project]/src/app/assets/edit_icon.svg.mjs { IMAGE => \"[project]/src/app/assets/edit_icon.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$edit_icon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/edit_icon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$edit_icon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 16,
    height: 16,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/calendar_icon_colored.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/calendar_icon_colored.afb0ff3b.svg");}),
"[project]/src/app/assets/calendar_icon_colored.svg.mjs { IMAGE => \"[project]/src/app/assets/calendar_icon_colored.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$calendar_icon_colored$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/calendar_icon_colored.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$calendar_icon_colored$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 14,
    height: 14,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/location_icon_colored.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/location_icon_colored.a6d24ddb.svg");}),
"[project]/src/app/assets/location_icon_colored.svg.mjs { IMAGE => \"[project]/src/app/assets/location_icon_colored.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$location_icon_colored$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/location_icon_colored.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$location_icon_colored$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 15,
    height: 16,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/testimonial_image_1.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/testimonial_image_1.c8f74b2b.png");}),
"[project]/src/app/assets/testimonial_image_1.png.mjs { IMAGE => \"[project]/src/app/assets/testimonial_image_1.png (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$testimonial_image_1$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/testimonial_image_1.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$testimonial_image_1$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 133,
    height: 133,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAMDAwM8RUlDmK23wJCYn/eWm6D2lKauvDdARD4CAwMCAC40NEOqw8vblaCm/3pfWP9/XE//o4+F/p6xtNcnKys8AGZqZsCIkY3/ZV5e/5l/df+ngnD/h2BO/3x2bP5UVVC2AJGkqPeDjIz/TD08/490cP+cd2n/bkk7/3Rtaf9/jJDvAJi7yPaKoKj/Qjo7/41zbv+je2z/Vzgu/2ppbf+Jq7nuAHSQnryWucr+e5Cd/3psa/9vUkn/TDYw/3mIkf5mgY2yACEpLz5DU2bXTlRl/oV0dP+Sd27/oI+I/nR9hNIdJSk3AAAAAQIICQ88IyMytoRycu+3mY3ulH91si0nJDcBAQECSO+CVt4jLFgAAAAASUVORK5CYII="
};
}),
"[project]/src/app/assets/testimonial_image_2.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/testimonial_image_2.face93b3.png");}),
"[project]/src/app/assets/testimonial_image_2.png.mjs { IMAGE => \"[project]/src/app/assets/testimonial_image_2.png (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$testimonial_image_2$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/testimonial_image_2.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$testimonial_image_2$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 133,
    height: 133,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAEBAQEpKSkqkZKPn7a3s+KSk4/lfHx5rDQ0MzcCAgICACoqKiuxsq/FxcbB/VNUUP8oKSX/kJCM/r2+vNQ7Ozs9AJiYlqLh4d79kJCN/yAfG/8oJiH/k5OP/+Li4P6ysrG/ANPT0ubj4+H/hH94/5F3Zf+ihXH/h393/+Xl4//n5+X5ANra2Orm5uT/s6GV/8ahhv/KpIr/tKSY/+jo5v/r6+n8AK2tq7Pq6uj+3c/F/9qukP/Zq47/3M7E/+vr6v/IyMfPAD8/PjzQ0M7Z5NrR/960lf/dtZn/3tbP/9nZ2eVUVFRSAAMDAwJERENDq5SDxt+6mfvjxKf9ua+n0VFQUFMGBgYFdOKitz1QuhwAAAAASUVORK5CYII="
};
}),
"[project]/src/app/assets/main_restaurant.jpg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/main_restaurant.333c1e19.jpg");}),
"[project]/src/app/assets/main_restaurant.jpg.mjs { IMAGE => \"[project]/src/app/assets/main_restaurant.jpg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$main_restaurant$2e$jpg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/main_restaurant.jpg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$main_restaurant$2e$jpg__$28$static__in__ecmascript$29$__["default"],
    width: 1367,
    height: 520,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAADAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwBV1C7hSTy52XFxsH09KmVeo3qzKGGpJaLof//Z"
};
}),
"[project]/src/app/assets/banner_car_image.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/banner_car_image.c24b13b0.png");}),
"[project]/src/app/assets/banner_car_image.png.mjs { IMAGE => \"[project]/src/app/assets/banner_car_image.png (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$banner_car_image$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/banner_car_image.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$banner_car_image$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 591,
    height: 284,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR42gGEAHv/AAoKCgojIyMlQkNDX1BSU7lfY2T1cXR2+0ZJS8ATExQoAGhpapl8fH3era6v9Lq6vPvAwMH/ubW4/7qrs/yLhIezAHV2fPFhYGL+iYuQ/oV+if+HhIj/jo+S/cHBwvVsbG7WAB4dHn0YFxivKiorvDg0NccuLC7JKiornh4eHmcNDQ1L1ic8VCliRtUAAAAASUVORK5CYII="
};
}),
"[project]/src/app/assets/user_profile.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/user_profile.5b9d7865.png");}),
"[project]/src/app/assets/user_profile.png.mjs { IMAGE => \"[project]/src/app/assets/user_profile.png (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$user_profile$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/user_profile.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$user_profile$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 400,
    height: 400,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5ElEQVR42mWNzUoCUQBG74vk3KHfrfQCQYt2EUGbaBVMC5clTkhCRYgEFfYA5qIfoiKEQkQEEVFXgoqKjjqooz7G8aq4EBcHPjgHPjHq2UywqiXuAya35jnFfBbHbuF0LMQ8iL1G+LzzEjKOCAev6Su5EGR+P/gLmTx7jnl7Ci4HTqNCIRomcnFKLZOYXbSbiGG3w4SBbVGOf/P/6KecS9Nt1ulbDYStRuzni8ClycPNFT7jhL3dHfw+L9lUEvEefWHb7UaXEl3XkNoKmkJKF4cH+wiPccb66poKNCVcUzlna3ODMWqtsPGGVMtsAAAAAElFTkSuQmCC"
};
}),
"[project]/src/app/assets/upload_icon.svg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/upload_icon.cd8ef863.svg");}),
"[project]/src/app/assets/upload_icon.svg.mjs { IMAGE => \"[project]/src/app/assets/upload_icon.svg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$upload_icon$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/upload_icon.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$upload_icon$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 320,
    height: 180,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/src/app/assets/car_image1.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/car_image1.247ab042.png");}),
"[project]/src/app/assets/car_image1.png.mjs { IMAGE => \"[project]/src/app/assets/car_image1.png (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_image1$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/car_image1.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_image1$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 476,
    height: 252,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAhklEQVR42gWA2wrBYACA91jEhdzK7GAOpci2tNJvm9nsZtIMk4jlgpQn/fukXN9f4n2OORxhCx9RlGSfH+bcxdvlUhkYGnq3g2FZLIIIkZ/Jbk/8JMW1Hak8LifSbYI6nuCEMWX14l5VHIoj8TqSij2doas9avUGzVYbzeyz9Dw2QUgoVvIPCK9I3MQQONEAAAAASUVORK5CYII="
};
}),
"[project]/src/app/assets/car_image2.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/car_image2.665a3fb3.png");}),
"[project]/src/app/assets/car_image2.png.mjs { IMAGE => \"[project]/src/app/assets/car_image2.png (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_image2$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/car_image2.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_image2$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 500,
    height: 625,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAo0lEQVR42gGYAGf/AKCQfrutl87BrNrOvN/UxN/WxwCegnG0l4DBpIrHq4/OspPZupwAXWRwXmdzX2ZvaW11Z2dqc25uAEVUXkFZaEVicWB6iVdpckZSUAAVIyocKS8dMDYzUFsgNkAmNTcAER8pER8pEB0lEh8mEB4nFCMtAAsSFw8YHhIdJRUiKxYlLhQkLgAGCQsIDA4KDxIKERULEhcLExmbhi8+llWtUwAAAABJRU5ErkJggg=="
};
}),
"[project]/src/app/assets/car_image3.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/car_image3.f43d570a.png");}),
"[project]/src/app/assets/car_image3.png.mjs { IMAGE => \"[project]/src/app/assets/car_image3.png (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_image3$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/car_image3.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_image3$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 500,
    height: 333,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAnklEQVR42gWAXQrBcADA/zdyA1Ly4oViCC/KCymmbDLNtmRrbMlocgi1A+2rth3jJ1FVFWVZUhQFeZ4RxzFJkpCmKVmWI6Loxzt8cvcdzqbGXpU5agqmecK2LcRk1GEstZH6LUbjLtPZkMVcYtBr0qjXEOFtyddb8XLX2Fcdw9AJggeua7HdzBEff4Nvy3iOxsXSUBUZZb/loO7wPYc/jodp3g5+XroAAAAASUVORK5CYII="
};
}),
"[project]/src/app/assets/car_image4.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/car_image4.92a1e044.png");}),
"[project]/src/app/assets/car_image4.png.mjs { IMAGE => \"[project]/src/app/assets/car_image4.png (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_image4$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/car_image4.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_image4$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1280,
    height: 853,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR42gGlAFr/APfw6P/89/L//fn1//359P/89/L/+/bx//fx6f/u4tX/AO7Xuv/m0rj/2Maw/6+sov+PkIj/lZaN/6SMd/+geln/AJJnRP90aVn/Ulxe/y5Wa/8YSmT/HVBo/3NoWf+meFP/AIleP/9TRzr/LDQ3/zNBSP9QQTP/c1Y+/5JlQv+QYT3/AJRjP/+ndUz/q3pN/6l5Tv+ve07/qHNE/4pcNP9YOBr/FeVomhVVbfcAAAAASUVORK5CYII="
};
}),
"[project]/src/app/assets/restaurant_desert.jpg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/restaurant_desert.29965f32.jpg");}),
"[project]/src/app/assets/restaurant_desert.jpg.mjs { IMAGE => \"[project]/src/app/assets/restaurant_desert.jpg (static in ecmascript)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$restaurant_desert$2e$jpg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/restaurant_desert.jpg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$restaurant_desert$2e$jpg__$28$static__in__ecmascript$29$__["default"],
    width: 853,
    height: 1280,
    blurWidth: 5,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAUDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCpZeOdtutu6XUggAjV2QHdjvz3NZKUl0NLR6s//9k="
};
}),
"[project]/src/app/assets/assets.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assets",
    ()=>assets,
    "cityList",
    ()=>cityList,
    "dummyCarData",
    ()=>dummyCarData,
    "dummyDashboardData",
    ()=>dummyDashboardData,
    "dummyMyBookingsData",
    ()=>dummyMyBookingsData,
    "dummyUserData",
    ()=>dummyUserData,
    "menuLinks",
    ()=>menuLinks,
    "ownerMenuLinks",
    ()=>ownerMenuLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$logo$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/logo.svg.mjs { IMAGE => "[project]/src/app/assets/logo.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$gmail_logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$gmail_logo$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/gmail_logo.svg.mjs { IMAGE => "[project]/src/app/assets/gmail_logo.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$facebook_logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$facebook_logo$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/facebook_logo.svg.mjs { IMAGE => "[project]/src/app/assets/facebook_logo.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$instagram_logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$instagram_logo$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/instagram_logo.svg.mjs { IMAGE => "[project]/src/app/assets/instagram_logo.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$twitter_logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$twitter_logo$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/twitter_logo.svg.mjs { IMAGE => "[project]/src/app/assets/twitter_logo.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$menu_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$menu_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/menu_icon.svg.mjs { IMAGE => "[project]/src/app/assets/menu_icon.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$search_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$search_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/search_icon.svg.mjs { IMAGE => "[project]/src/app/assets/search_icon.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$close_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$close_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/close_icon.svg.mjs { IMAGE => "[project]/src/app/assets/close_icon.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$users_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$users_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/users_icon.svg.mjs { IMAGE => "[project]/src/app/assets/users_icon.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$car_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/car_icon.svg.mjs { IMAGE => "[project]/src/app/assets/car_icon.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$location_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$location_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/location_icon.svg.mjs { IMAGE => "[project]/src/app/assets/location_icon.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$fuel_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$fuel_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/fuel_icon.svg.mjs { IMAGE => "[project]/src/app/assets/fuel_icon.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$addIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$addIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/addIcon.svg.mjs { IMAGE => "[project]/src/app/assets/addIcon.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$carIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$carIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/carIcon.svg.mjs { IMAGE => "[project]/src/app/assets/carIcon.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$carIconColored$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$carIconColored$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/carIconColored.svg.mjs { IMAGE => "[project]/src/app/assets/carIconColored.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$dashboardIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$dashboardIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/dashboardIcon.svg.mjs { IMAGE => "[project]/src/app/assets/dashboardIcon.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$dashboardIconColored$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$dashboardIconColored$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/dashboardIconColored.svg.mjs { IMAGE => "[project]/src/app/assets/dashboardIconColored.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$addIconColored$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$addIconColored$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/addIconColored.svg.mjs { IMAGE => "[project]/src/app/assets/addIconColored.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$listIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$listIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/listIcon.svg.mjs { IMAGE => "[project]/src/app/assets/listIcon.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$listIconColored$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$listIconColored$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/listIconColored.svg.mjs { IMAGE => "[project]/src/app/assets/listIconColored.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$cautionIconColored$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$cautionIconColored$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/cautionIconColored.svg.mjs { IMAGE => "[project]/src/app/assets/cautionIconColored.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$arrow_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$arrow_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/arrow_icon.svg.mjs { IMAGE => "[project]/src/app/assets/arrow_icon.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$star_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$star_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/star_icon.svg.mjs { IMAGE => "[project]/src/app/assets/star_icon.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$check_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$check_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/check_icon.svg.mjs { IMAGE => "[project]/src/app/assets/check_icon.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$tick_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$tick_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/tick_icon.svg.mjs { IMAGE => "[project]/src/app/assets/tick_icon.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$delete_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$delete_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/delete_icon.svg.mjs { IMAGE => "[project]/src/app/assets/delete_icon.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$eye_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$eye_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/eye_icon.svg.mjs { IMAGE => "[project]/src/app/assets/eye_icon.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$eye_close_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$eye_close_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/eye_close_icon.svg.mjs { IMAGE => "[project]/src/app/assets/eye_close_icon.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$filter_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$filter_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/filter_icon.svg.mjs { IMAGE => "[project]/src/app/assets/filter_icon.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$edit_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$edit_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/edit_icon.svg.mjs { IMAGE => "[project]/src/app/assets/edit_icon.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$calendar_icon_colored$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$calendar_icon_colored$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/calendar_icon_colored.svg.mjs { IMAGE => "[project]/src/app/assets/calendar_icon_colored.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$location_icon_colored$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$location_icon_colored$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/location_icon_colored.svg.mjs { IMAGE => "[project]/src/app/assets/location_icon_colored.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$testimonial_image_1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$testimonial_image_1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/testimonial_image_1.png.mjs { IMAGE => "[project]/src/app/assets/testimonial_image_1.png (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$testimonial_image_2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$testimonial_image_2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/testimonial_image_2.png.mjs { IMAGE => "[project]/src/app/assets/testimonial_image_2.png (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$main_restaurant$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$main_restaurant$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/main_restaurant.jpg.mjs { IMAGE => "[project]/src/app/assets/main_restaurant.jpg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$banner_car_image$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$banner_car_image$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/banner_car_image.png.mjs { IMAGE => "[project]/src/app/assets/banner_car_image.png (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$user_profile$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$user_profile$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/user_profile.png.mjs { IMAGE => "[project]/src/app/assets/user_profile.png (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$upload_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$upload_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/upload_icon.svg.mjs { IMAGE => "[project]/src/app/assets/upload_icon.svg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_image1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$car_image1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/car_image1.png.mjs { IMAGE => "[project]/src/app/assets/car_image1.png (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_image2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$car_image2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/car_image2.png.mjs { IMAGE => "[project]/src/app/assets/car_image2.png (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_image3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$car_image3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/car_image3.png.mjs { IMAGE => "[project]/src/app/assets/car_image3.png (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_image4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$car_image4$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/car_image4.png.mjs { IMAGE => "[project]/src/app/assets/car_image4.png (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$restaurant_desert$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$restaurant_desert$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/assets/restaurant_desert.jpg.mjs { IMAGE => "[project]/src/app/assets/restaurant_desert.jpg (static in ecmascript)" } [app-ssr] (structured image object with data url, ecmascript)');
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const cityList = [
    'New York',
    'Los Angeles',
    'Houston',
    'Chicago'
];
const assets = {
    logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$logo$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    gmail_logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$gmail_logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$gmail_logo$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    facebook_logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$facebook_logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$facebook_logo$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    instagram_logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$instagram_logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$instagram_logo$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    twitter_logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$twitter_logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$twitter_logo$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    menu_icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$menu_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$menu_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    search_icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$search_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$search_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    close_icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$close_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$close_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    users_icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$users_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$users_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    edit_icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$edit_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$edit_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    car_icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$car_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    location_icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$location_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$location_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    fuel_icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$fuel_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$fuel_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    addIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$addIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$addIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    carIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$carIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$carIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    carIconColored: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$carIconColored$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$carIconColored$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    dashboardIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$dashboardIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$dashboardIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    dashboardIconColored: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$dashboardIconColored$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$dashboardIconColored$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    addIconColored: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$addIconColored$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$addIconColored$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    listIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$listIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$listIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    listIconColored: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$listIconColored$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$listIconColored$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    cautionIconColored: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$cautionIconColored$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$cautionIconColored$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    calendar_icon_colored: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$calendar_icon_colored$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$calendar_icon_colored$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    location_icon_colored: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$location_icon_colored$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$location_icon_colored$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    arrow_icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$arrow_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$arrow_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    star_icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$star_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$star_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    check_icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$check_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$check_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    tick_icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$tick_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$tick_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    delete_icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$delete_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$delete_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    eye_icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$eye_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$eye_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    eye_close_icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$eye_close_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$eye_close_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    filter_icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$filter_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$filter_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    testimonial_image_1: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$testimonial_image_1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$testimonial_image_1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    testimonial_image_2: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$testimonial_image_2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$testimonial_image_2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    main_restaurant: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$main_restaurant$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$main_restaurant$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    banner_car_image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$banner_car_image$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$banner_car_image$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    car_image1: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_image1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$car_image1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    upload_icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$upload_icon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$upload_icon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    user_profile: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$user_profile$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$user_profile$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    car_image2: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_image2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$car_image2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    car_image3: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_image3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$car_image3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    car_image4: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_image4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$car_image4$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    restaurant_desert: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$restaurant_desert$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$restaurant_desert$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
};
const menuLinks = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Booking',
        path: '/cars'
    },
    {
        name: 'My Bookings',
        path: '/my-bookings'
    }
];
const ownerMenuLinks = [
    {
        name: 'Dashboard',
        path: '/owner',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$dashboardIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$dashboardIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        coloredIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$dashboardIconColored$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$dashboardIconColored$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        name: 'Add car',
        path: '/owner/add-car',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$addIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$addIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        coloredIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$addIconColored$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$addIconColored$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        name: 'Manage Cars',
        path: '/owner/manage-cars',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$carIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$carIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        coloredIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$carIconColored$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$carIconColored$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        name: 'Manage Bookings',
        path: '/owner/manage-bookings',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$listIcon$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$listIcon$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        coloredIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$listIconColored$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$listIconColored$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    }
];
const dummyUserData = {
    '_id': '6847f7cab3d8daecdb517095',
    'name': 'GreatStack',
    'email': 'admin@example.com',
    'role': 'owner',
    'image': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$user_profile$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$user_profile$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
};
const dummyCarData = [
    {
        '_id': '67ff5bc069c03d4e45f30b77',
        'owner': '67fe3467ed8a8fe17d0ba6e2',
        'brand': 'BMW',
        'model': 'X5',
        'image': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_image1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$car_image1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        'year': 2006,
        'category': 'SUV',
        'seating_capacity': 4,
        'fuel_type': 'Hybrid',
        'transmission': 'Semi-Automatic',
        'pricePerDay': 300,
        'location': 'New York',
        'description': 'The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its debut in 1999 as the first SUV ever produced by BMW.',
        'isAvaliable': true,
        'createdAt': '2025-04-16T07:26:56.215Z'
    },
    {
        '_id': '67ff6b758f1b3684286a2a65',
        'owner': '67fe3467ed8a8fe17d0ba6e2',
        'brand': 'Toyota',
        'model': 'Corolla',
        'image': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_image2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$car_image2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        'year': 2021,
        'category': 'Sedan',
        'seating_capacity': 4,
        'fuel_type': 'Diesel',
        'transmission': 'Manual',
        'pricePerDay': 130,
        'location': 'Chicago',
        'description': 'The Toyota Corolla is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.',
        'isAvaliable': true,
        'createdAt': '2025-04-16T08:33:57.993Z'
    },
    {
        '_id': '67ff6b9f8f1b3684286a2a68',
        'owner': '67fe3467ed8a8fe17d0ba6e2',
        'brand': 'Jeep ',
        'model': 'Wrangler',
        'image': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_image3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$car_image3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        'year': 2023,
        'category': 'SUV',
        'seating_capacity': 4,
        'fuel_type': 'Hybrid',
        'transmission': 'Automatic',
        'pricePerDay': 200,
        'location': 'Los Angeles',
        'description': 'The Jeep Wrangler is a mid-size luxury SUV produced by Jeep. The Wrangler made its debut in 2003 as the first SUV ever produced by Jeep.',
        'isAvaliable': true,
        'createdAt': '2025-04-16T08:34:39.592Z'
    },
    {
        '_id': '68009c93a3f5fc6338ea7e34',
        'owner': '67fe3467ed8a8fe17d0ba6e2',
        'brand': 'Ford',
        'model': 'Neo 6',
        'image': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$car_image4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$assets$2f$car_image4$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        'year': 2022,
        'category': 'Sedan',
        'seating_capacity': 2,
        'fuel_type': 'Diesel',
        'transmission': 'Semi-Automatic',
        'pricePerDay': 209,
        'location': 'Houston',
        'description': 'This is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.',
        'isAvaliable': true,
        'createdAt': '2025-04-17T06:15:47.318Z'
    }
];
const dummyMyBookingsData = [
    {
        '_id': '68482bcc98eb9722b7751f70',
        'car': dummyCarData[0],
        'user': '6847f7cab3d8daecdb517095',
        'owner': '6847f7cab3d8daecdb517095',
        'pickupDate': '2025-06-13T00:00:00.000Z',
        'returnDate': '2025-06-14T00:00:00.000Z',
        'status': 'confirmed',
        'price': 440,
        'createdAt': '2025-06-10T12:57:48.244Z'
    },
    {
        '_id': '68482bb598eb9722b7751f60',
        'car': dummyCarData[1],
        'user': '6847f7cab3d8daecdb517095',
        'owner': '67fe3467ed8a8fe17d0ba6e2',
        'pickupDate': '2025-06-12T00:00:00.000Z',
        'returnDate': '2025-06-12T00:00:00.000Z',
        'status': 'pending',
        'price': 130,
        'createdAt': '2025-06-10T12:57:25.613Z'
    },
    {
        '_id': '684800fa0fb481c5cfd92e56',
        'car': dummyCarData[2],
        'user': '6847f7cab3d8daecdb517095',
        'owner': '67fe3467ed8a8fe17d0ba6e2',
        'pickupDate': '2025-06-11T00:00:00.000Z',
        'returnDate': '2025-06-12T00:00:00.000Z',
        'status': 'pending',
        'price': 600,
        'createdAt': '2025-06-10T09:55:06.379Z'
    },
    {
        '_id': '6847fe790fb481c5cfd92d94',
        'car': dummyCarData[3],
        'user': '6847f7cab3d8daecdb517095',
        'owner': '6847f7cab3d8daecdb517095',
        'pickupDate': '2025-06-11T00:00:00.000Z',
        'returnDate': '2025-06-12T00:00:00.000Z',
        'status': 'confirmed',
        'price': 440,
        'createdAt': '2025-06-10T09:44:25.410Z'
    }
];
const dummyDashboardData = {
    'totalCars': 4,
    'totalBookings': 2,
    'pendingBookings': 0,
    'completedBookings': 2,
    'recentBookings': [
        dummyMyBookingsData[0],
        dummyMyBookingsData[1]
    ],
    'monthlyRevenue': 840
};
}),
"[project]/src/app/components/Navbars.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$assets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/assets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$auth$2e$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/auth.context.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const Navbars = ()=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$auth$2e$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [showProfileMenu, setShowProfileMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLogout = ()=>{
        logout();
        router.push('/login');
        setShowProfileMenu(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "bg-white shadow-sm border-b border-borderColor sticky top-0 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$assets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].logo,
                                alt: "logo",
                                className: "h-8 w-auto"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Navbars.tsx",
                                lineNumber: 28,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Navbars.tsx",
                            lineNumber: 27,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-10 flex items-baseline space-x-8",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$assets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuLinks"].map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.path,
                                        className: `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${pathname === link.path ? 'text-primary bg-primary/10' : 'text-black hover:text-primary hover:bg-gray-50'}`,
                                        children: link.name
                                    }, index, false, {
                                        fileName: "[project]/src/app/components/Navbars.tsx",
                                        lineNumber: 34,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Navbars.tsx",
                                lineNumber: 32,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Navbars.tsx",
                            lineNumber: 31,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center ml-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center border border-borderColor rounded-full px-4 py-2 bg-gray-50 hover:bg-white transition-colors duration-200 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: "w-64 bg-transparent outline-none text-sm placeholder-gray-500",
                                            placeholder: "Tìm kiếm..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Navbars.tsx",
                                            lineNumber: 51,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$assets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].search_icon,
                                            alt: "search",
                                            className: "w-4 h-4 text-gray-400 ml-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Navbars.tsx",
                                            lineNumber: 56,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Navbars.tsx",
                                    lineNumber: 50,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Navbars.tsx",
                                lineNumber: 49,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Navbars.tsx",
                            lineNumber: 48,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push('/owner'),
                                    className: "text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                                    children: "Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbars.tsx",
                                    lineNumber: 66,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowProfileMenu(!showProfileMenu),
                                            className: "flex items-center space-x-3 focus:outline-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-gray-700",
                                                        children: user.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Navbars.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium text-gray-600",
                                                            children: user.email[0].toUpperCase()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Navbars.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Navbars.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Navbars.tsx",
                                                lineNumber: 79,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Navbars.tsx",
                                            lineNumber: 75,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        showProfileMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleLogout,
                                                className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                                                children: "Logout"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Navbars.tsx",
                                                lineNumber: 91,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Navbars.tsx",
                                            lineNumber: 90,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Navbars.tsx",
                                    lineNumber: 74,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push('/login'),
                                    className: "bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm",
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbars.tsx",
                                    lineNumber: 101,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Navbars.tsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpen(!open),
                                className: "inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: open ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$assets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].close_icon : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$assets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].menu_icon,
                                    alt: "menu",
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbars.tsx",
                                    lineNumber: 115,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Navbars.tsx",
                                lineNumber: 111,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Navbars.tsx",
                            lineNumber: 110,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Navbars.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Navbars.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-borderColor",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$assets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuLinks"].map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: link.path,
                                className: `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${pathname === link.path ? 'text-primary bg-primary/10' : 'text-gray-600 hover:text-primary hover:bg-gray-50'}`,
                                onClick: ()=>setOpen(false),
                                children: link.name
                            }, index, false, {
                                fileName: "[project]/src/app/components/Navbars.tsx",
                                lineNumber: 129,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3 py-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center border border-borderColor rounded-full px-4 py-2 bg-gray-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: "flex-1 bg-transparent outline-none text-sm placeholder-gray-500",
                                        placeholder: "Tìm kiếm..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbars.tsx",
                                        lineNumber: 144,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$assets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].search_icon,
                                        alt: "search",
                                        className: "w-4 h-4 text-gray-400 ml-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbars.tsx",
                                        lineNumber: 149,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Navbars.tsx",
                                lineNumber: 143,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Navbars.tsx",
                            lineNumber: 142,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3 py-2 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        router.push('/owner');
                                        setOpen(false);
                                    },
                                    className: "block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors duration-200",
                                    children: "Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbars.tsx",
                                    lineNumber: 158,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-3 py-2 flex items-center space-x-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-gray-700",
                                                        children: user.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Navbars.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium text-gray-600",
                                                            children: user.email[0].toUpperCase()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Navbars.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Navbars.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Navbars.tsx",
                                                lineNumber: 171,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Navbars.tsx",
                                            lineNumber: 170,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                handleLogout();
                                                setOpen(false);
                                            },
                                            className: "block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50 transition-colors duration-200",
                                            children: "Logout"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Navbars.tsx",
                                            lineNumber: 181,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        router.push('/login');
                                        setOpen(false);
                                    },
                                    className: "block w-full text-center bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-base font-medium transition-colors duration-200",
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbars.tsx",
                                    lineNumber: 192,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Navbars.tsx",
                            lineNumber: 157,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Navbars.tsx",
                    lineNumber: 127,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Navbars.tsx",
                lineNumber: 126,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Navbars.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Navbars;
}),
"[project]/src/app/components/ProtectedRoute.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProtectedRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$auth$2e$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/auth.context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ProtectedRoute({ children }) {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$auth$2e$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!user && pathname !== '/login') {
            router.push('/login');
        } else if (user && pathname === '/login') {
            router.push('/');
        }
    }, [
        user,
        router,
        pathname
    ]);
    if (!user && pathname !== '/login') {
        return null;
    }
    if (user && pathname === '/login') {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/src/app/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$assets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/assets/assets.js [app-ssr] (ecmascript)");
;
;
;
;
const Footer = ()=>{
    const quickLinks = [
        {
            name: 'About Us',
            href: '/about'
        },
        {
            name: 'Contact',
            href: '/contact'
        },
        {
            name: 'Terms & Conditions',
            href: '/terms'
        },
        {
            name: 'Privacy Policy',
            href: '/privacy'
        }
    ];
    const categories = [
        {
            name: 'SUV',
            href: '/cars?category=suv'
        },
        {
            name: 'Sedan',
            href: '/cars?category=sedan'
        },
        {
            name: 'Sports Car',
            href: '/cars?category=sports'
        },
        {
            name: 'Luxury',
            href: '/cars?category=luxury'
        }
    ];
    const contactInfo = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$assets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].location_icon,
            text: 'Cẩm lệ, Ngũ Hành Sơn, Đà Nẵng'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$assets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].gmail_logo,
            text: 'phuctc6776@gmail.com'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$assets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].car_icon,
            text: '+84 0867167237'
        }
    ];
    const socialLinks = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$assets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].facebook_logo,
            href: 'https://facebook.com'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$assets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].twitter_logo,
            href: 'https://twitter.com'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$assets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].instagram_logo,
            href: 'https://instagram.com'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-white border-t border-borderColor mt-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$assets$2f$assets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].logo,
                                        alt: "logo",
                                        className: "h-8 w-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Footer.tsx",
                                        lineNumber: 39,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 38,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 text-sm",
                                    children: "Your trusted partner for car rentals. Experience the best service and quality vehicles for your journey."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 41,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-4",
                                    children: socialLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-gray-400 hover:text-primary transition-colors duration-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: link.icon,
                                                alt: "social",
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Footer.tsx",
                                                lineNumber: 53,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, index, false, {
                                            fileName: "[project]/src/app/components/Footer.tsx",
                                            lineNumber: 46,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 44,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Footer.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-gray-900 font-semibold mb-4",
                                    children: "Quick Links"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 60,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: quickLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                className: "text-gray-500 hover:text-primary text-sm transition-colors duration-200",
                                                children: link.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Footer.tsx",
                                                lineNumber: 64,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, index, false, {
                                            fileName: "[project]/src/app/components/Footer.tsx",
                                            lineNumber: 63,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 61,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Footer.tsx",
                            lineNumber: 59,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-gray-900 font-semibold mb-4",
                                    children: "Categories"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 76,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: categories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: category.href,
                                                className: "text-gray-500 hover:text-primary text-sm transition-colors duration-200",
                                                children: category.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Footer.tsx",
                                                lineNumber: 80,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, index, false, {
                                            fileName: "[project]/src/app/components/Footer.tsx",
                                            lineNumber: 79,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 77,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Footer.tsx",
                            lineNumber: 75,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-gray-900 font-semibold mb-4",
                                    children: "Contact Info"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 92,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: contactInfo.map((info, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center space-x-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: info.icon,
                                                    alt: "",
                                                    className: "h-5 w-5 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Footer.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-500 text-sm",
                                                    children: info.text
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Footer.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/app/components/Footer.tsx",
                                            lineNumber: 95,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 93,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Footer.tsx",
                            lineNumber: 91,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Footer.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 pt-8 border-t border-borderColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-sm",
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " Car Rental. All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Footer.tsx",
                                lineNumber: 106,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/terms",
                                        className: "text-gray-500 hover:text-primary text-sm transition-colors duration-200",
                                        children: "Terms"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Footer.tsx",
                                        lineNumber: 110,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/privacy",
                                        className: "text-gray-500 hover:text-primary text-sm transition-colors duration-200",
                                        children: "Privacy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Footer.tsx",
                                        lineNumber: 116,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/cookies",
                                        className: "text-gray-500 hover:text-primary text-sm transition-colors duration-200",
                                        children: "Cookies"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Footer.tsx",
                                        lineNumber: 122,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Footer.tsx",
                                lineNumber: 109,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Footer.tsx",
                        lineNumber: 105,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Footer.tsx",
                    lineNumber: 104,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Footer.tsx",
            lineNumber: 35,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/components/Footer.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/src/app/ClientLayout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Navbars$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Navbars.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ProtectedRoute$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ProtectedRoute.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Footer.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ClientLayout({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const isPublicPath = pathname.startsWith('/owner') || pathname.startsWith('/admin') || pathname === '/login' || pathname === '/register';
    if (isPublicPath) {
        return children;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ProtectedRoute$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Navbars$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/ClientLayout.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-grow",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/ClientLayout.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/ClientLayout.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/ClientLayout.tsx",
            lineNumber: 25,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/ClientLayout.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d3a0fe31._.js.map