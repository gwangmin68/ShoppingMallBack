import {observable, action} from "mobx";

import axios from 'axios';

class UserStore{

    static __instance = null;
    static getInstance(){
        if(UserStore.__instance === null){
            UserStore.__instance = new UserStore();
        }
        return UserStore.__instance;
    }

    @observable user = null;
    @action fetchUser = async (userid, password) => {
        try{
            let response = await axios({
                url: `http://localhost:8080/user/${userid}`,
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout:3000
            });
            if(response.status === 200){
                this.user = response.data;
            }else{
                this.user = null;
                return;
            }
        }catch (e) {
            alert(e.toLocaleString());
        }
    };

    @action addUser = async (user) => {
        try{
            let response = await axios({
                url: `http://localhost:8080/user/add`,
                method: 'post',
                headers: {
                    'Content-type':'application/json;charset=UTF-8'
                },
                timeout: 3000,
                data: JSON.stringify(user)
            });
            return (response.status === 200);
        }catch (e) {
            alert(e.toLocaleString());
            return false;
        }
    }

    @action deleteUser = async (userid) => {
        try{
            let response = await axios({
               url: `http://localhost:8080/user/delete/${userid}`,
                method: 'delete',
                headers: {
                   'Content-type' : 'application/json;charset=UTF-8'
                },
                timeout:3000
            });
            return (response.status === 200);
        }catch (e) {
            alert(e.toLocaleString());
            return false;
        }
    }

    @action updateUser = async (user) => {
        try{
            let response = await axios({
                url: `http://localhost:8080/user/update`,
                method: 'put',
                headers: {
                    'Content-type' : 'application/json;charset=UTF-8'
                },
                timeout:3000,
                data:JSON.stringify(user)
            });
        }catch (e) {
            alert(e.toLocaleString());
            return false;
        }
    }
}

export default UserStore.getInstance();