export const state = {
  playlist: {
    isPublic: false    
  }
}
  
export const actions = {
  get({ state }) { 
    return state.playlist
  },
  update({ state }, {isPublic}) {
    state.playlist.isPublic = isPublic
  return
  },
}
  
export default {
  namespaced: true,
  actions,
  state
}
  