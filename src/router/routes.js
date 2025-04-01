// import Account from "@/views/Account.vue";
// import AddMechanism from "@/views/AddMechanism.vue";
// import AddWatch from "@/views/AddWatch.vue";

import Collection from "@/views/Collection.vue";
import Favourites from "@/views/Favourites.vue";
import Faq from "@/views/Faq.vue";
import Mechanisms from "@/views/Mechanisms.vue";
import Watches from "@/views/Watches.vue";
import NotFound from "@/layouts/NotFound.vue";

const routes = [
    { path: "/", name: "watches", component: Watches },
    {
        path: "/mechanisms",
        name: "mechanisms",
        component: Mechanisms,
    },
    {
        path: "/faq",
        name: "faq",
        component: Faq,
    },
    {
        path: "/favourites",
        name: "favourites",
        component: Favourites,
    },
    {
        path: "/collection",
        name: "collection",
        component: Collection,
    },

    { path: "/:pathMatch(.*)*", name: "not", component: NotFound },
];

export default routes;
