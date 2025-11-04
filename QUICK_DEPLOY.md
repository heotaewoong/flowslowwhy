# 빠른 배포 가이드

## ✅ 완료된 작업
- Stats 컴포넌트 업데이트: 10+ AI Projects, 1+ Research Papers, 5+ Technologies
- 배포 스크립트 생성 완료

## 🚀 배포 방법

### 방법 1: 배치 파일 실행 (가장 간단) ⭐

1. `johndoe` 폴더를 Windows 탐색기에서 엽니다
2. `deploy.bat` 파일을 더블클릭합니다
3. 명령 프롬프트 창이 열리며 배포가 진행됩니다

### 방법 2: PowerShell에서 실행

```powershell
cd johndoe
.\deploy.bat
```

### 방법 3: 수동 명령 실행

Git Bash 또는 PowerShell에서:

```bash
cd johndoe
git add .
git commit -m "Deploy React portfolio website"
git branch -M main
git push -f origin main
```

## 📋 배포 후 확인

배포가 완료되면 다음 주소에서 확인할 수 있습니다:
- https://github.com/heotaewoong/flowslowwhy

## ⚠️ 주의사항

- `git push -f` 명령은 GitHub 리포지토리의 기존 파일을 모두 덮어씁니다
- 배포 전에 중요한 데이터가 있다면 백업하세요
- GitHub 인증이 필요할 수 있습니다 (Personal Access Token 또는 SSH 키)

## 🔧 문제 해결

### 인증 오류가 발생하는 경우
1. GitHub에서 Personal Access Token 생성
2. Git 설정에서 인증 정보 업데이트:
   ```bash
   git config --global user.name "your-username"
   git config --global user.email "your-email@example.com"
   ```

### 브랜치 충돌이 발생하는 경우
- `git push -f origin main` 명령으로 강제 푸시합니다 (기존 파일 덮어쓰기)

