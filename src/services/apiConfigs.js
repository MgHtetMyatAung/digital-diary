// Define an array of API configurations
export const apiConfigs = [
  {
    name: "diaryApi",
    baseUrl: `${import.meta.env.VITE_APP_MEMO_URL}`,
    auth: true,
    tagTypes: ["memo", "todo", "poem", "Auth"],
    endpoints: (builder) => ({
      // for auth api
      register: builder.mutation({
        query: (credentials) => ({
          url: "auth/signup",
          method: "POST",
          body: credentials,
        }),
      }),
      login: builder.mutation({
        query: (credentials) => ({
          url: "auth/login",
          method: "POST",
          body: credentials,
        }),
        invalidatesTags: ["Auth"],
      }),

      // for memo api
      getMemos: builder.query({
        query: ({ page = 1, per_page = 10, search }) => ({
          url: `memo?page=${page}&per_page=${per_page}&search=${search}`,
          method: "GET",
        }),
        providesTags: ["memo", "Auth"],
      }),
      getMemoDetail: builder.query({
        query: (memoId) => ({
          url: `memo/${memoId}`,
          method: "GET",
        }),
        providesTags: ["memo"],
      }),
      deleteMemo: builder.mutation({
        query: (memoId) => ({
          url: `memo/${memoId}`,
          method: "DELETE",
        }),
        invalidatesTags: ["memo"],
      }),
      createMemo: builder.mutation({
        query: (credentials) => ({
          url: `memo`,
          method: "POST",
          body: credentials,
        }),
        invalidatesTags: ["memo"],
      }),
      updateMemo: builder.mutation({
        query: ({ data, id }) => ({
          url: `memo/${id}`,
          method: "PATCH",
          body: data,
        }),
        invalidatesTags: ["memo"],
      }),

      // for todo api
      getTodoLists: builder.query({
        query: ({ page = 1, per_page = 10, search }) => ({
          url: `todo?page=${page}&per_page=${per_page}&search=${search}`,
          method: "GET",
        }),
        providesTags: ["todo", "Auth"],
      }),
      getTodoDetail: builder.query({
        query: (todoId) => ({
          url: `todo/${todoId}`,
          method: "GET",
        }),
        providesTags: ["todo"],
      }),
      deleteTodo: builder.mutation({
        query: (todoId) => ({
          url: `todo/${todoId}`,
          method: "DELETE",
        }),
        invalidatesTags: ["todo"],
      }),
      createTodo: builder.mutation({
        query: (credentials) => ({
          url: `todo`,
          method: "POST",
          body: credentials,
        }),
        invalidatesTags: ["todo"],
      }),
      updateTodo: builder.mutation({
        query: ({ data, id }) => ({
          url: `todo/${id}`,
          method: "PATCH",
          body: data,
        }),
        invalidatesTags: ["todo"],
      }),

      // for poem api
      getPoems: builder.query({
        query: ({ page = 1, per_page = 10, search }) => ({
          url: `poem?page=${page}&per_page=${per_page}&search=${search}`,
          method: "GET",
        }),
        providesTags: ["poem", "Auth"],
      }),
      getPoemDetail: builder.query({
        query: (poemId) => ({
          url: `poem/${poemId}`,
          method: "GET",
        }),
        providesTags: ["poem"],
      }),
      deletePoem: builder.mutation({
        query: (poemId) => ({
          url: `poem/${poemId}`,
          method: "DELETE",
        }),
        invalidatesTags: ["poem"],
      }),
      createPoem: builder.mutation({
        query: (credentials) => ({
          url: `poem`,
          method: "POST",
          body: credentials,
        }),
        invalidatesTags: ["poem"],
      }),
      updatePoem: builder.mutation({
        query: ({ data, id }) => ({
          url: `poem/${id}`,
          method: "PATCH",
          body: data,
        }),
        invalidatesTags: ["poem"],
      }),
    }),
  },
  // Add more API configurations here as needed
];
