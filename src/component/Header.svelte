<script>
    import Logo from '../images/logo.png'
    import HeaderMain from '../images/header_main.jpg'
    
</script>

<header class="min-h-[150vh]">
    <div class="bg-dark-blue bg-cover h-[100vh]">
        <nav class="flex items-center justify-between py-3 max-w-5xl mx-auto">
            <img class="text-white h-12" src="{Logo}" alt="">
            <ul class="flex items-center justify-between gap-8 text-white text-sm">
                <li>Home+</li>
                <li>Project+</li>
                <li>Service+</li>
                <li>Blog+</li>
                <li>Contact+</li>
            </ul>
            <div class="flex items-center justify-between gap-3 text-white">
            <button class="bx bx-search-alt-2 h-8 p-2 bg-gray-500/50 text-white rounded-full"></button>
            <button class="bg-white text-black font-semibold px-6 py-1.5 rounded-3xl">Sign In</button>
            </div>
        </nav>
        <section class="flex flex-wrap items-center justify-between py-20 max-w-5xl mx-auto">
            <div class="flex items-center justify-between text-white pb-16 gap-4">
                <h1 class="basis-1/2 font-semibold text-5xl">Grow your business start marketing</h1>
                <p class="basis-1/2 text-sm">Our people-first approach to SEO services combines creativity with technology to build customizied plans that deliver on your business goals</p>
            </div> 
            <img class="rounded-xl min-w-full max-h-[85vh]" src="{HeaderMain}" alt="">
        </section>
    </div>
</header>