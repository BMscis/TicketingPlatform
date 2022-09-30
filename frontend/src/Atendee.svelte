<script>
    import {Atendee} from "./participant/atendee"
    import { redeem } from "./participant/stores/info";
    let att
    let ctx
    let tkn
    let red
    let geTicket = false
    const attend = async () =>{
        att = new Atendee(ctx,tkn)
        await att.buyTicket()
    }
    const unsub = redeem.subscribe(val => {
        console.log("Setting redeem: ", val)
        if(val) red = val
    })
</script>
<form on:submit|preventDefault={attend}>
    <input type="text" bind:value={ctx}/>
    <input type="number" bind:value={tkn}/>
    <button type="submit">SUBMIT</button>
</form>
{#if red}
<button on:click={()=>geTicket = !geTicket}>ENTER EVENT</button>
{#if geTicket}
{#await att.redeem()}
    <div>Loading</div>
{:then result} 
    <div>Ticket redeemable ? : {result}</div>
{/await}
{/if}
{/if}