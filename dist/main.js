function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $349a00930b14e029$export$2e2bcd8739ae039);
const $349a00930b14e029$var$getDefaultView = (views)=>views.find((view)=>!view.dataset.routerDefaultView
    )
;
const $349a00930b14e029$var$getViewIdFromRoute = (window)=>window.location.hash.slice(1)
;
const $349a00930b14e029$var$getViews = (viewsClass)=>[
        ...document.querySelectorAll(`.${viewsClass}>*`), 
    ]
;
const $349a00930b14e029$var$resetRoute = (window)=>{
    window.location.hash = "/";
};
const $349a00930b14e029$var$setView = (views)=>(view)=>{
        views.forEach((view)=>view.style.display = "none"
        );
        view.style.display = "block";
    }
;
const $349a00930b14e029$var$manageViews = (views, defaultView)=>{
    const $setView = $349a00930b14e029$var$setView(views);
    return (viewId = null)=>{
        const $viewId = viewId ?? $349a00930b14e029$var$getViewIdFromRoute(window);
        if ($viewId === "/") return $setView(defaultView);
        const view = views.find((view)=>view.id === $viewId
        );
        if (!view) return $349a00930b14e029$var$resetRoute(window);
        $setView(view);
    };
};
const $349a00930b14e029$var$initRouter = (viewsContainer)=>{
    const views = $349a00930b14e029$var$getViews(viewsContainer);
    const firstView = views[0];
    const defaultView = $349a00930b14e029$var$getDefaultView(views) || firstView;
    const showView = $349a00930b14e029$var$manageViews(views, defaultView);
    window.addEventListener("hashchange", ()=>showView()
    );
    return showView;
};
var $349a00930b14e029$export$2e2bcd8739ae039 = $349a00930b14e029$var$initRouter;


//# sourceMappingURL=main.js.map
