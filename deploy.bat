@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ========================================
echo React Portfolio Website 배포 시작
echo ========================================
echo.
echo 현재 디렉토리: %CD%
echo.

echo [1/5] Git 상태 확인 중...
git status
if errorlevel 1 (
    echo 오류: Git 저장소를 찾을 수 없습니다.
    pause
    exit /b 1
)
echo.

echo [2/5] 모든 파일 스테이징 중...
git add .
if errorlevel 1 (
    echo 오류: 파일 추가 실패
    pause
    exit /b 1
)
echo.

echo [3/5] 커밋 중...
git commit -m "Deploy React portfolio website"
if errorlevel 1 (
    echo 경고: 커밋할 변경사항이 없거나 이미 커밋되었습니다.
)
echo.

echo [4/5] 원격 저장소 확인 중...
git remote -v
echo.

echo [5/5] 브랜치를 main으로 변경하고 GitHub에 푸시 중...
echo 주의: 기존 파일이 덮어씌워집니다!
git branch -M main
git push -f origin main
if errorlevel 1 (
    echo 오류: 푸시 실패. 인증 정보를 확인하세요.
    pause
    exit /b 1
)
echo.

echo ========================================
echo 배포 완료!
echo ========================================
echo.
echo GitHub에서 확인: https://github.com/heotaewoong/flowslowwhy
echo.
pause

