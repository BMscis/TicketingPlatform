<script>
    import {Creator} from "./participant/creator"
    let ctr
    let newEvent = false
    let price
    let tickets
    let eventName
    let eventSymbol
    let url
    let metadata
    let evenTime
    let reserved
    const creatEvent = async () => {
        ctr = new Creator()
        newEvent = true
    }
    const startEvent = async () => {
        await ctr.deploy(price,tickets,eventName,eventSymbol,url,metadata,
        evenTime,reserved)
    }
</script>
<div>
    <button on:click={()=>{creatEvent()}}>CREATE EVENT</button>
    {#if newEvent}
        <form on:submit|preventDefault={startEvent}>
            <input type="number" placeholder="price" bind:value={price}/>
            <input type="text" placeholder="tickets" bind:value={tickets}/>
            <input type="text" placeholder="eventName" bind:value={eventName}/>
            <input type="text" placeholder="eventSymbol" bind:value={eventSymbol}/>
            <input type="text" placeholder="url" bind:value={url}/>
            <input type="text" placeholder="metadata" bind:value={metadata}/>
            <input type="number" placeholder="evenTime" bind:value={evenTime}/>
            <input type="text" placeholder="reserved" bind:value={reserved}/>
            <button type="submit">DEPLOY</button>
        </form>
    {/if}
</div>