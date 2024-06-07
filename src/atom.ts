import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

export const isAuthenticated = atom({
  key: "auth",
  default: false,
});

export const householderIdState = atom({
  key: 'householderIdState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});