<template>
    <app-layout :title="`Shop ${categoryName}`">

        <secondary-header :title="`Shop ${categoryName}`">
            <template #breadcrumbs>
                <Icons name="angle-right" class="w-4 h-4 fill-current"></Icons>
                <Link :href="route('shop.index')" clas="text-gray-700 transition hover:text-yellow-500">
                Shop
                </Link>
                <Icons name="angle-right" class="w-4 h-4 fill-current"></Icons>
                <span>Product {{ product.name }}</span>
            </template>

            <template #search>
                Search
            </template>
        </secondary-header>
        <!-- <div class="flex">
            <div class="border-r w-1/5">
                <div>
                    <div class="text-white text-center bg-gray-700 py-4">
                        <p>Shop by category</p>
                    </div>
                    <div class="flex flex-col divide-">
                        <Link :href="route('shop.index', { category: category.slug })"
                            v-for="(category, index) in categories" :key="index"
                            class="text-left px-4 py-4 transition hover:text-white hover:bg-gray-700 sm:px-6 lg:px-8"
                            :class="route().current('shop.index', { category: category.slug }) ? 'bg-gray-700 text-white' : ''">
                        {{ category.name }}
                        </Link>
                    </div>
                </div>
            </div>
            <div class="border-l w-4/5">
                <div class="flex justify-end space-x-2 pt-4 pr-4" v-if="categorySlug">
                    <span class="font-bold">Price:</span>
                    <Link :href="route('shop.index', { category: categorySlug, sort: 'low_high' })"
                        class="hover:text-yellow-500">Low to High</Link>
                    <span>|</span>
                    <Link :href="route('shop.index', { category: categorySlug, sort: 'high_low' })"
                        class="hover:text-yellow-500">High to Low</Link>
                </div>
                <div class="container flex flex-wrap mx-auto">

                </div>
            </div>
        </div> -->
        <div class="max-w-7xl mx-auto px-4 py-4 sm:flex sm:space-x-4 sm:px-6 lg:px-8">
            <div class="flex flex-col flex-1 sm:border-r">
                <div class="border-2 overflow-hidden cursor-zoom-in h-full">
                    <div id="img-container" class="w-full h-full">
                        <img id="current-img" :src="'/storage/images/products/' + product.image" :alt="product.name"
                            class="w-full h-full object-cover origin-center">
                        <!-- <img id="current-img" :src="'/storage/images/products/'+currentImg" :alt="product.name" class="w-full h-full object-cover origin-center"> -->
                    </div>
                </div>
                <div class="mt-6" v-if="product.alt_images">
                    <Carousel :settings="settings" :breakpoints="breakpoints">
                        <Slide v-for="(image, index) in slides" :key="index"
                            class="cursor-pointer border-2 border-black hover:border-blue-600"
                            :class="{ selected: index === isActive, 'border-red-600': index === isActive }"
                            @click.prevent="changeCurrentImage(image, index)">
                            <div class="carousel__item flex w-full h-full">
                                <img :src="'/storage/images/products/' + image" class="object-cover"
                                    :class="{ 'opacity-50': index !== isActive }">
                            </div>
                        </Slide>

                        <template #addons>
                            <Navigation />
                        </template>
                    </Carousel>
                    <!-- "\/images\/products\/January_2022\/alts\/kids-12.png" -->
                </div>
            </div>
            <div class="flex-1 space-y-6 my-4 sm:mt-0 sm:border-l sm:pl-4">
                <form @submit.prevent="submit">
                    <div class="flex justify-between items-center">
                        <h2 class="text-2xl font-semibold capitalize italic">{{ product.name }}</h2>
                        <div class="text-xl capitalize italic">
                            <span>
                                Price:
                            </span>
                            <span>
                                {{ $filters.formatCurrency(product.price) }}
                            </span>
                        </div>
                    </div>

                    <div class="flex space-x-4 mt-4">
                        <p class="text-xl capitalize">
                            {{ product.details }}
                        </p>
                    </div>
                    <div class="flex space-x-4 mt-4">
                        <span class="text-xl capitalize">
                            Sku:
                        </span>
                        <p class="text-xl capitalize">
                            {{ product.slug }}
                        </p>
                    </div>

                    <div class="mt-4">

                        <template v-if="product.quantity <= 0">
                            <div class="mt-4">
                                <span class="text-2xl text-red-600 font-semibold italic uppercase">
                                    Sold Out
                                </span>
                            </div>
                        </template>

                        <template v-else-if="product.quantity <= 5">
                            <div class="mt-4">
                                <span class="text-2xl text-yellow-600 font-semibold italic uppercase">
                                    Only a few left
                                </span>
                            </div>
                            <div class="flex items-center">
                                <label for="quantity" class="flex-1 text-xl capitalize">Qty:</label>
                                <select class="flex-1 w-full border bg-white rounded px-3 py-1 outline-none"
                                    tabindex="1" v-model="form.quantity">
                                    <option :value="qty" :selected="qty === quantity"
                                        v-for="(qty, index) in product.quantity" :key="index">{{ qty }}</option>
                                </select>
                            </div>
                        </template>

                        <template v-else>
                            <div class="flex items-center">
                                <label for="quantity" class="flex-1 text-xl capitalize">Qty:</label>
                                <select class="flex-1 w-full border bg-white rounded px-3 py-1 outline-none"
                                    tabindex="1" v-model="form.quantity">
                                    <option :value="qty" :selected="qty === quantity"
                                        v-for="(qty, index) in product.quantity" :key="index">{{ qty }}</option>
                                </select>
                            </div>
                        </template>
                    </div>
                    <!-- <div class="text-center mt-4" v-if="product.quantity > 0"> -->
                    <div class="text-center mt-4" v-if="true">
                        <gray-button as="submit" class="text-sm">
                            <span>Add to Cart</span>
                        </gray-button>
                    </div>
                </form>
                <div class="flex flex-col divide-y">
                    <div>
                        <button type="button"
                            class="flex justify-between items-center bg-gray-300 rounded-t px-4 py-4 w-full transition hover:text-white hover:bg-gray-700 sm:px-6 lg:px-8"
                            @click.prevent="openDescription = !openDescription">
                            <span>Product Description</span>
                            <icon name="angle-down" class="w-5 h-5 text-yellow-500 fill-current" v-if="openDescription">
                            </icon>
                            <icon name="angle-left" class="w-5 h-5 text-yellow-500 fill-current" v-else></icon>
                        </button>
                        <div class="bg-gray-50 px-4 py-4 sm:px-6 lg:px-8" v-if="openDescription">
                            <p>
                                {{ product.description }}
                            </p>
                        </div>
                    </div>
                    <div>
                        <button type="button"
                            class="flex justify-between items-center bg-gray-300 rounded-t px-4 py-4 w-full transition hover:text-white hover:bg-gray-700 sm:px-6 lg:px-8"
                            @click.prevent="openFeatures = !openFeatures">
                            <span>Product Features</span>
                            <icon name="angle-down" class="w-5 h-5 text-yellow-500 fill-current" v-if="openFeatures">
                            </icon>
                            <icon name="angle-left" class="w-5 h-5 text-yellow-500 fill-current" v-else></icon>
                        </button>
                        <div class="bg-gray-50 px-4 py-4 sm:px-6 lg:px-8" v-if="openFeatures">
                            <p>
                                {{ product.description }}
                            </p>
                        </div>
                    </div>
                    <div>
                        <button type="button"
                            class="flex justify-between items-center bg-gray-300 rounded-t px-4 py-4 w-full transition hover:text-white hover:bg-gray-700 sm:px-6 lg:px-8"
                            @click.prevent="openReturn = !openReturn">
                            <span>Return Policy</span>
                            <icon name="angle-down" class="w-5 h-5 text-yellow-500 fill-current" v-if="openReturn">
                            </icon>
                            <icon name="angle-left" class="w-5 h-5 text-yellow-500 fill-current" v-else></icon>
                        </button>
                        <div class="bg-gray-50 px-4 py-4 sm:px-6 lg:px-8" v-if="openReturn">
                            <p>
                                Don't worry about returns, we'll send you a new one!
                            </p>
                        </div>
                    </div>
                    <div>
                        <button type="button"
                            class="flex justify-between items-center bg-gray-300 rounded-t px-4 py-4 w-full transition hover:text-white hover:bg-gray-700 sm:px-6 lg:px-8"
                            @click.prevent="openReviews = !openReviews">
                            <span>Reviews</span>
                            <icon name="angle-down" class="w-5 h-5 text-yellow-500 fill-current" v-if="openReviews">
                            </icon>
                            <icon name="angle-left" class="w-5 h-5 text-yellow-500 fill-current" v-else></icon>
                        </button>
                        <div class="bg-gray-50 px-4 py-4 sm:px-6 lg:px-8" v-if="openReviews">
                            <p>
                                It's fantastic!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <p>Suggested based on your search</p>
                </div>
                <div class="flex space-x-4">
                    <Link :href="route('shop.show', item.slug)" class="flex border border-black w-1/4 h-24"
                        v-for="(item, index) in similarProducts" :key="index">
                    <img :src="'/storage/' + item.main_image" :alt="item.name" class="w-full object-cover">
                    </Link>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import GrayButton from '@/Components/Buttons/GrayButton.vue'
