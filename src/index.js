const getDefaultView = (views) =>
  views.find((view) => !view.dataset.routerDefaultView);

const getViewIdFromRoute = (window) => window.location.hash.slice(1);

const getViews = (viewsClass) => [
  ...document.querySelectorAll(`.${viewsClass}>*`),
];

const resetRoute = (window) => {
  window.location.hash = "/";
};

const setView = (views) => (view) => {
  views.forEach((view) => (view.style.display = "none"));

  view.style.display = "block";
};

const manageViews = (views, defaultView) => {
  const $setView = setView(views);

  return (viewId = null) => {
    const $viewId = viewId ?? getViewIdFromRoute(window);

    if ($viewId === "/") return $setView(defaultView);

    const view = views.find((view) => view.id === $viewId);

    if (!view) return resetRoute(window);

    $setView(view);
  };
};

const initRouter = (viewsContainer) => {
  const views = getViews(viewsContainer);

  const firstView = views[0];

  const defaultView = getDefaultView(views) || firstView;

  const showView = manageViews(views, defaultView);

  window.addEventListener("hashchange", () => showView());

  return showView;
};

export default initRouter;
