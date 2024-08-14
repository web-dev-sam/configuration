import type { ConfigurationPlugin } from "../../src/utils/fs";
import path from "path";
import fs from "fs";

export const update: ConfigurationPlugin["update"] = () => {
    const localFilePath = path.join(process.env.AHK_SCRIPT_FOLDER!, "bash.ahk");
    const localBatFilePath = path.join("C:\\Scripts\\bashrun.bat")

    const fileAHK = fs.readFileSync(localFilePath, "utf-8");
    const fileBAT = fs.readFileSync(localBatFilePath, "utf-8");

    fs.writeFileSync(__dirname + "/terminal.ahk", fileAHK, "utf-8");
    fs.writeFileSync(__dirname + "/terminal.bat", fileBAT, "utf-8");
};
