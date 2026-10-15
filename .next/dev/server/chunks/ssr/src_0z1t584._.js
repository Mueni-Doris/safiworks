module.exports = [
"[project]/src/app/book/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const initialState = {
    fullName: '',
    email: '',
    phoneNumber: '',
    physicalAddress: '',
    serviceAreaId: '2f3f3b44-0f9c-4b5c-8ee2-0c9ff840d873',
    preferredDate: '2026-08-15',
    preferredTimeSlot: '09:00',
    specialInstructions: '',
    packageId: 'f6e97678-e8e7-49aa-8ff5-bce2f94eae15',
    propertyType: 'Apartment',
    numberOfRooms: 2,
    addOns: 'None',
    estimatedPrice: 120
};
function BookPage() {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialState);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleChange = (event)=>{
        const { name, value } = event.target;
        setForm((current)=>({
                ...current,
                [name]: value
            }));
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        setStatus('Submitting...');
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postJson"])('/api/bookings', {
                ...form,
                numberOfRooms: Number(form.numberOfRooms),
                estimatedPrice: Number(form.estimatedPrice)
            });
            setStatus('Booking request submitted successfully.');
            setForm(initialState);
        } catch (error) {
            setStatus(error.message || 'Submission failed.');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            maxWidth: 720,
            margin: '40px auto',
            padding: 24
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Book a cleaning visit"
            }, void 0, false, {
                fileName: "[project]/src/app/book/page.js",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Use this simple booking experience to request a service for your space."
            }, void 0, false, {
                fileName: "[project]/src/app/book/page.js",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                style: {
                    display: 'grid',
                    gap: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "fullName",
                        value: form.fullName,
                        onChange: handleChange,
                        placeholder: "Your name",
                        style: {
                            padding: 10,
                            borderRadius: 8,
                            border: '1px solid #cbd5e1'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/book/page.js",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "email",
                        value: form.email,
                        onChange: handleChange,
                        placeholder: "Email",
                        style: {
                            padding: 10,
                            borderRadius: 8,
                            border: '1px solid #cbd5e1'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/book/page.js",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "phoneNumber",
                        value: form.phoneNumber,
                        onChange: handleChange,
                        placeholder: "Phone",
                        style: {
                            padding: 10,
                            borderRadius: 8,
                            border: '1px solid #cbd5e1'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/book/page.js",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "physicalAddress",
                        value: form.physicalAddress,
                        onChange: handleChange,
                        placeholder: "Address",
                        style: {
                            padding: 10,
                            borderRadius: 8,
                            border: '1px solid #cbd5e1'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/book/page.js",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "preferredDate",
                        value: form.preferredDate,
                        onChange: handleChange,
                        type: "date",
                        style: {
                            padding: 10,
                            borderRadius: 8,
                            border: '1px solid #cbd5e1'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/book/page.js",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "preferredTimeSlot",
                        value: form.preferredTimeSlot,
                        onChange: handleChange,
                        type: "time",
                        style: {
                            padding: 10,
                            borderRadius: 8,
                            border: '1px solid #cbd5e1'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/book/page.js",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        name: "specialInstructions",
                        value: form.specialInstructions,
                        onChange: handleChange,
                        placeholder: "Tell us about your space and preferred date",
                        rows: 5,
                        style: {
                            padding: 10,
                            borderRadius: 8,
                            border: '1px solid #cbd5e1'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/book/page.js",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        style: {
                            padding: '10px 14px',
                            width: 'fit-content',
                            border: 'none',
                            borderRadius: 999,
                            background: '#0f766e',
                            color: 'white'
                        },
                        children: "Request booking"
                    }, void 0, false, {
                        fileName: "[project]/src/app/book/page.js",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/book/page.js",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    marginTop: 12,
                    color: '#0f766e'
                },
                children: status
            }, void 0, false, {
                fileName: "[project]/src/app/book/page.js",
                lineNumber: 62,
                columnNumber: 17
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/book/page.js",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getJson",
    ()=>getJson,
    "postJson",
    ()=>postJson
]);
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
async function request(path, options = {}) {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        headers: {
            'Content-Type': 'application/json',
            ...options.headers || {}
        },
        ...options
    });
    if (!response.ok) {
        const text = await response.text();
        throw new Error(text || 'Request failed');
    }
    if (response.status === 204) {
        return null;
    }
    return response.json();
}
async function getJson(path) {
    return request(path, {
        method: 'GET'
    });
}
async function postJson(path, data) {
    return request(path, {
        method: 'POST',
        body: JSON.stringify(data)
    });
}
}),
];

//# sourceMappingURL=src_0z1t584._.js.map