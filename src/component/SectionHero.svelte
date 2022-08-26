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
    <div class="flex items-center justify-between gap-28 w-full mb-32">
        <div class="flex flex-wrap items-center gap-4 basis-1/2">
            <img class="w-full h-full" src="{HeroMainSatu}" alt="">
            <!-- <img class="w-full h-full" src="{HeroMainDua}" alt=""> -->
        </div>
        <div class="basis-1/2 w-full h-full">
            <h6 class="font-semibold text-base">Superiority</h6>
            <h4 class="text-[2rem] font-bold leading-10 my-2">What we can do for your business</h4>
            <p class="text-sm my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quos ipsam nisi obcaecati qui dolorem.</p>
            <p class="text-sm my-2 mb-6
            ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, corporis.</p>
            <LearnMore />
        </div>
    </div>
    <div class="flex items-center justify-between gap-28 mb-32">
        <div class="flex flex-wrap items-center gap-4 basis-1/2">
            <h6 class="font-semibold text-base">Experience</h6>
            <h4 class="text-[2rem] font-bold leading-10 my-2">What we can do for your business</h4>
            <img  src="{HeroMainDua}" alt="">
            <LearnMore />
        </div>
        <!-- <div class="flex flex-wrap items-center basis-1/2 bg-ima bg-hero-tiga object-cover bg-cover bg-no-repeat"> -->
        <div class="flex flex-wrap items-center basis-1/2">
            <img class="w-full h-[470px] object-cover" src="{HeroMainTiga}" alt="">
        </div>
    </div>
    <div class="flex items-center justify-around gap-28 w-full">
        <div class="flex flex-wrap items-center justify-center gap-4 w-[10vw]">
            <button>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor"
                    class="h-12 p-[0.6rem] bg-oranye/[0.2] text-oranye rounded-full">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                </svg>
            </button>
            <span class="font-bold text-4xl">150+</span>
            <p class="text-sm">Completed Sites</p>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-4 w-[10vw]">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-12 p-[0.6rem] bg-light-blue/[0.2] text-light-blue rounded-full">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

            </button>
            <span class="font-bold text-4xl">12000+</span>
            <p class="text-sm">Completed Sites</p>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-4 w-[10vw]">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-12 p-[0.6rem] bg-oranye/[0.2] text-oranye rounded-full mr-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                   
            </button>
            <span class="font-bold text-4xl">90+</span>
            <p class="text-sm">Completed Sites</p>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-4 w-[7.9vw]">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-12 p-[0.6rem] bg-light-blue/[0.2] text-light-blue rounded-full">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>                  
            </button>
            <span class="font-bold text-4xl">20</span>
            <p class="text-sm">Completed Sites</p>
        </div>
    </div>
</section>