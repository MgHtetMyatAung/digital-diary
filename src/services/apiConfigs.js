// Define an array of API configurations
export const apiConfigs = [
  {
    name: "contactApi",
    baseUrl: import.meta.env.VITE_APP_CONTACT_URL,
    auth: true,
    tagTypes: ["Contact", "Auth"],
    endpoints: (builder) => ({
      register: builder.mutation({
        query: (credentials) => ({
          url: "register",
          method: "POST",
          body: credentials,
        }),
      }),
      login: builder.mutation({
        query: (credentials) => ({
          url: "login",
          method: "POST",
          body: credentials,
        }),
        invalidatesTags: ["Auth"],
      }),
      changePassword: builder.mutation({
        query: (credentials) => ({
          url: "change-password",
          method: "POST",
          body: credentials,
        }),
      }),
      logout: builder.mutation({
        query: () => ({
          url: "user-logout",
          method: "POST",
        }),
      }),
      getContacts: builder.query({
        query: (page = 1) => ({
          url: `contact?page=${page}`,
          method: "GET",
        }),
        providesTags: ["Contact", "Auth"],
      }),
      getContactDetail: builder.query({
        query: (contactId) => ({
          url: `contact/${contactId}`,
          method: "GET",
        }),
        providesTags: ["Contact"],
      }),
      deleteContact: builder.mutation({
        query: (contactId) => ({
          url: `contact/${contactId}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Contact"],
      }),
      createContact: builder.mutation({
        query: (credentials) => ({
          url: `contact`,
          method: "POST",
          body: credentials,
        }),
        invalidatesTags: ["Contact"],
      }),
      updateContact: builder.mutation({
        query: ({ data, id }) => ({
          url: `contact/${id}`,
          method: "PUT",
          body: data,
        }),
        invalidatesTags: ["Contact"],
      }),
      getProfile: builder.query({
        query: () => ({
          url: "user-profile",
          method: "GET",
        }),
        providesTags: ["Auth"],
      }),
    }),
  },
  {
    name: "productApi",
    baseUrl: "https://your-product-api.com/api/",
    auth: false,
    tagTypes: ["Product"],
    endpoints: (builder) => ({
      getProductById: builder.query({
        query: (id) => `product/${id}`,
      }),
      // Add more product endpoints here as needed
    }),
  },
  {
    name: "postApi",
    baseUrl: import.meta.env.VITE_APP_POST_URL,
    auth: false,
    tagTypes: ["Post"],
    endpoints: (builder) => ({
      getAllPosts: builder.query({
        query: () => ({
          url: "posts",
          method: "GET",
        }),
      }),
      getDetailPost: builder.query({
        query: (postId) => ({
          url: `posts/${postId}`,
          method: "GET",
        }),
      }),
      // Add more post endpoints here as needed
    }),
  },
  // Add more API configurations here as needed
];