import Icons from '@/Components/Icons.vue';

import { Carousel, Slide, Navigation } from 'vue3-carousel'
import SecondaryHeader from '@/Components/SecondaryHeader.vue';
const props = defineProps({
    product: {
        type: Object
    }
});
const product = props.product;
// const categories = [
//     {name: "Womens", slug: "women"}, 
//     {name: "Men", slug: "men"},
//     {name: "kids", slug: "kids"},
// ];
const slides = [
    "mens-4.png",
    "mens-4.png",
    "mens-4.png",
    "mens-4.png"
];
const settings = {
    itemsToShow: 1,
    snapAlign: 'center',
};
const form = useForm ({
    id: product.id,
    name: product.name,
    price: product.price,
    product_code: product.product_code,
    details: product.details,
    main_image: product.main_image,
    alt_images: product.alt_images,
    slug: product.slug,
    quantity: 1,
    totalQty: product.quantity,
});
// const form = this.$inertia.form();

function submit() {
    form.post(this.route('cart.store', this.form), {
        preserveScroll: true,
        onSuccess: () => {
            Toast.fire({
                icon: 'success',
                title: `${this.form.name} has successfully been added to your cart!`
            })
        }
    })
}

function changeCurrentImage(image, index) {
    if (image) {
        this.currentImg = image
        this.isActive = index
        this.selected = false
    } else {
        this.currentImg = this.product.main_image
        if (this.isActive = index) {
            this.selected = false
        } else {
            this.selected = true
        }
    }
}

function zoomImage() {
    let container = document.querySelector('#img-container')
    let img = document.querySelector('#current-img')
    container.addEventListener("mousemove", (e) => {
        let x = e.clientX - e.target.offsetLeft
        let y = e.clientY - e.target.offsetTop
        img.style.transformOrigin = `${x}px ${y}px`
        img.style.transform = "scale(3)"
    })
    container.addEventListener("mouseleave", () => {
        img.style.transformOrigin = "center"
        img.style.transform = "scale(1)"
    })
}
</script>