import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "32117481-0e32-494c-844a-56212b24929c"
    },
    data: {}
})

export const socialNetworkAPI = {

    getUsers: function (pageSize: number, selectedPage: number) {
        return instance.get(`users?count=${pageSize}&page=${selectedPage}`)
    },

    getUserAuthData: function () {
        return instance.get(`auth/me`).then(data=>data.data)
    },

    follow: function (userID: number) {
        return instance.post(`follow/${userID}`).then(resp=>resp.data)
    },

    unfollow: function (userID: number) {
        return instance.delete(`follow/${userID}`).then(resp=>resp.data)
    },

    getUserProfile: function (currentUserId:number){
        instance.get(`profile/${currentUserId}`).then(resp=>console.log(resp))
        return instance.get(`profile/${currentUserId}`)

    }
}