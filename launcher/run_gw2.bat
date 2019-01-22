REM echo off
echo Guild Wars 2 Launcher (C) Kulinda. https://kulinda.github.io/

REM --------      You must change this!     --------
set GW2_EXE=C:\Program Files\Guild Wars 2\Gw2-64.exe

if "%~1" == "" (
	echo Create a shortcut to this batch file and pass the installation name as first parameter.
	echo e.g. for an account named A, set the Target should be something like
	echo ...\run_gw2.bat" A
	pause
	exit /b 5
)

REM This is the file that Guild Wars 2 uses for settings and login
set LIVE_FILE=%APPDATA%\Guild Wars 2\Local.dat

REM This is the stored copy. 
set STORE_FILE=%~dp0\Local-%~1.dat

if NOT EXIST "%GW2_EXE%" (
	echo "Could not find the Guild Wars 2 executable
	echo Did you edit the script and adjust the path?
	pause
	exit /b 5
)

if NOT EXIST "%LIVE_FILE%" (
	echo Live file not found at %LIVE_FILE%
	echo Are you sure you have Guild Wars 2 installed?
	pause
	exit /b 5
)

if NOT EXIST "%STORE_FILE%" (
	echo Store file not found at %STORE_FILE%, it will be created after Guild Wars 2 exits.
) else (
	copy /Y "%STORE_FILE%" "%LIVE_FILE%"
)

"%GW2_EXE%" -autologin -bmp -maploadinfo
copy /Y "%LIVE_FILE%" "%STORE_FILE%"
