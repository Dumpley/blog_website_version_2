<template>
    <div class="profile">
        <div class="wrapper_profile_info">
            <div>
                <img src="@\assets\logo.png" alt="This is a sample picture" />
            </div>
            <div>{{ profile_data.name }}</div>
            <div class="progress_wrapper">
                <div class="dots">
                    <div class="points">{{ profile_data.current_lvl }}</div>
                </div>
                <div class="points">
                    <div class="progress_bar_wrapper">
                        <div class="yellow_progress_bar"></div>
                    </div>
                </div>
                <div class="dots">
                    <div class="points">{{ profile_data.next_lvL }}</div>
                </div>
            </div>
            <div>Etappenziel: {{ profile_data.stage_goal }} Fans</div>
        </div>
        <div class="wrapper_scores">
            <div class="rows">
                <div>{{ profile_data.current_fans }}</div>
                <div style="display: flex;">
                    <img
                        style="
                            height: 20px;
                            margin-left: 10px;
                            margin-right: 10px;
                        "
                        src="@\assets\instagram-followers-icon.svg"
                        alt="comment"
                    />
                    <div>Posts</div>
                </div>
            </div>
            <div class="rows">
                <div>{{ profile_data.posts_number }}</div>
                <div style="display: flex">
                    <img
                        style="
                            height: 20px;
                            margin-left: 10px;
                            margin-right: 10px;
                        "
                        src="@\assets\writing-icon.svg"
                        alt="comment"
                    />
                    <div>Posts</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "Profile",
    setup() {
        const profile_data = ref({
            name: "Max Mustermann",
            current_lvl: 0,
            next_lvL: 1,
            stage_goal: 0,
            current_fans: 0,
            posts_number: 0,
        });
        return { profile_data };
    },
};
</script>

<style lang="css" scoped>
.dots {
    background-color: #3394a7;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #eeffff;
    margin-left: 5px;
    margin-right: 5px;
}
.yellow_progress_bar {
    background-color: #ffd276;
    height: 100%;
    width: 25%;
}
.progress_bar_wrapper {
    background-color: #34393c;
    padding: 2px;
    height: 10px;
    width: 200px;
}
.progress_wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.profile {
    display: flex;
    flex-direction: column;
    border: 2px solid #838b8e;
}

.wrapper_profile_info {
    padding: 20px;
    border-bottom: 2px solid #838b8e;
}

.wrapper_scores {
    display: flex;
}

.rows {
    flex: 1;
    padding: 20px;
    border-right: 2px solid #838b8e;
}

.rows:last-child {
    border-right: none;
}
</style>
