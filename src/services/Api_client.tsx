import { Axios } from "axios";
import React from "react";
import axios from 'axios'

export class Api_Client {
    private backend_adress = ""
    private default_adress = "http://127.0.0.1:8000"

    constructor(ip?: string) {
        if (ip) {
            this.backend_adress = ip
        } else {
            this.backend_adress = this.default_adress
        }

    }

     post() {
        console.log("1212")
        let headers = null;
        let body = {
            "user": {
                "username": "user7",
                "email": "iateriam1@mail.ru",
                "password": "12345678"
            }
        }



        // fetch('http://127.0.0.1:8000/api/v1/users/', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': '*/*',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         "user": {
        //             "username": "user110",
        //             "email": "iateriam110@mail.ru",
        //             "password": "123456781"
        //         }
        //     })
        // }).then(res => console.log(res))

        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.post["Content-Type"] = "application/json";

        axios.post('http://127.0.0.1:8000/api/v1/users/', {
            "user": {
                "username": "user12334",
                "email": "user234@user.user",
                "password": "2343890567"            }
        }).then(resp => {
            console.log(resp)
        });


    }

    _get() {

        axios.get("http://127.0.0.1:8000/api/v1/users/").then((resp) => {
            const allPersons = resp.data;
            console.log()
        });

    }

}

export class Auth_Service {
    private api_client: Api_Client;

    constructor() {
        this.api_client = new Api_Client()
    }

    get_token(login: string, password: string) {

    }

    create_user(username: string, email: string, password: string) {
        let user_for_back = {
            "user": {
                "username": "user",
                "email": "iateriam@mail.ru",
                "password": "12345678"
            }
        }
    }


}





export class Maker {
    private backend_adress = ""

    constructor(ip: string) {
        this.backend_adress = ip
    }

    post() {

    }
    get() {

    }

}

export class Hub {
    private backend_adress = ""

    constructor(ip: string) {
        this.backend_adress = ip
    }

    post() {

    }
    get() {

    }

}

