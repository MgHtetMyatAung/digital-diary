import {
  HomePage,
  LoginPage,
  MemoDetailPage,
  MemoPage,
  PoemPage,
  RegisterPage,
  TodoPage,
} from "../pages";
import LayoutProvider from "../provider/Layout.Provider";
import UserProtectProvider from "../provider/User.Provider";

export const routes = [
  {
    path: "/",
    element: (
      <LayoutProvider>
        <HomePage />
      </LayoutProvider>
    ),
    access: "any",
  },
  {
    path: "/memos",
    element: (
      <LayoutProvider>
        <MemoPage />
      </LayoutProvider>
    ),
    access: "user",
  },
  {
    path: "/memos/:memoId",
    element: (
      <LayoutProvider>
        <MemoDetailPage />
      </LayoutProvider>
    ),
    access: "user",
  },
  {
    path: "/poems",
    element: (
      <LayoutProvider>
        <PoemPage />
      </LayoutProvider>
    ),
    access: "user",
  },
  {
    path: "/todos",
    element: (
      <LayoutProvider>
        <TodoPage />
      </LayoutProvider>
    ),
    access: "user",
  },

  {
    path: "/login",
    element: (
      <UserProtectProvider>
        <LoginPage />
      </UserProtectProvider>
    ),
    access: "any",
  },
  {
    path: "/register",
    element: (
      <UserProtectProvider>
        <RegisterPage />
      </UserProtectProvider>
    ),
    access: "any",
  },
];
