<script>
    import {Creator} from "./participant/creator"
    let ctr
    const creatEvent = async () => {
        ctr = new Creator()
        await ctr.deploy()
    }
</script>
<div>
    <button on:click={()=>{creatEvent()}}>CREATE EVENT</button>
</div>