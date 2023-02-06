const fs=require('fs')
const {BlobServiceClient,StorageSharedKeyCredential,ContainerClient,BlockBlobClient}=require('@azure/storage-blob')
//
const {AbortController}=require('@azure/abort-controller')
//
require('dotenv').config()

const accName=process.env.AZURE_STORAGE_ACCOUNT_NAME //account name
const accKey= process.env.AZURE_STORAGE_ACCOUNT_KEY  //storage account key

if(!accName)throw Error('Azure Storage Account Name not available\n')
else console.log('Storage Account Available\n')

if(!accKey)throw Error('Azure Storage Account Key Error\n')
else console.log('Account Key Successfully Authenticated\n')

const sharedKeyCredential= new StorageSharedKeyCredential(accName,accKey)
const baseURL=`https://${accName}.blob.core.windows.net`
const containerName='medata'
const blobServiceClient=new BlobServiceClient(
    `${baseURL}`, sharedKeyCredential)

/*
Uncomment each to test for their functionality
*/


//get the main output Area
//const display=document.getElementById('dispPanel')
//1. For Single Blob - Blob Service Object
/*
//MAKE SURE TO UPLOAD FIRST
async function azgetSingleBlobActions(){
    const containerName='medata'
    //name of blob object(blob data in Azure Storage Account)
    const blobName='0507red_azurelogo.jpg'

    //time accessed
    const timeStamp=Date.now()
    const file_name=`pic-${timeStamp}.jpg`

    //container client
    const container_client=await blobServiceClient.getContainerClient(containerName)
    //Blob client
    const blob_client=await container_client.getBlockBlobClient(blobName)
    // download file
    await blob_client.downloadToFile(file_name);
    console.log(`${file_name} downloaded`);
}

azgetSingleBlobActions().then(()=>{
    console.log(`Operation Completed Successfully`)
})
.catch((error)=>console.log(error.message))
*/

//For a BLOB Container
//2.List All the data available in container
/*
async function azgetContainerBlobActions(){
    try{
        //container client
        const container_client=await blobServiceClient.getContainerClient(containerName)
        //listing blob objects/ blob data
        let i=1
        //list
        console.log('\nYour Blobs:\n')
        for await(const blob of container_client.listBlobsFlat()) console.log(`${blob.name}`)

    }
    catch(err){
        console.log(err)
        throw err
    }
}
azgetContainerBlobActions()
.then(()=>console.log(`\nYour blobs were successfully listed\n`))
.catch((error)=>console.log(error.message))

*/


//For a BLOB Container
//3.Create and Upload Blob Object
/*
async function azuploadTextContainerBlobActions(){
    try{
    const blobName='blob-text'
    const blockBlob_client=new BlockBlobClient(
        `${baseURL}/${containerName}/${blobName}`, sharedKeyCredential
    )
    
    //My data or text input
    let textData='Test Data For Text Blob'
    await blockBlob_client.upload(textData,textData.length)
    console.log(`New Text ${blockBlob_client.url} has been successfully been stored in Azure Blob Storage`)
    }catch(err){
    console.log(err)
    throw err
    }
}

azuploadTextContainerBlobActions().then(()=>console.log(`Upload has been Successfully Achieved`))
.catch((error)=>console.log(error.message))*/


/*
async function azuploadStreamContainerBlobActions(){
    try{
    const blobName='blob-stream.html'
    const file_location=`./index.html`
    const blockBlob_client=new BlockBlobClient(
        `${baseURL}/${containerName}/${blobName}`, sharedKeyCredential
    )
    
    //My data or text input
    await blockBlob_client.uploadFile(file_location,{
        blockSize:4*1024*1024,
        concurrency:20,
        onProgress:(ev)=>console.log(ev)
    })
    console.log(`Your File: ${blockBlob_client.name} has been successfully been stored in Azure Blob Storage`)
    }catch(err){
    console.log('Upload Failed unexpectedly')
    throw err
    }
}

azuploadStreamContainerBlobActions().then(()=>console.log(`Upload has been Successfully Achieved`))
.catch((error)=>console.log(error.message))
*/


