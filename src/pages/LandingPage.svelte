<script>
</script>

<ion-app>
    <ion-content>

        <div class="content-area">
            <div class='logo-area'>
                <img class='logo' src="/assets/landing/logo.png" alt="Finna Logo">
            </div>
            
            <h1>YOU'RE FINVITED</h1>

            <img class="screenshots" src="/assets/landing/screens.png" alt="Finna Screenshots">

            <div class="summary">
                <p>Finna is your go-to social networking app, because it actually makes you more social. Have something you want to do? Tell your friends you are finna, and let the conversation begin. Your friends can comment to iron out the details, and say they are 'finna', letting you know that they want to join.</p>

                <p>By taking away the stress and intricacies of the normal planning process, making plans becomes easier than ever. If your contacts are 'finna,' they've agreed on the date, time, and activity. <b>All that's left is to make it happen!</b></p>
            </div>
            <ul class="info-links">
                <li><a href="mailto:admin@finna.events">Support</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a>
                </li>
            </ul>
        </div>

    </ion-content>
</ion-app>

<style>
ion-content {
    --background: none;
    background-image: url('/assets/landing/background.png');
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-color: var(--bgLightMode);
}
.content-area {
    padding: 70px 140px 0 140px;
}
h1 {
    color: var(--sharkbait);
    font-family: Avenir-Black;
    font-size: 120px;
    line-height: 125px;
    width: 570px;
}
.summary{
    padding-top: 150px;
}
p {
    color: var(--dolphin);
    font-family: Catamaran-Light;
    font-size: 17px;
    line-height: 22px;
    text-transform: lowercase;
    width: 570px;
}
ul {
    margin: 0;
    padding: 0;
    overflow: hidden;
}
ul li {
    list-style-type: none;
    float: left;
}
ul li a {
    padding: 16px;
    color: var(--activeBlue);
    font-family: Catamaran-Light;
}
.logo {
    width: 240px;
}
.screenshots {
    width: 800px;
    float: right;
    position: relative;
    top: -380px;
}
@media only screen and (max-width: 1630px) {
    .content-area {
        padding: 30px 50px 50px 50px;
    }
}
@media only screen and (max-width: 1480px) {
    body {
        background-size: auto 50%;
    }
    h1 {
        width: auto;
    }
    .screenshots {
        top: 0;
        float: none;
    }
    .summary {
        padding-top: 20px;
    }
    p {
        width: auto;
    }
}
@media only screen and (max-width: 900px) {
    .logo {
        width: 140px;
    }
    h1 {
        font-size: 55px;
        line-height: 65px;
    }
    .summary {
        padding-top: 20px;
    }
    .screenshots {
        width: 100%;
    }
}
@media only screen and (max-width: 340px) {
    h1 {
        font-size: 40px;
        line-height: 45px;
    }
}
</style>