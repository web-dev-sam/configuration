import { importPlugin, listFolders } from "./utils/fs";

const folders = listFolders("./configurations");
for (const folder of folders) {
    const x = await importPlugin(["configurations", folder, "update.ts"]);
    if (x == null) {
        console.warn("No update script found for " + folder);
        continue;
    }

    x.update();
}
