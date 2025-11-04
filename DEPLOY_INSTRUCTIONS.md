# GitHub 배포 가이드

## 빠른 배포 방법

### 방법 1: 배치 파일 실행 (가장 간단)

1. `johndoe` 폴더로 이동
2. `deploy.bat` 파일을 더블클릭하여 실행

### 방법 2: 수동 명령 실행

PowerShell 또는 Git Bash에서 `johndoe` 폴더로 이동 후 다음 명령을 순서대로 실행:

```bash
# 1. 모든 파일 스테이징
git add .

# 2. 변경사항 커밋
git commit -m "Deploy React portfolio website"

# 3. 브랜치를 main으로 변경
git branch -M main

# 4. GitHub에 강제 푸시 (기존 파일 덮어쓰기)
git push -f origin main
```

## 주의사항

- `git push -f` 명령은 기존 GitHub 리포지토리의 모든 파일을 덮어씁니다
- 중요한 데이터가 있다면 백업 후 진행하세요
- 배포가 완료되면 https://github.com/heotaewoong/flowslowwhy 에서 확인할 수 있습니다

## 변경사항

- ✅ Stats 컴포넌트 업데이트: 10+ AI Projects, 1+ Research Papers, 5+ Technologies

