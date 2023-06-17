import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      //渲染的数据
      renderData: [
        { id: 1, title: "", date: "",  rows: [ { id: 1, columns: [ { id: 1, content: "", size: 'large' } ], center: false } ] },
        { id: 2, title: "", date: "",  rows: [ { id: 1, columns: [ { id: 1, content: "", size: 'large' } ], center: false } ] },
        { id: 3, title: "", date: "",  rows: [ { id: 1, columns: [ { id: 1, content: "", size: 'large' } ], center: false } ] },
        { id: 4, title: "", date: "",  rows: [ { id: 1, columns: [ { id: 1, content: "", size: 'large' } ], center: false } ] },
      ],
    }
  },
  mutations: {
    //修改渲染的数据
    changeRenderData(state, payload) {
      state.renderData = payload
    },
  }
})
export default store