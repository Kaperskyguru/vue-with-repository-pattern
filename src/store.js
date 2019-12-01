import Vue from 'vue';
import Vuex from 'vuex';


import Repository from "./repositories/RepositoryFactory";
const PostRepository = Repository.get("posts");

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        posts: [],
    },

    actions: {
        async getPosts({
            commit
        }) {
            commit('loadPosts', await PostRepository.get());
        },
    },

    mutations: {
        loadPosts: (state, res) => {
            const {
                data
            } = res;
            state.posts = data
        },

    }
});
export default store