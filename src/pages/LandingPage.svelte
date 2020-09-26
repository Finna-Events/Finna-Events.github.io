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

            <p>Finna is a mobile application for simple, casual planning, in which users simply state what they would like to do. From that point, the user's closest contacts can like the post, indicating that they, too, are finna, and would like to join in on the activity. By taking away the stress and intricacies of the normal planning process, making plans becomes easier than ever. If your contacts are 'finna,' they agree on the date, time, and activity. <b>All that's left is to do.</b></p>

            <ul class="info-links">
                <li><a href="mailto:admin@finna.events">Support</a></li>
                <li><a href="https://finna.flycricket.io/privacy.html">Privacy Policy</a>
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
p {
    color: var(--dolphin);
    font-family: Catamaran-Light;
    font-size: 17px;
    line-height: 22px;
    text-transform: lowercase;
    width: 570px;
    padding-top: 150px;
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
        padding: 30px 50px 0 50px;
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
    p {
        padding-top: 20;
        width: auto;
    }
}
@media only screen and (max-width: 900px) {
    .logo {
        width: 140px;
    }
    h1 {
        font-size: 60px;
        line-height: 65px;
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