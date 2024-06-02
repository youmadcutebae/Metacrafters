// Create a variable to hold your NFT's
const nfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, eyeColor, shirtType, bling) {
    const nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    nfts.push(nft);
}

// Create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
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

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// Call your functions below this line

// Mint some NFTs
mintNFT("CryptoPunk", "Blue", "T-Shirt", "Gold Chain");
mintNFT("BoredApe", "Green", "Hoodie", "Silver Ring");
mintNFT("Degen", "Brown", "Leather Jacket", "Diamond Watch");

// List all NFTs
listNFTs();

// Print the total supply of NFTs
console.log("Total Supply: " + getTotalSupply());