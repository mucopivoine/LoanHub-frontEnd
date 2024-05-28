// utils/cookieUtils.js
export const deleteCookie = (name) => {
    document.cookie = name + '=; Max-Age=0; path=/; domain=' + window.location.hostname;
  };