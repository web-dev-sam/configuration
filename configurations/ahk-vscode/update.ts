import type { ConfigurationPlugin } from "../../src/utils/fs";
import path from "path";
import fs from "fs";

export const update: ConfigurationPlugin["update"] = () => {
    const localFilePath = path.join(process.env.AHK_SCRIPT_FOLDER!, "alt+click vscode.ahk");
    
    const file = fs.readFileSync(localFilePath, "utf-8");
    const newFile = file.replace(/Users\\[^\\]+\\AppData/g, "Users\\USER_NAME\\AppData");

    fs.writeFileSync(__dirname + "/vscode.ahk", newFile, "utf-8");
};
