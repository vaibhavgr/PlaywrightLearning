
const loginURL = "https://kinship-api-staging.kinship.engineering/auth/v2-sign-in";

class APIutils {

    constructor(apiContext) {
        this.apiContext = apiContext;
    }



    loginPayload() {
        return { email: "22jan@test.com", password: "qwerty1234" };
    }

    async postcall(URL, payload) {
        return await this.apiContext.post(URL, {
            data: payload,
            headers: this.getKinshipHeaders()
        })
    }

    async authorizeToken()
    {
        const response  = await this.postcall(loginURL, this.loginPayload());
        const jsonResponse =await response.json()
        return jsonResponse['tokens']['accessToken'];
    }

    getKinshipHeaders() {
        return {
            "accept-language": "en-GB"
        }


    }


}

module.exports = { APIutils };