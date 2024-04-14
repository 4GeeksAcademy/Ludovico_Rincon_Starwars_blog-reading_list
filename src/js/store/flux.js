const getState = ({ getStore, getActions, setStore }) => {
	const url = "https://www.swapi.tech/api"
	return {
		store: {
			character: [],
			characterData: {},
			characterDesc: "",
			planet: [],
			planetData: {},
			planetDesc: "",
			ship: [],
			shipData: [],
			shipDesc: "",
			favorites: []
		},
		actions: {
			fetchCharacters: () => {
				fetch(url + "/people/")
					.then(res => res.json())
					.then(data => setStore({
						character: data.results
					}))
					.catch(err => console.error(err))
			},
			fetchCharactersData: (id) => {
				fetch(url + "/people/" + id)
					.then(res => res.json())
					.then(data => setStore({
						characterData: data.result.properties,
						characterDesc: data.result.description,
					}))
					.catch(err => console.error(err))
			},

			fetchDetailChar: async (id) => {
				const response = await fetch(
					url + "/people/" + id
				)
				const body = await response.json();
				const person = body.result;
				return person;
			},
			fetchPlanets: () => {
				fetch(url + "/planets/")
					.then(res => res.json())
					.then(data => setStore({
						planet: data.results
					}))
					.catch(err => console.error(err))
			},
			fetchPlanetsData: (id) => {
				fetch(url + "/planets/" + id)
					.then(res => res.json())
					.then(data => setStore({
						planetData: data.result.properties,
						planetDesc: data.result.description
					}))
					.catch(err => console.error(err))
			},

			fetchDetailPlanets: async (id) => {
				const response = await fetch(
					url + "/planets/" + id
				)
				const body = await response.json();
				const planet = body.result;
				return planet;
			},
			fetchVeh: () => {
				fetch(url + "/vehicles/")
					.then(res => res.json())
					.then(data => setStore({
						ship: data.results
					}))
					.catch(err => console.error(err))
			},
			fetchVehData: (id) => {
				fetch(url + "/vehicles/" + id)
					.then(res => res.json())
					.then(data => setStore({
						shipData: data.result.properties,
						shipDesc: data.result.description
					}))
					.catch(err => console.error(err))
			},

			fetchDetailVeh: async (id) => {
				const response = await fetch(
					url + "/vehicles/" + id
				)
				const body = await response.json();
				const vehicle = body.result;
				return vehicle;
			},

			addFavorite: (item) => {
				if (getStore().favorites.some(elem => elem.name === item.name)) {
					getActions().quitFavorite(item);
				} else {
					setStore({
						favorites: (getStore().favorites.concat(item))
					});
					console.log(`${item.name} added to your favorites.`);
				}
				console.log(getStore().favorites);
			},
			quitFavorite: (item) => {
				setStore({
					favorites: getStore().favorites.filter(i => i.name !== item.name)
				});
				console.log(`${item.name} removed from your favorites.`);
			}

		}
	};
};

export default getState;
