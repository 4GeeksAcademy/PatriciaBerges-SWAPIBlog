const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favs: [
			
			]
		},
		actions: {
			handleFav: (favData) => {
				const store = getStore()
				if(!store.favs.some(fav => fav[0] === favData[0])){
					setStore({favs: [...store.favs, favData]})
				}
			}
		}
	};
};

export default getState;
