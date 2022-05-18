import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);
function checkUser(to, from, next) {
  if (!localStorage.getItem("access_token")) {
    next({ name: "Login" });
  } else {
    next();
  }
}
const router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        title: "Company Guide - Home",
      },
    },
    // {
    // 	path: '/about',
    // 	name: 'About',
    // 	// route level code-splitting
    // 	// this generates a separate chunk (about.[hash].js) for this route
    // 	// which is lazy-loaded when the route is visited.
    // 	component: () =>
    // 		import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // 	meta: {
    // 		title: 'Company - About',
    // 	},
    // },
    {
      path: "/councils/",
      name: "Councils",
      component: () => import("../views/councils.vue"),
      meta: {
        title: "Guide - Councils",
      },
    },
    {
      path: "/council/",
      name: "Council",
      component: () => import("../views/council.vue"),
      children: [
        {
          path: "companies",
          component: () => import("../components/council/ourCompanies.vue"),
        },
        {
          path: "our-members",
          component: () => import("../components/council/ourMembers.vue"),
        },
        {
          path: "events",
          component: () => import("../components/council/events.vue"),
        },
        {
          path: "media",
          component: () => import("../components/council/gallary.vue"),
        },
        {
          path: "contact-us",
          component: () => import("../components/council/ContactUs.vue"),
        },
        {
          path: "",
          component: () => import("../components/council/AboutUs.vue"),
        },
        {
          path: "settings",
          component: () => import("../components/council/settingsMain.vue"),
          beforeEnter: checkUser,
          children: [
            {
              path: "",
              component: () =>
                import("../components/council/CouncileSettings.vue"),
            },
            {
              path: "add-company",
              component: () =>
                import("../components/council/addCouncilCompany.vue"),
            },
            {
              path: "add-member",
              component: () =>
                import("../components/council/addmembercouncil.vue"),
            },
            {
              path: "add-events",
              component: () => import("../components/council/addEvents.vue"),
            },
            {
              path: "add-media",
              component: () => import("../components/council/addGallary.vue"),
            },
            {
              path: "edit-company",
              component: () =>
                import("../components/council/editCouncilCompany.vue"),
            },
            {
              path: "edit-member",
              component: () =>
                import("../components/council/editMemberCouncil.vue"),
            },
            {
              path: "edit-media",
              component: () => import("../components/council/editMedia.vue"),
            },
            {
              path: "edit-event",
              component: () => import("../components/council/editEvent.vue"),
            },
          ],
        },
      ],
    },
    {
      path: "/directory",
      name: "Directory",
      component: () => import("../views/directory.vue"),
      meta: {
        title: "Guide - Directory",
      },
    },
    {
      path: "/projects/single-project",
      name: "Single Project",
      component: () => import("../views/SingleProject.vue"),
      meta: {
        title: "Company - Details",
      },
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/Contact.vue"),
      meta: {
        title: "Company - Contact",
      },
    },
    {
      path: "/login",
      name: "Login",

      component: () => import("../views/user/login.vue"),
      meta: {
        title: "Company - Login",
      },
    },
    {
      path: "/settings",
      name: "Settings",

      component: () => import("../views/user/settings.vue"),
      meta: {
        title: "Company - Settings",
      },
    },
    {
      path: "/register-company",
      name: "RegisterCompany",

      component: () => import("../views/user/CompanyRegister.vue"),
      meta: {
        title: "Company - Register",
      },
    },
  ],
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
// router.beforeEach((to, from, next) => {
//   if (!localStorage.getItem("access_token")) {
//     if (to.name == "Login") {
//       next();
//     } else {
//       // toast.error("You Have To Log In First!");
//       next({ name: "Login" });
//     }
//   } else {
//     next();
//   }
// });
export default router;
// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  next();
});
