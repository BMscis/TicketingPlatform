import { DataStore } from '@aws-amplify/datastore';
import { EVENTS } from '../smartseat-ticketing/models';

// await DataStore.save(
//     new EVENTS({
// 		"AWSUSER": "Lorem ipsum dolor sit amet",
// 		"WALLETADDRESS": "Lorem ipsum dolor sit amet",
// 		"CONTRACTADDRESS": "Lorem ipsum dolor sit amet",
// 		"TOKENID": "Lorem ipsum dolor sit amet",
// 		"EVENTNAME": "Lorem ipsum dolor sit amet",
// 		"EVENTLOCATION": "Lorem ipsum dolor sit amet",
// 		"PRICE": 123.45,
// 		"TICKETNUMBER": 1020,
// 		"TICKETSOLD": 1020,
// 		"EVENTIMAGE": "Lorem ipsum dolor sit amet"
// 	})
// );
export async function SendToStore(us){
    //console.log("ADDING TO DB: ", us)
    await DataStore.save(
        new EVENTS({
            "AWSUSER": us.AWSUSER,
            "WALLETADDRESS": us.WALLETADDRESS,
            "CONTRACTADDRESS": us.CONTRACTADDRESS,
            "TOKENID": us.TOKENID,
            "EVENTNAME": us.EVENTNAME,
            "EVENTLOCATION": us.EVENTLOCATION,
            "PRICE": JSON.parse(us.PRICE),
            "TICKETNUMBER": JSON.parse(us.TICKETNUMBER),
            "TICKETSOLD": JSON.parse(us.TICKETSOLD),
            "EVENTIMAGE": us.EVENTIMAGE,
            "EVENTDETAILS":JSON.stringify(us.EVENTDETAILS),
            "ARTISTS":JSON.stringify(us.ARTISTS)
        })
    );
}

/* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
//await DataStore.save(EVENTS.copyOf(CURRENT_ITEM, item => {
//    // Update the values on {item} variable to update DataStore entry
//}));

// const modelToDelete = await DataStore.query(EVENTS, 123456789);
// DataStore.delete(modelToDelete);

export async function UpdateEvent(id,tokenSold){
    try {
        const original = await DataStore.query(EVENTS, id);
        /* Models in DataStore are immutable. To update a record you must use the copyOf function
        to apply updates to the item’s fields rather than mutating the instance directly */
        let ds = await DataStore.save(EVENTS.copyOf(original, item => {
            item.TICKETSOLD = tokenSold
        // Update the values on {item} variable to update DataStore entry
        }));
        //consologger("nftCardMutations.js","UPDATE CARD AFTER", ds)
    } catch (error) {
        console.log("UPDATE NFT ERROR: ", error)
    }
}

export async function getEvents(){
    const models = await DataStore.query(EVENTS);
    //console.log("MODELS: ", models)
    return models
}
// //console.log(models);