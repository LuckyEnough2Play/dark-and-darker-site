@echo off
echo === Adding all changes...
git add .

echo.
set /p msg="Enter commit message: "
git commit -m "%msg%"

echo.
echo === Pulling latest from GitHub...
git pull origin main --rebase

echo.
echo === Pushing to GitHub...
git push origin main

pause
