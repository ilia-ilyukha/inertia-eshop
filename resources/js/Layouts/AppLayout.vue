<template>
    <div>

        <Head :title="title" />
        <Head>
        <title>{{ title }}</title>
        <meta name="description" content="Your page description">
        </Head>
        <div class="min-h-screen bg-gray-100">
            <Nav />

            <!-- Page Heading -->
            <header class="bg-gray-700 shadow">
                <div class="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
                    <h2 class="text-white text-center leading-tight">
                        Lorem ipsum dolor sit amet.
                    </h2>
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot />
            </main>
            <Footer />
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Link } from '@inertiajs/vue3';
import { Head } from '@inertiajs/vue3'
// import Footer from '@/Components/Footer.vue'
// import Nav from '@/Components/Nav';
import Nav from '@/Components/Nav.vue'

// import JetDropdown from '@/Jetstream/Dropdown.vue'
// import JetDropdownLink from '@/Jetstream/DropdownLink.vue'
// import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink.vue'
export default defineComponent({
    props: {
        title: String,
    },
    components: {
        Link,
        Nav,
        // JetDropdown, 
        // JetDropdownLink,
        // JetResponsiveNavLink,
    },
    data() {
        return {
            showingNavigationDropdown: false,
        }
    },
    methods: {
        logout() {
            this.$inertia.post(route('logout'));
        },
    }
})

// export default defineComponent({
//     props: {
//         title: String,
//     },
//     components: {
//         Head,
//         Footer,
//         Nav,
//     },
// })
</script>