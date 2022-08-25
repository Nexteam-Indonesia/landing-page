<script>
    import Logo from '../images/logo.png'
    import HeaderMain from '../images/header_main.jpg'
</script>

<header class="min-h-[150vh]">
    <div class="bg-dark-blue bg-cover h-[100vh]">
        <nav class="flex items-center justify-between py-3 mx-32">
            <img class="text-white h-12" src="{Logo}" alt="">
            <ul class="flex items-center justify-between gap-8 text-white text-sm">
                <li>Home+</li>
                <li>Project+</li>
                <li>Service+</li>
                <li>Blog+</li>
                <li>Contact+</li>
            </ul>
            <div class="flex items-center justify-between gap-3 text-white">
            <button>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="h-8 p-2 bg-gray-500/50 text-white rounded-full">
                <path stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
            <button class="bg-white text-black font-semibold px-6 py-1.5 rounded-3xl">Sign In</button>
            </div>
        </nav>
        <section class="flex flex-wrap items-center justify-between py-20 mx-32">
            <div class="flex items-center justify-between text-white pb-16 gap-4">
                <h1 class="basis-1/2 font-semibold text-[3rem]">Grow your business start marketing</h1>
                <p class="basis-1/2 text-[0.8rem]">Our people-first approach to SEO services combines creativity with technology to build customizied plans that deliver on your business goals</p>
            </div> 
            <img class="rounded-xl min-w-full max-h-[85vh]" src="{HeaderMain}" alt="">
        </section>
    </div>
</header>