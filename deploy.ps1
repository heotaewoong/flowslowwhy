# GitHub 배포 스크립트
$ErrorActionPreference = "Stop"

# 현재 디렉토리로 이동
Set-Location $PSScriptRoot

Write-Host "현재 디렉토리: $(Get-Location)" -ForegroundColor Green

# Git 상태 확인
Write-Host "`nGit 상태 확인 중..." -ForegroundColor Yellow
git status

# 모든 파일 추가
Write-Host "`n모든 파일 스테이징 중..." -ForegroundColor Yellow
git add .

# 변경사항 커밋
Write-Host "`n커밋 중..." -ForegroundColor Yellow
git commit -m "Deploy React portfolio website"

# 원격 저장소 확인
Write-Host "`n원격 저장소 확인 중..." -ForegroundColor Yellow
git remote -v

# 브랜치 확인 및 main으로 변경
Write-Host "`n브랜치 확인 중..." -ForegroundColor Yellow
$currentBranch = git branch --show-current
if ($currentBranch -ne "main") {
    Write-Host "브랜치를 main으로 변경 중..." -ForegroundColor Yellow
    git branch -M main
}

# 강제 푸시 (기존 파일 덮어쓰기)
Write-Host "`nGitHub에 푸시 중..." -ForegroundColor Yellow
Write-Host "주의: 기존 파일이 덮어씌워집니다!" -ForegroundColor Red
git push -f origin main

Write-Host "`n배포 완료!" -ForegroundColor Green
