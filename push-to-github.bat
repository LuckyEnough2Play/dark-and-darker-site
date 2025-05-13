@echo off
cd /d %~dp0
echo.
echo === Adding all changes...
git add .

echo.
set /p commitMsg="Enter commit message: "
git commit -m "%commitMsg%"

echo.
echo === Pushing to GitHub...
git push origin main

pause
