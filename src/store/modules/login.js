import router from '../../router'


const getters = {};

const state = {
    users:[
        {id: 1, username:'admin', password:'acudir1234'},
        {id: 2, username:'claudio', password:'acudir1234'},
        {id: 3, username:'julio', password:'acudir1234'},
    ],
    userActive: null
};

const mutations = {
    closeSession: (state, data) => {
        state.userActive = null
    },
    login: (state, data) => {
        const userLoginIn = state.users.find( e => e.username === data.username && e.password === data.password);

        if(userLoginIn){

            const {id, username}  =  userLoginIn
            state.userActive  = { id, username };
            router.push({
                path: '/activities'
                });

        }
    }
};

const actions = {
    login: (context, data) => {
        context.commit('login', data)
    },
    closeSession: (context, data) => {
        context.commit('closeSession')
    }
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
