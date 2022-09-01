<script>
    import Logo from '../images/logo.png'
    import HeaderMain from '../images/header_main.jpg'
    
</script>

<header class="min-h-screen max-w-6xl mx-auto">
    <div class="mt-6">
        <nav class="flex items-center justify-between">
            <img
                class="h-12 object-cover"
                src="https://res.cloudinary.com/nexteam-teknologi-indonesia/image/upload/v1643551911/api-specArtboard_1_nj5iug.png"
                alt=""
            />
            <ul class="flex items-center justify-between space-x-12 text-sm">
                <li class="hover:text-blue-500"><a href="/">Home</a></li>
                <li class="hover:text-blue-500"><a href="/">Project</a></li>
                <li class="hover:text-blue-500"><a href="/">Service</a></li>
                <li class="hover:text-blue-500"><a href="/">Blog</a></li>
                <li class="hover:text-blue-500"><a href="/">Contact</a></li>
            </ul>
            <div class="flex items-center justify-between">
                <button
                    type="button"
                    class="text-white bg-blue-500 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center space-x-4"
                >
                    Sign up now
                    <i class="bx bx-right-arrow-alt" />
                </button>
            </div>
        </nav>
        <section
            class="flex flex-col flex-wrap items-center justify-between my-20"
        >
            <div class="flex items-center justify-between space-x-12 mb-16">
                <h1 class="basis-1/2 font-semibold text-5xl">
                    Grow your business start marketing
                </h1>
                <p class="basis-1/2  text-lg">
                    Our people-first approach to SEO services combines
                    creativity with technology to build customizied plans that
                    deliver on your business goals
                </p>
            </div>
            <img
                class="rounded-xl min-w-full max-h-[85vh]"
                src={HeaderMain}
                alt=""
            />
        </section>
    </div>
</header>
