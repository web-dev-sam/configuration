import fs from "fs";
import path from "path";

export function listFolders(folder: string): string[] {
    try {
        const items = fs.readdirSync(folder);
        return items.filter((item) => {
            const fullPath = path.join(folder, item);
            return fs.statSync(fullPath).isDirectory();
        });
    } catch (error) {
        console.error(`Error reading directory: ${error}`);
        process.exit(1);
    }
}

export type ConfigurationPlugin = {
    update: () => void;
};
export async function importPlugin(
    paths: string[]
): Promise<(NodeModule & ConfigurationPlugin) | null> {
    try {
        const modulePath = path.join(process.cwd(), ...paths);
        const mod = await import(modulePath);
        return mod;
    } catch {
        return null;
    }
}

export function extractCodeBetweenMarkers(content: string): string {
    const regex = /# STARTCONF\s*([\s\S]*?)\s*# ENDCONF/;
    const match = content.match(regex);
    return match ? match[1].trim() : "";
}
