<template>
    <div class="popup-overlay" >
        <div class="popup">
            <div class="top_wrapper">
                <div class="image_wrapper">
                    <img
                        class="image"
                        src="@\assets\star_rail_artwork.png"
                        alt="Star Rail Artwork for css"
                    />
                </div>
                <div class="post">
                    <div class="tag_wrapper">
                        <div class="icon_image">ICON</div>
                        <div>a_funny_filterable_tag</div>
                        <div class="close-btn" @click="store.toggle_pop_up()">
                            &times;
                        </div>
                    </div>
                    <div class="title">
                        Me and my friends eating out @TrailblazerExpress an has
                        been such a blast
                    </div>
                    <div class="description_wrapper">
                        <div class="description">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Deleniti illo quisquam itaque
                                sequi nobis repellat esse id assumenda saepe
                                numquam asperiores, eos rerum delectus
                                laudantium tempore quam cupiditate praesentium.
                                Fugiat?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vero explicabo quisquam, quae
                                assumenda optio quidem voluptatum itaque
                                voluptatibus deserunt minus nostrum, natus
                                consequuntur illum repudiandae deleniti ex.
                                Perspiciatis, animi eius!
                            </p>
                            <p>
                                Distinctio alias consequuntur non. Quasi, natus
                                id. Nobis quo itaque sunt magnam rem
                                necessitatibus repellendus magni temporibus,
                                velit molestiae, officia vero perspiciatis
                                officiis labore. Non corporis magni numquam
                                commodi repellat?
                            </p>
                        </div>
                    </div>
                    <div class="comments">You have <b>0</b> comments</div>
                </div>
            </div>
            <div class="tag_title"></div>
            <span class="task_bar"></span>
        </div>
    </div>
</template>

<script>
import { usePostStore } from "@/pinia_store/post_store";

export default {
    setup() {
        const store = usePostStore();

        return {
            store,
        };
    },
};
</script>

<style scoped>
.post {
    top: 0;
    left: 0;
    background: #242932;
    width: 40%;
    display: flex;
    flex-direction: column;
}

.top_wrapper {
    display: flex;
    align-items: stretch;
    height: 40vw;
}

.tag_wrapper {
    
}

.image_wrapper {
    width: 60%;
    flex: 1;
    overflow: hidden;
}

.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center;
}
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup {
    background: #4f8e90;
    padding: 0px 0px 0px 3px;
    text-align: center;
    max-width: 80%;
    margin: auto;
}

.post {
    padding: 1%;
    top: 0;
    left: 0;
    background: #242932;
    width: 40%;
    display: flex;
    flex-direction: column;
    position: relative;
}

.top_wrapper {
    display: flex;
    align-items: stretch;
    height: 40vw;
}

.tag_wrapper {
    font-size: 18px;
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.image_wrapper {
    width: 60%;
    flex: 1;
    overflow: hidden;
}

.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center;
}

.close-btn {
    padding: 0px 5px 0px 5px;
    font-size: 20px;
    cursor: pointer;
}

.title {
    color: var(--secondary-color);
    font-size: 26px;
    font-weight: bold;
}
.description_wrapper {
    max-height: 1000%;
    overflow-y: auto;
    padding: 10px;
}

.description_wrapper::-webkit-scrollbar {
    width: 0.5em;
}
.description_wrapper::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgb(86, 99, 109);
}
.description_wrapper::-webkit-scrollbar-thumb {
    background-color: var(--secondary-color);
    outline: 1px solid rgb(86, 99, 109);
}
</style>
