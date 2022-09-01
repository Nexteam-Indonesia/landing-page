<script>
    import Hero from '../images/hero.png'
    import HeroMainSatu from '../images/hero_main_1.jpg'
    import HeroMainDua from '../images/hero_main_2.jpg'
    import HeroMainTiga from '../images/hero_main_3.jpg'
    import LearnMore from '../Button/LearnMore.svelte'
</script>

<section class="my-12 mx-32">
    <div class="flex items-center justify-between mb-28 gap-6">
        <img class="h-[20vh] w-[15vw]" src="{Hero}" alt="">
        <img class="h-[20vh] w-[15vw]" src="{Hero}" alt="">
        <img class="h-[20vh] w-[15vw]" src="{Hero}" alt="">
        <img class="h-[20vh] w-[15vw]" src="{Hero}" alt="">
    </div>
    <div class="flex items-center justify-between gap-28 mb-32 max-w-5xl mx-auto">
        <div class="flex flex-wrap items-center gap-4 basis-1/2">
            <img class="w-full h-full" src="{HeroMainSatu}" alt="">
            <!-- <img class="w-full h-full" src="{HeroMainDua}" alt=""> -->
        </div>
        <div class="basis-1/2 w-full h-full">
            <h6 class="font-semibold text-base">Superiority</h6>
            <h4 class="text-3xl font-bold leading-10 my-2">What we can do for your business</h4>
            <p class="text-sm my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quos ipsam nisi obcaecati qui dolorem.</p>
            <p class="text-sm my-2 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, corporis.</p>
            <LearnMore />
        </div>
    </div>
    <div class="flex items-center justify-between gap-28 mb-32 max-w-5xl mx-auto">
        <div class="basis-1/2 w-full h-full">
            <h6 class="font-semibold text-base">Experience</h6>
            <h4 class="text-3xl font-bold leading-10 my-2">Pay for qualified traffic</h4>
            <img class="my-4" src="{HeroMainDua}" alt="">
            <LearnMore />
        </div>
        <!-- <div class="flex flex-wrap items-center basis-1/2 bg-ima bg-hero-tiga object-cover bg-cover bg-no-repeat"> -->
        <div class="flex flex-wrap items-center basis-1/2">
            <img class="w-full h-96 object-cover" src="{HeroMainTiga}" alt="">
        </div>
    </div>
    <div class="flex items-center justify-around gap-28 max-w-5xl mx-auto">
        <div class="flex flex-wrap items-center justify-center gap-4 w-[10vw]">
            <button class="bx bx-globe h-14 w-14 p-2 bg-oranye/[0.2] text-oranye rounded-full text-3xl"></button>
            <span class="font-bold text-4xl">150+</span>
            <p class="text-sm">Completed Sites</p>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-4 w-[10vw]">
            <button class="bx bx-time-five h-14 w-14 p-2 bg-light-blue/[0.2] text-light-blue rounded-full text-3xl"></button>
            <span class="font-bold text-4xl">12000+</span>
            <p class="text-sm">Completed Sites</p>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-4 w-[10vw]">
            <button class="bx bx-user h-14 w-14 p-2 bg-oranye/[0.2] text-oranye rounded-full text-3xl"></button>
            <span class="font-bold text-4xl">90+</span>
            <p class="text-sm">Completed Sites</p>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-4 w-[7.9vw]">
            <button class="bx bx-award h-14 w-14 p-2 bg-light-blue/[0.2] text-light-blue rounded-full text-3xl"></button>
            <span class="font-bold text-4xl">20</span>
            <p class="text-sm">Completed Sites</p>
        </div>
    </div>
</section>