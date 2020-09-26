<script>
import {layoutStore} from '../lib/LayoutStore'
export let slots
</script>

<ion-app>
    <ion-page class="ion-page">
        <ion-header>
            <ion-toolbar>
                {#if $layoutStore.showBack}
                    <ion-buttons slot="start">
                        <ion-button>
                            <ion-icon slot="start" name="chevron-back-outline"></ion-icon>
                            back
                        </ion-button>
                    </ion-buttons>
                {/if}
                <ion-title>{$layoutStore.title}</ion-title>
            </ion-toolbar>
        </ion-header>
        <svelte:component this={slots.content} />

    </ion-page>
</ion-app>