import { Storage } from "@aws-amplify/storage"

export const SendToS3 = async (fl) => {
    const file = fl
    const {name,size,type} = fl
    try {
        const storageResult = await Storage.put(name, file,
            { level: "public", contentType: type, },
            )
            console.log("Storage Results: ", storageResult)
    } catch (error) {
        console.log("Upload to S3 ERROR: ", error)
        return false
    }
}
export const GetImages = async (imageName) => {
    let [imageSplit, imageType] = imageName.split('.')
    console.log({imageSplit})
    console.log({imageType})
    try {
        const imageResult = await Storage.get(imageName, {
            level: "public", // defaults to `public`
            //identityId?: string, // id of another user, if `level: protected`
            download: false, // defaults to false
            //expires?: number, // validity of the URL, in seconds. defaults to 900 (15 minutes)
            contentType: `image/${imageType}` // set return content type, eg "text/html"
          }
        )
        console.log({imageResult})
        return imageResult
    } catch (error) {
        console.log("Get Image Error: ", error)
        return error
    }
}
// await Storage.put("test.txt", "Hello");

// await Storage.put('test.txt', 'Private Content', {
//     level: 'private',
//     contentType: 'text/plain'
// });

// await Storage.put('test.txt', 'Protected Content', {
//     level: 'protected',
//     contentType: 'text/plain'
// });