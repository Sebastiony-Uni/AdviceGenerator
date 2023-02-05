<script lang='ts'>
  import { onMount } from 'svelte';
    import dice_icon from '../advice-generator-app-main/images/icon-dice.svg';
    import pattern_divide1 from '../advice-generator-app-main/images/pattern-divider-desktop.svg';
    import pattern_divide2 from '../advice-generator-app-main/images/pattern-divider-mobile.svg';

    type responseType = {
        slip: {
            advice: string,
            id: number,
        }
    }

    let text: string = ""
    let resId: number;

    onMount(async () => {
        await handlePress();
    })

    async function handlePress(){
        let response: responseType = await fetch('/api/getquote').then((response) => response.json())
        const {advice, id} = response.slip;
        text = advice;
        resId = id;
    }
</script>


<!-- Container -->
<body class="container">
    <!-- Box -->
    <div class="box">
        <p class="green advice">A D V I C E  # {resId}</p>
        <h1>"{text}"</h1>
        <img class="pattern-divider" src={pattern_divide1} alt="dividing pattern"/>
    </div>
    <!-- Image -->
    <div class="imgBorder">
        <button style="display:flex; color: transparent; background-color: transparent; border-color: transparent;" on:click={() => handlePress()}>
            <img class="dice_icon" src={dice_icon} alt=""/>
        </button>
    </div>
</body>


<style>
    .green{
        color: #54feaa;
    }
    @font-face{
        font-family: "Manrope";
        font-style: normal;
        font-weight: 800;
        src: local("Manrope"), url("https://fonts.google.com/specimen/Manrope");
    }
    .container{
        font-family: "Manrope";
        background-color:#212632; 
        display:flex;
        flex-direction: column;
        position: absolute;
        align-items: center;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%)
    }
    .box{
        text-align: center;
        border-radius: 10px;
        display:flex;
        flex-direction: column;
        align-items: center;
        padding:10px 50px 50px 50px;
        width:300px;
        background-color: #303a49;
        margin-top: auto;
    }
    h1{
        margin-top: 0px;
        color:white;
        font-size: 19px;
    }
    .advice{
        font-size: 10px;
    }
    .imgBorder{
        margin-top: -17.5px;
        display:flex;
        width:20px;
        height:20px;
        align-items: center;
        justify-content: center;
        background-color: #54feaa;
        border-radius: 100%;
        padding:7px;
    }
    .dice_icon{
        width:15px;
        height:15px;
    }
    .pattern-divider{
        max-width:100%;
    }
    .imgBorder:active{
        background-color: orange;
    }
</style>