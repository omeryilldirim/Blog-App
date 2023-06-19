# Blog-App

## Description

Built an interactive Blog App. User login is required to publish a new blog, read more about the blogs or hit the like button for any blog. Users can save their drafts and preview their content on their profile.This app also allows users to comment on the blog page. You can use the account information below or you can create your own account.

```
email: admin@gmail.com
password: Abcd1234*
```
### Following topics are to be covered;

- React, Redux TK and persist, JS, Tailwind, Toastify, Tw-elements, Formik, Yup.
## Outcome

![Project Snapshot](snapshot.gif)
## Project Skeleton

```
Blog App (folder)
|
|---readme.md 
├── public
│    ├── favicon.ico
│    └── index.html
├── src
│    ├── app
│    │     └── store.jsx
│    ├── features
│    │     ├── authSlice.jsx
│    │     └── blogSlice.jsx
│    ├── helper
│    │     └── ToastNotify.js
│    ├── hooks
│    │     ├── useAuthCall.jsx
│    │     ├── useAxios.jsx
│    │     └── useBlogCall.jsx
│    ├── components
│    │     ├── blog
│    │     │     ├── Card.jsx
│    │     │     ├── CommentCard.jsx
│    │     │     ├── CommentForm.jsx
│    │     │     ├── DeleteModal.jsx
│    │     │     └── UpdateModal.jsx
│    │     ├── Footer.jsx
│    │     └── Navbar.jsx
│    ├── styles
│    │     └── globalStyle.jsx
│    ├── helper
│    │     └── ToastNotify.js
│    ├── pages
│    │     ├── About.jsx
│    │     ├── Detail.jsx
│    │     ├── Home.jsx
│    │     ├── Login.jsx
│    │     ├── Register.jsx
│    │     ├── MyBlogs.jsx
│    │     ├── NewBlog.jsx
│    │     ├── NotFound.jsx
│    │     └── Profile.jsx
│    ├── routers
│    │     ├── AppRouter.jsx
│    │     └── PrivateRouter.jsx
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
├── tailwind.config.js
└── yarn.lock
```

**<p align="center">&#9786; Happy Coding &#9997; - Please feel free to check ! 🙃 </p>**
