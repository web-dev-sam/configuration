#Requires AutoHotkey v2.0
#Warn All, StdOut

; Ensures a consistent starting directory.
SetWorkingDir A_ScriptDir

; Hotkey definition
!LButton:: OpenInVSCode

; Function to open the selected folder or desktop icon in VS Code
OpenInVSCode(*)
{
    try
    {
        folder := GetSelectedPath()
        if (folder != "")
        {
            if DirExist(folder)
            {
                workspaceFile := folder "\.code-workspace"
                if FileExist(workspaceFile)
                {
                    Run "C:\Users\USER_NAME\AppData\Local\Programs\Microsoft VS Code\Code.exe `"" workspaceFile "`""
                }
                else
                {
                    Run "C:\Users\USER_NAME\AppData\Local\Programs\Microsoft VS Code\Code.exe `"" folder "`""
                }
            }
            else
            {
                MsgBox "Selected item is not a folder: " folder
            }
        }
        else
        {
            MsgBox "No folder selected or unable to get folder name."
        }
    }
    catch as err
    {
        MsgBox "An error occurred: " err.Message
    }
}

; Function to get the selected path using clipboard
GetSelectedPath()
{
    oldClipboard := ClipboardAll()  ; Save current clipboard
    A_Clipboard := ""  ; Clear clipboard
    Send "^c"  ; Send Ctrl+C to copy
    if !ClipWait(2)  ; Wait for the clipboard to contain data
    {
        MsgBox "Failed to copy to clipboard"
        return ""
    }
    
    path := A_Clipboard
    A_Clipboard := oldClipboard  ; Restore old clipboard content
    
    if DirExist(path)
    {
        return path
    }
    else if FileExist(path)
    {
        SplitPath path, , &dir
        return dir
    }
    
    return ""
}
