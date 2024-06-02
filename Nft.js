
const nfts = [];


function mintNFT(name, eyeColor, shirtType, bling) {
    const nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    nfts.push(nft);
}

function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log(`NFT #${i + 1}`);
        console.log(`Name: ${nfts[i].name}`);
        console.log(`Eye Color: ${nfts[i].eyeColor}`);
        console.log(`Shirt Type: ${nfts[i].shirtType}`);
        console.log(`Bling: ${nfts[i].bling}`);
        console.log('------------------------');
    }
}


function getTotalSupply() {
    return nfts.length;
}




mintNFT("CryptoPunk", "Blue-neon", "T-Shirt", "Gold Chain teeth");
mintNFT("BoredApe", "Green-neon", "half-Hoodie", "Silver Ring-necklace ");
mintNFT("Degen", "Brown", "Leather Jacket", "Diamond Watch & teeth");
mintNFT("Cowbelly", "green", "cloth Jacket", "greenn fn");

listNFTs();

console.log("Total Supply: " + getTotalSupply());