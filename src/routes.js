import Vue from 'vue';
import VueRouter from 'vue-router';

import ViewPost from './components/ViewPost.vue';
import Index from './components/Index.vue';
import vuexPost from './components/Posts.vuex.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: "/posts/:id",
            name: 'posts',
            component: ViewPost
        },
        {
            path: "/vuex",
            name: 'vuex',
            component: vuexPost
        },

    ]
});

export default router;