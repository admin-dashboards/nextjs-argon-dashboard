# [NextJS Argon Dashboard](https://www.creative-tim.com/product/nextjs-argon-dashboard?AFFILIATE=128200)

Start your development with a Dashboard for NextJ, Bootstrap, React and Reactstrap. It is open source, free and it features many components that can help you create amazing websites.

<br />

> This project comes with a `Authentication` & `Dark-Mode` enhancements - Provided by [Admin Dashboards](https://www.admin-dashboards.com/) service.

- 👉 [NextJS Argon Dashboard](https://www.creative-tim.com/product/nextjs-argon-dashboard?AFFILIATE=128200) - `product page`
- 👉 [NextJS Argon Dashboard](https://demos.creative-tim.com/nextjs-argon-dashboard/admin/dashboard?AFFILIATE=128200) - `LIVE demo`

![Product Image](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/nextjs-argon-dashboard/nextjs-argon-dashboard.jpg)

<br />

## ✨ Quick start

To run the project on your device, make sure you have node environment(v14+) installed on it. 
Clone the project via Git CLI or download the zip. 

```
$ npm i
$ npm run dev
```

After that you can visit the demo at the mentioned URL in your console(usually it is http://localhost:3000).

<br />

## ✨ Authentication

Authentication is now available via `Github` and `Google` OAuth provided by `next-auth`.

for each provider in `[...nextauth].js` a client id and a client secret are needed. these secrets are generated by the oauth provider. if you are running the project locally, then you have to create a `.env` file in the project root and add your secrets to it as mentioned below:

```.env
GOOGLE_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID"
GOOGLE_CLIENT_SECRET="YOUR_GOOGLE_CLIENT_SECRET"
GITHUB_CLIENT_ID="YOUR_GITHUB_CLIENT_ID"
GITHUB_CLIENT_SECRET="YOUR_GITHUB_CLIENT_SECRET"
```

alternativley, if you are deploying the project, you should add the mentioned key value pairs as environment variables to your depolyment settings. in addition, there is one more environment variable to add here:

```.env
SECRET="WHAT_EVER"
```

<br />

> Note: The OAUth testing in local environments requires an HTTPS connection

More Info: https://github.com/vercel/next.js/discussions/10935#discussioncomment-2236301

https://github.com/cameronhunter/local-ssl-proxy

<br />

## ✨ Deployment

the easiest way to deploy a next project including this one, is using [vercel](https://vercel.com/). vercel is a powerfull tool for deploying next projects created by the very same team who created nextjs. create a vercel account and import your github repository. choose a repo to start with and vercel will do the rest.

<br />

## ✨ Dark-Mode

This demo contains a feature to change pages' theme. dark and light themes are available.

<br />

## ✨ **Fully Coded Components**

NextJS Argon Dashboard is built with over 100 individual components, giving you the freedom of choosing and combining. All components can take variations in color, that you can easily modify using SASS files.
You will save a lot of time going from prototyping to full-functional code, because all elements are implemented. This Dashboard is coming with pre-built examples, so the development process is seamless, switching from our pages to the real website is very easy to be done.
Every element has multiple states for colors, styles, hover, focus, that you can easily access and use.

<br />

## ✨ Documentation

Learn how to use this starter by accessing [Next JS Argon Dashboard - Documentation](https://www.creative-tim.com/learning-lab/nextjs/overview/argon-dashboard?AFFILIATE=128200).

<br />

## ✨ Codebase Structure

Within the download you'll find the following directories and files:

```
NextJS Argon Dashboard
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── Documentation
│   └── documentation.html
├── assets
│   ├── css
│   │   ├── nextjs-argon-dashboard.css
│   │   ├── nextjs-argon-dashboard.css.map
│   │   └── nextjs-argon-dashboard.min.css
│   ├── fonts
│   ├── img
│   │   ├── brand
│   │   ├── icons
│   │   │   └── common
│   │   └── theme
│   ├── plugins
│   │   └── nucleo
│   │       ├── css
│   │       │   ├── nucleo-svg.css
│   │       │   └── nucleo.css
│   │       └── fonts
│   └── scss
│       ├── argon-dashboard
│       │   ├── bootstrap
│       │   │   ├── mixins
│       │   │   └── utilities
│       │   ├── custom
│       │   │   ├── alerts
│       │   │   ├── avatars
│       │   │   ├── badges
│       │   │   ├── buttons
│       │   │   ├── cards
│       │   │   ├── charts
│       │   │   ├── close
│       │   │   ├── custom-forms
│       │   │   ├── dropdowns
│       │   │   ├── footers
│       │   │   ├── forms
│       │   │   ├── headers
│       │   │   ├── icons
│       │   │   ├── list-groups
│       │   │   ├── maps
│       │   │   ├── masks
│       │   │   ├── mixins
│       │   │   ├── modals
│       │   │   ├── navbars
│       │   │   ├── navs
│       │   │   ├── paginations
│       │   │   ├── popovers
│       │   │   ├── progresses
│       │   │   ├── separators
│       │   │   ├── tables
│       │   │   ├── type
│       │   │   ├── utilities
│       │   │   └── vendors
│       │   └── docs
│       ├── nextjs-argon-dashboard.scss
│       └── react
│           ├── bootstrap
│           ├── plugins
│           └── react-differences.scss
├── components
│   ├── Footers
│   │   ├── AdminFooter.js
│   │   └── AuthFooter.js
│   ├── Headers
│   │   ├── Header.js
│   │   └── UserHeader.js
│   ├── Navbars
│   │   ├── AdminNavbar.js
│   │   └── AuthNavbar.js
│   ├── PageChange
│   │   └── PageChange.js
│   └── Sidebar
│       └── Sidebar.js
├── layouts
│   ├── Admin.js
│   └── Auth.js
├── pages
│   ├── 404.js
│   ├── _app.js
│   ├── _document.js
│   ├── _error.js
│   ├── admin
│   │   ├── dashboard.js
│   │   ├── icons.js
│   │   ├── maps.js
│   │   ├── profile.js
│   │   └── tables.js
│   ├── auth
│   │   ├── login.js
│   │   └── register.js
│   └── index.js
├── variables
│   └── charts.js
├── routes.js
├── next.config.js
└── package.json

```

<br />

## ✨ Licensing

- @MIT -Copyright [Creative Tim](https://www.creative-tim.com/?AFFILIATE=128200)

<br />

---

**[NextJS Argon Dashboard](https://www.creative-tim.com/product/nextjs-argon-dashboard?AFFILIATE=128200)** - Provided by [Admin Dashboards](https://www.admin-dashboards.com/)
