@echo off

rem "Comment#-This batch file purpose is to automate the installation of Anyconnect, AMP Connector softwares and to install IITRWSA and UMBRELLA Self Signed Certificates to"
rem "Client Machine and finally copying the configuration files of Anyconnect modules (iseposture and nam) to their respective directory."
rem "Comment#-For any queries please raise a ticket at https://network-support.iitr.ac.in"

rem "***************************************************************************************************************************************************************************"

rem "Comment#-Title of the cmd installation window"
title IITR NETWORK SOFTWARE INSTALLATION

rem "Comment#-UAC_ELEVATED_PRIVILAGES CODE FOLLOWS"
set "params=%*"
cd /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && %~s0 %params%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )

rem "Comment#-Navingating to directory where software resides"
pushd %~dp0

rem "Comment#-Anyconnect Software Installation follows"
echo Installing Anyconnect VPN...
msiexec.exe /qb /i setup\anyconnect\anyconnect-win-4.7.03052-core-vpn-predeploy-k9.msi /norestart
echo Installing Anyconnect Posture...
msiexec.exe /qb /i setup\anyconnect\anyconnect-win-4.7.03052-iseposture-predeploy-k9.msi /norestart
echo Installing Anyconnect Network Access Manager...
msiexec.exe /qb /i setup\anyconnect\anyconnect-win-4.7.03052-nam-predeploy-k9.msi /norestart
echo Installing Anyconnect Diagnostic and Reporting Tools...
msiexec.exe /qb /i setup\anyconnect\anyconnect-win-4.7.03052-dart-predeploy-k9.msi /norestart

rem "Comment#-AMP Connector Installation follows"
echo Installing AMP Connector...
setup\Audit_FireAMPSetup.exe /R /S

rem "Comment#-Copying Posture and NAM modules configuration files to designated directory"
echo Copying Necessary Files...
xcopy /Y "setup\ISEPostureCFG.xml" "C:\ProgramData\Cisco\Cisco Anyconnect Secure Mobility Client\ISE Posture\*"
xcopy /Y "setup\configuration.xml" "C:\ProgramData\Cisco\Cisco Anyconnect Secure Mobility Client\Network Access Manager\system\*"

rem "Comment#-Importing WSA and Umbrella SSC as Trusted Root Certificates"
echo Importing Certificates...
certutil -addstore "Root" "setup\cert_wsa.cer"
certutil -addstore "Root" "setup\cert_umbrella.cer"

rem "***************************************************************************************************************************************************************************"
echo.
echo INSTALLATION COMPLETED. PRESS ANY KEY TO RESTART YOUR PC.
pause>NUL
shutdown -r -t 1