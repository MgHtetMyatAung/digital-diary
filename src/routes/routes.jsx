import {
  ChangePasswordPage,
  ContactDetailPage,
  ContactMutatePage,
  ContactPage,
  DocsPage,
  HomePage,
  LoginPage,
  PostDetailPage,
  PostsPage,
  ProfilePage,
  RegisterPage,
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
    ), // layout provider for header and footer ----
    access: "any", // any user or guest can access ----
  },
  {
    path: "/login",
    element: (
      <UserProtectProvider>
        <LoginPage />
      </UserProtectProvider>
    ),
    access: "any", // any user or guest can access ----
  },
  {
    path: "/register",
    element: (
      <UserProtectProvider>
        <RegisterPage />
      </UserProtectProvider>
    ),
    access: "any", // any user or guest can access ----
  },
  {
    path: "/change-password",
    element: <ChangePasswordPage />,
    access: "user", // any user or guest can access ----
  },
  {
    path: "/contacts",
    element: (
      <LayoutProvider>
        <ContactPage />
      </LayoutProvider>
    ),
    access: "user", // login user only can access ----
  },
  {
    path: "/contacts/:contactId",
    element: (
      <LayoutProvider>
        <ContactDetailPage />
      </LayoutProvider>
    ),
    access: "user",
  },
  {
    path: "/contact-mutate",
    element: (
      <LayoutProvider>
        <ContactMutatePage />
      </LayoutProvider>
    ),
    access: "user", // login user only can access ----
  },
  {
    path: "/posts",
    element: (
      <LayoutProvider>
        <PostsPage />
      </LayoutProvider>
    ),
    access: "any",
  },
  {
    path: "/posts/:postId",
    element: (
      <LayoutProvider>
        <PostDetailPage />
      </LayoutProvider>
    ),
    access: "any",
  },
  {
    path: "/profile",
    element: (
      <LayoutProvider>
        <ProfilePage />
      </LayoutProvider>
    ),
    access: "user",
  },
  {
    path: "/docs",
    element: (
      <LayoutProvider>
        <DocsPage />
      </LayoutProvider>
    ),
    access: "any",
  },
];
