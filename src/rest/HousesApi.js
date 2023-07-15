const ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";

class HouseApi {
    get = async () => {
        try {
            const resp = await fetch(ENDPOINT);
            const data = await resp.json();
            return data;
        } catch (e) {
            console.log("Brooo.. it got no fetch")
        }
    }
    post = async (house) => {
        try {
            const resp = await fetch(ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e) {
            console.log("Did you get the post?")
        }
    }
    put = async (house) => {
        try {
            const resp = await fetch(`${ENDPOINT}/${house._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e) {
            console.log("Dude. Update got issues.", e);
        }
    }
    delete = async (id) => {
        try {
            const resp = await fetch(`${ENDPOINT}/${id}`, {
                method: "DELETE"
            });
            return await resp.json();
        } catch(e) {
            console.log("cant get rid of nothing!")
        }
    }
}

export const housesApi = new HouseApi();