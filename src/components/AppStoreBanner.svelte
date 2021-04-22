{#if visible}
    <section class="appStoreBanner ion-padding" transition:fly="{{ y: 200, duration: 500 }}">
        <div>
            <h2>finna is better on the app</h2>
            <p>never miss an invite.</p>    
        </div>
        <ion-row>
            <ion-col>
                <ion-button 
                    expand="block" 
                    color="snorkelfart" 
                    on:click={toggleVisibility}
                >not now</ion-button>
            </ion-col>
            <ion-col>
                <ion-button 
                    expand="block" 
                    color="snorkelfart" 
                    target="_blank" 
                    href="https://apps.apple.com/us/app/finna/id940211777"
                >i'm finna join</ion-button>
                <!-- get the app -->
            </ion-col>
        </ion-row>
    </section>
{/if}

<script>
import { fly } from 'svelte/transition';
let visible = true
const toggleVisibility = () => { visible = !visible }
</script>


<style scoped>
.appStoreBanner {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    background: var(--bgDarkMode);
    border-top: 1px solid var(--dolphin)
}
</style>