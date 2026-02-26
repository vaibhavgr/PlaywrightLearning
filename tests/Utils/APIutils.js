
const loginURL = "https://kinship-api-staging.kinship.engineering/auth/v2-sign-in";
const addPetURL = "https://kinship-api-staging.kinship.engineering/my-pet-profile";
const headers = {};

class APIutils {

    constructor(apiContext) {
        this.apiContext = apiContext;
    }

    loginPayload() {
        return { email: "22jan@test.com", password: "qwerty1234" };
    }

    async postcall(URL, payload, header) {
        return await this.apiContext.post(URL, {
            data: payload,
            headers: {
                ...this.getKinshipHeaders(),
                ...header

            }
        })
    }
    async addpet(token) {
        await this.postcall(addPetURL, this.addpetPayload(), await this.pettokenHeader(token))
    }

    async pettokenHeader(token) {
         headers["Authorization"] = `Bearer ${token}`;
         return headers;
     }


    async authorizeToken() {
        const response = await this.postcall(loginURL, this.loginPayload());
        const jsonResponse = await response.json()
        return jsonResponse['tokens']['accessToken'];
    }

    getKinshipHeaders() {
        return {
            "accept-language": "en-GB"
        }
    }



    addpetPayload() {
        return {
            "name": "Nivinay",
            "animal_type": "DOG",
            "breed": "Africanis Dog",
            "birth_date": "2021-09-01",
            "gender": "MALE",
            "spayed_or_neutered": "true",
            "weight": "10",
            "acquisition_date": "2024-04-03",
            "acquisition_date_precision": "DAY",
            "wisdom_breed_id_1": "07f2d080-9b49-4e36-94e0-639303c5ae1b",

        }
    }


}

module.exports = { APIutils };