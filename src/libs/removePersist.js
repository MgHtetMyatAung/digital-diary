export function removePersist(route) {
  localStorage.removeItem("persist:root");
  setTimeout(() => {
    window.location.href = route;
  }, 100);
}
