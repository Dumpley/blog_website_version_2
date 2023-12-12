import { defineStore } from "pinia";
import { ref } from "vue"

export const usePostStore = defineStore("postStore", () => {
    const showPopUp = ref(false)
    
    function toggle_pop_up() {
        showPopUp.value = !showPopUp.value;
    }

    return {
        showPopUp,
        toggle_pop_up
    }
});
