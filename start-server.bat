@echo off
title Isuri Navodya Portfolio Server
echo Starting local development server on port 8080...
powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause
