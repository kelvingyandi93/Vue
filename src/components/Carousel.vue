<template>
    <div class="app">
        <carousel >
            <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
                <img :src="slide" :alt="slide">
            </carousel-slide>
        </carousel>
    </div>    
</template>

<script>
import Carousel from './CarouselComponents/CarouselComp.vue';
import CarouselSlide from './CarouselComponents/CarouselSlide.vue';

export default {
    data(){
        return {
            slides: [
                'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wired.com%2Fstory%2Fstay-in-the-moment-take-a-picture%2F&psig=AOvVaw0iahDNhOF8vpCBahkm8R1f&ust=1679215418595000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIDNwIWL5f0CFQAAAAAdAAAAABAE',
                'https://picsum.photos/id/231/600/300',
        ]
        }
    },

    components : {
        Carousel : Carousel,
        CarouselSlide : CarouselSlide,
    }
}
</script>

<style>
    .app {
        display:flex;
        justify-content: center;
    }
    .carousel {
        position:relative;
        overflow: hidden;
        width:800px;
        height:500px;
        z-index:10;
    }
    .btn {
        padding:5px 10px;
        background-color:rgba(0,0,0,0.5);
        border:1px solid transparent;
        margin:5px 10px;
        color:#FFF;
        height:50px;
        width:50px;
        position:absolute;
        margin-top:-25px;
        z-index:2;
    }
    .btn:hover {
        cursor: pointer;
    }
    .btn:focus{
        outline:none;
    }
    .btn-next {
        top:50%;
        right:0;
    }
    .btn-prev {
        top:50%;
        left:0;
    }
    .carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    .carousel-slider img {
        width:100%;
        height:100%;
    }

</style>