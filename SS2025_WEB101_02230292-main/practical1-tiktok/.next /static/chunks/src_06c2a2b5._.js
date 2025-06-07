(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_06c2a2b5._.js", {

"[project]/src/services/videoService.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "addComment": (()=>addComment),
    "getFollowingVideos": (()=>getFollowingVideos),
    "getUserVideos": (()=>getUserVideos),
    "getVideoById": (()=>getVideoById),
    "getVideoComments": (()=>getVideoComments),
    "getVideos": (()=>getVideos),
    "likeVideo": (()=>likeVideo),
    "unlikeVideo": (()=>unlikeVideo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-client] (ecmascript)");
;
const getVideos = async (page = 1, limit = 10)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/videos?page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching videos:', error);
        throw error;
    }
};
const getVideoById = async (id)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/videos/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching video ${id}:`, error);
        throw error;
    }
};
const getUserVideos = async (userId)=>{
    try {
        console.log(`Fetching videos for user ID: ${userId}`);
        if (!userId) {
            console.error('getUserVideos called without userId');
            return {
                videos: []
            };
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/users/${userId}/videos`);
        console.log(`Received ${response.data.videos?.length || 0} videos for user ${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching videos for user ${userId}:`, error);
        // Return empty data to prevent UI errors
        return {
            videos: []
        };
    }
};
const getFollowingVideos = async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/videos/following');
        return response.data;
    } catch (error) {
        console.error('Error fetching following videos:', error);
        // throw error;
        return {
            videos: []
        };
    }
};
const likeVideo = async (videoId)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/videos/${videoId}/like`);
        return response.data;
    } catch (error) {
        console.error(`Error liking video ${videoId}:`, error);
        throw error;
    }
};
const unlikeVideo = async (videoId)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/videos/${videoId}/like`);
        return response.data;
    } catch (error) {
        console.error(`Error unliking video ${videoId}:`, error);
        throw error;
    }
};
const getVideoComments = async (videoId)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/videos/${videoId}/comments`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching comments for video ${videoId}:`, error);
        return {
            comments: []
        };
    }
};
const addComment = async (videoId, content)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/comments', {
            videoId,
            content
        });
        return response.data;
    } catch (error) {
        console.error(`Error adding comment to video ${videoId}:`, error);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/VideoCard.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$authContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/authContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$videoService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/videoService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const VideoCard = ({ video })=>{
    _s();
    const { user, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$authContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLiked, setIsLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [likeCount, setLikeCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(video.likeCount || 0);
    const [videoError, setVideoError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isUnmuted, setIsUnmuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const getFullVideoUrl = (url)=>{
        if (!url) return null;
        if (url.startsWith("http")) return url;
        const baseUrl = ("TURBOPACK compile-time value", "http://localhost:8000/api") || "http://localhost:8000";
        const serverUrl = baseUrl.includes("/api") ? baseUrl.substring(0, baseUrl.indexOf("/api")) : baseUrl;
        return `${serverUrl}${url}`;
    };
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
        src: getFullVideoUrl(video.videoUrl),
        type: "video/mp4"
    }, void 0, false, {
        fileName: "[project]/src/components/ui/VideoCard.jsx",
        lineNumber: 32,
        columnNumber: 3
    }, this);
    // Check if the video is already liked by the user
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoCard.useEffect": ()=>{
            console.log("Video URL:", video.videoUrl);
            console.log("Full video URL:", getFullVideoUrl(video.videoUrl));
            if (user && video.likes) {
                setIsLiked(video.likes.some({
                    "VideoCard.useEffect": (like)=>like.userId === user.id
                }["VideoCard.useEffect"]));
            }
        }
    }["VideoCard.useEffect"], [
        user,
        video.likes
    ]);
    const togglePlay = ()=>{
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };
    const handleLike = async ()=>{
        if (!isAuthenticated) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Please log in to like videos");
            return;
        }
        try {
            if (isLiked) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$videoService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unlikeVideo"])(video.id);
                setIsLiked(false);
                setLikeCount((prev)=>prev - 1);
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$videoService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["likeVideo"])(video.id);
                setIsLiked(true);
                setLikeCount((prev)=>prev + 1);
            }
        } catch (error) {
            console.error("Error toggling like:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Failed to like/unlike video");
        }
    };
    // Observe video visibility for autoplay
    // useEffect(() => {
    //   if (!videoRef.current) return;
    //   const observer = new IntersectionObserver(
    //     ([entry]) => {
    //       if (entry.isIntersecting) {
    //         // Add a slight delay before attempting to play
    //         setTimeout(() => {
    //           // Use muted attribute to increase chances of autoplay working
    //           if (videoRef.current) {
    //             videoRef.current.muted = true;
    //             // Use try-catch to handle potential errors
    //             try {
    //               const playPromise = videoRef.current.play();
    //               // Handle the play promise
    //               if (playPromise !== undefined) {
    //                 playPromise
    //                   .then(() => {
    //                     setIsPlaying(true);
    //                   })
    //                   .catch((error) => {
    //                     console.log("Autoplay prevented:", error);
    //                     setIsPlaying(false);
    //                   });
    //               }
    //             } catch (error) {
    //               console.log("Play error:", error);
    //             }
    //           }
    //         }, 100);
    //       } else {
    //         // Only pause if currently playing to avoid unnecessary calls
    //         if (isPlaying && videoRef.current) {
    //           videoRef.current.pause();
    //           setIsPlaying(false);
    //         }
    //       }
    //     },
    //     { threshold: 0.7 }
    //   );
    //   if (videoRef.current) {
    //     observer.observe(videoRef.current);
    //   }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoCard.useEffect": ()=>{
            if (!videoRef.current) return;
            const observer = new IntersectionObserver({
                "VideoCard.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        // Only try to play if videoRef.current exists
                        if (videoRef.current) {
                            videoRef.current.play().then({
                                "VideoCard.useEffect": ()=>{
                                    setIsPlaying(true);
                                }
                            }["VideoCard.useEffect"]).catch({
                                "VideoCard.useEffect": (error)=>{
                                    console.error("Video play error:", error);
                                    setIsPlaying(false);
                                }
                            }["VideoCard.useEffect"]);
                        }
                    } else {
                        // Add null check before trying to pause
                        if (videoRef.current) {
                            videoRef.current.pause();
                            setIsPlaying(false);
                        }
                    }
                }
            }["VideoCard.useEffect"], {
                threshold: 0.7
            });
            const currentVideoRef = videoRef.current;
            if (currentVideoRef) {
                observer.observe(currentVideoRef);
            }
            // Use the saved reference in the cleanup function
            return ({
                "VideoCard.useEffect": ()=>{
                    if (currentVideoRef) {
                        observer.unobserve(currentVideoRef);
                    }
                }
            })["VideoCard.useEffect"];
        }
    }["VideoCard.useEffect"], []);
    //   return () => {
    //     if (videoRef.current) {
    //       observer.unobserve(videoRef.current);
    //     }
    //   };
    // }, [isPlaying]);
    const handleVideoError = ()=>{
        console.error("Video failed to load:", video.videoUrl);
        setVideoError(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-8 flex border-b border-gray-200 pb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mr-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: `/profile/${video.user?.id}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-12 w-12 overflow-hidden rounded-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: video.user?.avatar || "https://via.placeholder.com/150",
                            alt: video.user?.username,
                            className: "h-full w-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/VideoCard.jsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/VideoCard.jsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/VideoCard.jsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/VideoCard.jsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/profile/${video.user?.id}`,
                                className: "font-semibold hover:underline",
                                children: video.user?.username
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/VideoCard.jsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1",
                                children: video.caption
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/VideoCard.jsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            video.sound && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 flex items-center text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMusic"], {
                                        className: "mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/VideoCard.jsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    video.sound
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/VideoCard.jsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/VideoCard.jsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mr-4 h-[600px] w-[336px] overflow-hidden rounded-lg bg-black",
                                children: !videoError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                            ref: videoRef,
                                            onClick: togglePlay,
                                            className: "h-full w-full object-contain",
                                            loop: true,
                                            unmuted: "true",
                                            playsInline: true,
                                            poster: video.thumbnailUrl ? getFullVideoUrl(video.thumbnailUrl) : "https://via.placeholder.com/150",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                src: getFullVideoUrl(video.videoUrl),
                                                type: "video/mp4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/VideoCard.jsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/VideoCard.jsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation(); // Prevent video play/pause
                                                setIsUnmuted(!isUnmuted);
                                            },
                                            className: "absolute bottom-4 right-4 bg-black bg-opacity-50 rounded-full p-2 text-white",
                                            children: isUnmuted ? 'Mute' : 'Unmute'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/VideoCard.jsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this),
                                        !isPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "rounded-full bg-black bg-opacity-50 p-4",
                                                children: "▶️"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/VideoCard.jsx",
                                                lineNumber: 244,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/VideoCard.jsx",
                                            lineNumber: 243,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-full w-full flex-col items-center justify-center bg-black text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-2",
                                            children: "Video unavailable"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/VideoCard.jsx",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-400",
                                            children: "Using fallback video"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/VideoCard.jsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                            ref: videoRef,
                                            onClick: togglePlay,
                                            className: "h-full w-full object-contain",
                                            loop: true,
                                            muted: true,
                                            playsInline: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                src: "https://assets.mixkit.co/videos/preview/mixkit-spinning-around-the-earth-29351-large.mp4",
                                                type: "video/mp4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/VideoCard.jsx",
                                                lineNumber: 264,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/VideoCard.jsx",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/VideoCard.jsx",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/VideoCard.jsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-end space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLike,
                                        className: `flex flex-col items-center ${isLiked ? "text-red-500" : ""}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-full bg-gray-100 p-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaHeart"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/VideoCard.jsx",
                                                    lineNumber: 282,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/VideoCard.jsx",
                                                lineNumber: 281,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-1 text-xs",
                                                children: likeCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/VideoCard.jsx",
                                                lineNumber: 284,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/VideoCard.jsx",
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/video/${video.id}`,
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-full bg-gray-100 p-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaComment"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/VideoCard.jsx",
                                                    lineNumber: 292,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/VideoCard.jsx",
                                                lineNumber: 291,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-1 text-xs",
                                                children: video.commentCount || 0
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/VideoCard.jsx",
                                                lineNumber: 294,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/VideoCard.jsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-full bg-gray-100 p-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaShare"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/VideoCard.jsx",
                                                    lineNumber: 299,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/VideoCard.jsx",
                                                lineNumber: 298,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-1 text-xs",
                                                children: "Share"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/VideoCard.jsx",
                                                lineNumber: 301,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/VideoCard.jsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/VideoCard.jsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/VideoCard.jsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/VideoCard.jsx",
                lineNumber: 193,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/VideoCard.jsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
};
_s(VideoCard, "qXO0CtR1ZebJ+b5YqGMNIF2Re0A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$authContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = VideoCard;
const __TURBOPACK__default__export__ = VideoCard;
var _c;
__turbopack_context__.k.register(_c, "VideoCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/VideoFeed.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$VideoCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/VideoCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$videoService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/videoService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const VideoFeed = ({ feedType = 'forYou' })=>{
    _s();
    const [videos, setVideos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchVideos = async ()=>{
        try {
            setLoading(true);
            let response;
            // Use different API endpoints based on feed type
            if (feedType === 'following') {
                response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$videoService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFollowingVideos"])();
            } else {
                response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$videoService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVideos"])();
            }
            setVideos(response.videos || []);
        } catch (error) {
            console.error('Error fetching videos:', error);
            setError('Failed to load videos. Please try again later.');
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to load videos');
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoFeed.useEffect": ()=>{
            fetchVideos();
        }
    }["VideoFeed.useEffect"], [
        feedType
    ]);
    // const VideoFeed = () => {
    //   const [videos, setVideos] = useState([]);
    //   const [loading, setLoading] = useState(true);
    //   const [error, setError] = useState(null);
    // useEffect(() => {
    //   fetchVideos();
    // }, []);
    // const fetchVideos = async () => {
    //   try {
    //     setLoading(true);
    //     const data = await getVideos();
    //     setVideos(data.videos || []);
    //   } catch (error) {
    //     console.error('Error fetching videos:', error);
    //     setError('Failed to load videos. Please try again later.');
    //     toast.error('Failed to load videos');
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center py-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-8 w-8 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/VideoFeed.jsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/VideoFeed.jsx",
            lineNumber: 64,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/VideoFeed.jsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: fetchVideos,
                    className: "mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white",
                    children: "Try Again"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/VideoFeed.jsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/VideoFeed.jsx",
            lineNumber: 72,
            columnNumber: 7
        }, this);
    }
    if (videos.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500",
                children: "No videos found."
            }, void 0, false, {
                fileName: "[project]/src/components/ui/VideoFeed.jsx",
                lineNumber: 87,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/VideoFeed.jsx",
            lineNumber: 86,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-10",
        children: videos.map((video)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$VideoCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                video: video
            }, video.id, false, {
                fileName: "[project]/src/components/ui/VideoFeed.jsx",
                lineNumber: 95,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/VideoFeed.jsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
};
_s(VideoFeed, "yo8WsrepiKz1O8zPBm8dsWEKQw8=");
_c = VideoFeed;
const __TURBOPACK__default__export__ = VideoFeed;
var _c;
__turbopack_context__.k.register(_c, "VideoFeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_06c2a2b5._.js.map