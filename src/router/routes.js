// import Account from "@/views/Account.vue";
// import AddMechanism from "@/views/AddMechanism.vue";
// import AddWatch from "@/views/AddWatch.vue";
// import Collection from "@/views/Collection.vue";
// import Faq from "@/views/Faq.vue";
// import Favourites from "@/views/Favourites.vue";
// import Mechanism from "@/views/Mechanism.vue";

import Watch from "@/views/Watch.vue";
import NotFound from "@/layouts/NotFound.vue";

const routes = [
    { path: "/", name: "watch", component: Watch },
    { path: "/:pathMatch(.*)*", name: "not", component: NotFound }, 
];

export default routes;
