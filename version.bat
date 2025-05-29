@echo off
setlocal enabledelayedexpansion

REM Leggi la versione corrente dal package.json
for /f "tokens=2 delims=:," %%a in ('findstr "\"version\"" package.json') do (
    set "version=%%~a"
    set "version=!version:"=!"
    set "version=!version: =!"
)

REM Dividi la versione in parti
for /f "tokens=1,2,3 delims=." %%a in ("!version!") do (
    set major=%%a
    set minor=%%b
    set patch=%%c
)

REM Incrementa la versione patch
set /a patch+=1
if !patch! gtr 9 (
    set patch=0
    set /a minor+=1
    if !minor! gtr 9 (
        set minor=0
        set /a major+=1
    )
)

REM Componi la nuova versione
set "new_version=!major!.!minor!.!patch!"

REM Aggiorna il package.json
powershell -Command "(Get-Content package.json) -replace '\"version\": \".*\"', '\"version\": \"!new_version!\"' | Set-Content package.json"

REM Esegui i comandi git
git add .
git commit -m "update !new_version!"
git push origin HEAD

REM Crea e pusha il tag
git tag !new_version!
git push origin !new_version!

echo Versione aggiornata a !new_version!, push completato.
pause