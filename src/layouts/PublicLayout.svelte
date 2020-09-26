<script>
import { layoutStore } from "../lib/LayoutStore";
export let slots
</script>
<ios-app>
    <ion-page class ="ion-page" id="main-content">
        <ion-header>
            <ion-toolbar>
                <ion-title>{$layoutStore.title}</ion-title>
            </ion-toolbar>
        </ion-header>
        <svelte:component this={slots.content}/>
    </ion-page>
</ios-app>
