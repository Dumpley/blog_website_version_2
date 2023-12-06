import API from "@/services/API"

export default {
    register (user) {
        console.log(user)
        return API().post('register_user', user)
    }
}