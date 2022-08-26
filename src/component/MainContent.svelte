<script>
    import GettingStarted from "../Button/GettingStarted.svelte";
    import ContentMain from "../images/content_main.jpg"
    import Person from "../images/person.png"
</script>

<section class="px-[3em] py-[4.5em] text-white">
    <div class="text-center w-full gap-8 m-auto mb-8 text-dark-blue">
        <h6 class="font-semibold text-base">Our Team</h6>
        <h4 class="text-[2rem] font-bold leading-10 my-2">Meet our team member</h4>
        <p class="m-auto w-2/5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quibusdam aliquam. Nulla!</p>
    </div>
    <div class="flex justify-center items-center gap-4 text-center mx-20">
        <div class="flex flex-wrap justify-center items-center gap-4 text-center">
            <img class="rounded-[3em]" src="{ContentMain}" alt="">
            <div class="text-dark-blue">
                <h5 class="text-[2rem] font-bold leading-10 my-2">Derek Peterson</h5>
                <p class="m-auto">Project Manager</p>
            </div>
        </div>
        <div class="flex flex-wrap justify-center items-center gap-4 text-center">
            <img class="rounded-[3em]" src="{ContentMain}" alt="">
            <div class="text-dark-blue">
                <h5 class="text-[2rem] font-bold leading-10 my-2">Ashton Berube</h5>
                <p class="m-auto">Marketing Consultant</p>
            </div>
        </div>
        <div class="flex flex-wrap justify-center items-center gap-4 text-center">
            <img class="rounded-[3em]" src="{ContentMain}" alt="">
            <div class="text-dark-blue">
                <h5 class="text-[2rem] font-bold leading-10 my-2">Jimmy Forman</h5>
                <p class="m-auto">Project Manager</p>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="text-center w-full gap-8 m-auto mb-8 text-dark-blue">
        <h6 class="font-semibold text-base">Pricing List</h6>
        <h4 class="text-[2rem] font-bold leading-10 my-2">Which one is suitable for you</h4>
        <p class="m-auto w-2/5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda earum architecto, sunt at eos quo ex quidem delectus porro repellat.</p>
    </div>
    <div class="flex mx-32">
        <div class="text-center flex flex-wrap mx-auto my-[2em] py-[2em] px-[1em] w-[20vw] gap-4">
            <div class="text-dark-blue flex flex-wrap justify-center m-auto items-center gap-2 w-[10vw] ">
                <h5 class="text-lg font-semibold">Basic Plan</h5>
                <hr class="w-[3em] h-[0.3em] bg-light-blue">
            </div>
            <h4 class="text-[3rem] font-semibold mx-auto text-dark-blue">$30<span class="text-base font-semibold">/per month</span></h4>
            <ul class="text-dark-blue flex flex-wrap gap-4 w-[20vw] m-auto">
                <li class="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-5 h-5 bg-light-blue border-2 rounded-full">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>              
                    30 GB Brandwidth    
                </li>
                <li class="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-5 h-5 bg-light-blue border-2 rounded-full">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>              
                    Business & finance analyzing   
                </li>
                <li class="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-5 h-5 bg-light-blue border-2 rounded-full">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>              
                    24 hour support
                </li>
                <li class="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-5 h-5 bg-light-blue border-2 rounded-full">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>              
                    Customer management 
                </li>
                <li class="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-5 h-5 bg-light-blue border-2 rounded-full">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>              
                    30 days version history   
                </li>
            </ul>
        </div>
        <div class="text-center flex flex-wrap mx-auto my-[2em] py-[2em] px-[1em] w-[20vw] gap-4 bg-dark-blue rounded-xl">
            <div class="text-white flex flex-wrap justify-center m-auto items-center gap-2 w-[10vw] ">
                <h5 class="text-lg font-semibold">Favourite Plan</h5>
                <hr class="w-[3em] h-[0.3em] bg-white">
            </div>
            <h4 class="text-[3rem] font-semibold mx-auto text-white">$30<span class="text-base font-semibold">/per month</span></h4>
            <ul class="text-white flex flex-wrap gap-4 w-[20vw] mb-[0.8em]">
                <li class="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="dark-blue" class="w-5 h-5 bg-white bg-[1em] rounded-full">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>              
                    30 GB Brandwidth    
                </li>
                <li class="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="dark-blue" class="w-5 h-5 bg-white bg-[1em] rounded-full">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>              
                    Business & finance analyzing   
                </li>
                <li class="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="dark-blue" class="w-5 h-5 bg-white bg-[1em] rounded-full">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>              
                    24 hour support
                </li>
                <li class="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="dark-blue" class="w-5 h-5 bg-white bg-[1em] rounded-full">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>              
                    Customer management 
                </li>
                <li class="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="dark-blue" class="w-5 h-5 bg-white bg-[1em] rounded-full">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>              
                    30 days version history   
                </li>
            </ul>
            <div class="mx-auto">
                <GettingStarted/>
            </div>
        </div>
        <div class="text-center flex flex-wrap mx-auto my-[2em] py-[2em] px-[1em] w-[20vw] gap-4">
            <div class="text-dark-blue flex flex-wrap justify-center m-auto items-center gap-2 w-[10vw] ">
                <h5 class="text-lg font-semibold">Standard Plan</h5>
                <hr class="w-[3em] h-[0.3em] bg-light-blue">
            </div>
            <h4 class="text-[3rem] font-semibold mx-auto text-dark-blue">$99<span class="text-base font-semibold">/per month</span></h4>
            <ul class="text-dark-blue flex flex-wrap gap-4 w-[20vw] m-auto">
                <li class="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-5 h-5 bg-light-blue border-2 rounded-full">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>              
                    30 GB Brandwidth    
                </li>
                <li class="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-5 h-5 bg-light-blue border-2 rounded-full">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>              
                    Business & finance analyzing   
                </li>
                <li class="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-5 h-5 bg-light-blue border-2 rounded-full">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>              
                    24 hour support
                </li>
                <li class="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-5 h-5 bg-light-blue border-2 rounded-full">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>              
                    Customer management 
                </li>
                <li class="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-5 h-5 bg-light-blue border-2 rounded-full">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                    </svg>              
                    30 days version history   
                </li>
            </ul>
        </div>
    </div>
    <div class="mx-[10em] flex gap-28">
        <div class="text-dark-blue w-full">
            <h6 class="font-semibold text-base">Testimonials</h6>
            <h4 class="text-[2rem] font-bold leading-10 my-4">Valuable feedback from our clients</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dolores asperiores alias voluptas iste veniam.</p>
        </div>
        <div class="flex mt-[4em]">
            <div class="mr-[1.5em]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="bg-white text-oranye h-10 w-10">
                    <path fill-rule="evenodd" d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" clip-rule="evenodd" />
                </svg>  
            </div>
            <div class="flex flex-wrap gap-[1.5em]">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod delectus quo ullam maxime! Totam, aliquid voluptas vitae libero exercitationem, dignissimos, aut ex quia aperiam perferendis ipsa doloremque saepe nam incidunt.</p>
                <div class="flex">
                    <img class="h-10 w-10 rounded-full mr-[1em]" src="{Person}" alt="">
                    <div class="text-dark-blue">
                        <h5 class="font-bold">William Liam</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>