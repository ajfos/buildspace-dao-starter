import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x427Ab78cd0D037EB34Bb58c5359A41Db4EE32896",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Stetsons Logo",
        description: "This NFT will give you access to StetsonsDAO!",
        image: readFileSync("scripts/assets/stetsons.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()