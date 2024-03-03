<script setup>
import { Head, Link } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import GrayButton from '@/Components/Buttons/GrayButton.vue'
defineProps({
    featured: {
        type: Array
    },
    categories: {
        type: Array
    },
});

// const categories = [
//     {name: "Womens", slug: "women"},
//     {name: "Men", slug: "men"},
//     {name: "kids", slug: "kids"},
// ];

</script>


<template>
    <app-layout title="Welcome">
        <div class="relative">
            <img :src="'/storage/images/site_images/instagram-image-size.jpg'" alt="Coder's Store"
                class="w-full h-96 opacity-75 object-cover">
            <div class="flex flex-col justify-around items-center absolute inset-0">
                <span class="text-white text-xl">Lorem ipsum dolor sit amet.</span>
                <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <gray-button as="href" :href="event" class="text-md"
                        v-for="(category, index) in categories" :key="index">
                        {{ category.name }}
                    </gray-button>
                </div>
            </div>
        </div>
        <div class="text-center border-t border-b py-4">
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="flex flex-col max-w-7xl mx-auto px-4 sm:container sm:flex-row sm:space-x-4 sm:my-4 sm:px-6 lg:px-8">
            <Link href="/" class="flex flex-col w-full p-4 rounded sm:w-1/2 md:w-1/3 lg:w-1/4"
                v-for="(feat, index) in featured" :key="index">
            <div class="text-center text-white bg-gray-700 py-2">
                <span>
                    {{ feat.name }}
                </span>
            </div>
            <img :src="'/storage/images/products/' + feat.image" :alt="feat.name" class="h-72 object-cover md:w-72 lg:w-96">
            </Link>
        </div>
        <div class="text-center text-white bg-black px-4 py-4 flex justify-center">
            <p class="container">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto fuga neque culpa illum sit exercitationem
                enim dolores dolor quaerat quos, ex ipsa, recusandae in ad voluptates officia voluptatem, nobis animi!
                Magni harum quos voluptas ex eveniet inventore rerum ducimus repellendus! Saepe, nam. Tempora optio ratione
                ipsa. Commodi est voluptatem excepturi dignissimos voluptas nostrum ut atque, repellendus quidem nesciunt,
                maiores fugiat?
                Esse eligendi amet quo error, nostrum necessitatibus laudantium nulla rem quidem accusantium tenetur,
                aperiam qui excepturi! Natus, praesentium repellat esse optio fugiat id vel voluptatum deserunt minus,
                provident cum doloribus.
            </p>
        </div>
    </app-layout>
</template>

<style>
.bg-dots-darker {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
}

@media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
    }
}</style>
