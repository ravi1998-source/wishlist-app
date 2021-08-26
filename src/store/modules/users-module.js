import axios from 'axios'

const state = { 
    wishes: []
};

const getters = { 
    wishesList: state => state.wishes
};

const actions = { 
    async fetchWishes({commit}){
      const response = await axios.get("http://localhost:3000/wishes");
      commit("setWishes", response.data)
    },
    async addWishes({commit}, wish){
      const response = await axios.post("http://localhost:3000/wishes", wish);
      commit("addNewWish", response.data)
    },
    async deleteWish({commit}, id){
      await axios.delete(`http://localhost:3000/wishes/${id}`);
      commit("removeWish", id)
    }
};

const mutations = { 
    setWishes: (state, wishes) => (
        state.wishes = wishes
    ),
    addNewWish: (state, wish) => state.wishes.unshift(wish),
    removeWish: (state, id) => (
        state.wishes.filter(wish => wish.id !== id),
        state.wishes.splice(wish => wish.id, 1)
    )
};

export default {
    state,
    getters,
    actions,
    mutations
}