<script>
import { layoutStore } from "../lib/LayoutStore";
export let slots
</script>
<ios-app>
    <ion-page class ="ion-page" id="main-content">
        <ion-header>
            <ion-toolbar>
                <img src='/assets/Images/wave_pattern_dark.png' class="bg" alt='background'>
                
                <img src='/assets/Images/logo_lettering_dark.png' class="logo" alt='background'>
                <!-- <ion-title>{$layoutStore.title}</ion-title> -->
            </ion-toolbar>
        </ion-header>
        <svelte:component this={slots.content}/>
    </ion-page>
</ios-app>

<style>
img {
    --padding-top: 0px;
    --padding-bottom: 0px;
    --padding-start: 0px;
    --padding-end: 0px;
    /* position: absolute; */
}
.logo {
    position: absolute;
    top: 10px;
    width: 30%;
    left: 35%;
}
ion-toolbar {
    height: 60px;
    overflow: hidden;
    position: relative;
}
</style>