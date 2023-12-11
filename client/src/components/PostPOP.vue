<template>
    <div class="popup-overlay">
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
                    </div>
                    <div class="title">a title</div>
                    <div class="description_wrapper">
                        <div class="description">some description</div>
                    </div>
                    <div class="comments"></div>
                </div>
            </div>
            <div class="tag_title"></div>
            <span class="close-btn">&times;</span>
            <span class="task_bar"></span>
        </div>
    </div>
</template>

<script>
export default {};
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
    padding: 0px 0px 0px 10px;
    text-align: center;
    max-width: 80%;
    margin: auto;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
}
</style>
