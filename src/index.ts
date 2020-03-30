/**
 * This is your app control file (set in package.json)
 *
 * Use it to manipulate your application environment (routes, hooks/filters, events)
 */
import { addContentRoute } from "@factor/api";

addContentRoute({
  path: "/email",
  component: () => import("./email.vue")
});

addContentRoute({
  path: "/terms-of-service",
  component: () => import("./terms-of-service.vue")
});

addContentRoute({
  path: "/privacy-policy",
  component: () => import("./privacy-policy.vue")
});