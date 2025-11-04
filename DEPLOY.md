# GitHub 배포 가이드

## GitHub에 새 프로젝트 올리기

### 1. Git 저장소 초기화 및 설정

```bash
# 프로젝트 디렉토리로 이동
cd johndoe

# Git 초기화 (이미 되어있다면 생략)
git init

# 기존 원격 저장소 제거 (있다면)
git remote remove origin

# 새 원격 저장소 추가
git remote add origin https://github.com/heotaewoong/flowslowwhy.git

# 기존 브랜치 확인
git branch
```

### 2. 기존 파일 삭제 및 새 파일 추가

```bash
# 모든 파일을 스테이징 영역에 추가
git add .

# 커밋
git commit -m "Initial commit: React portfolio website"

# 기존 main/master 브랜치가 있다면 강제 푸시
git push -f origin main

# 또는 main 브랜치가 없다면
git branch -M main
git push -u origin main
```

### 3. 기존 파일을 완전히 삭제하고 새로 시작하는 경우

```bash
# 기존 원격 저장소의 모든 파일 삭제 후 새로 시작
git checkout --orphan temp-branch
git add .
git commit -m "Initial commit: React portfolio website"
git branch -D main
git branch -M main
git push -f origin main
```

### 4. 대안: GitHub 웹에서 직접 삭제

1. GitHub 저장소 (https://github.com/heotaewoong/flowslowwhy) 접속
2. Settings > Scroll down to "Danger Zone"
3. "Delete this repository" 클릭 (필요시)
4. 또는 파일들을 직접 삭제

### 5. 새 파일 올리기

```bash
# 모든 변경사항 스테이징
git add .

# 커밋
git commit -m "Add React portfolio website"

# 푸시
git push origin main
```

## 문제 해결

### 권한 오류가 발생하는 경우
```bash
git config --global --add safe.directory "C:/Users/ihtwa/OneDrive/바탕 화면/자기계발/homepage 홈페이지/web/johndoe"
```

### 원격 저장소 연결 확인
```bash
git remote -v
```

### 강제 푸시 (기존 파일 덮어쓰기)
```bash
git push -f origin main
```

## 주의사항

- `git push -f` 명령어는 기존 저장소의 히스토리를 덮어씁니다
- 중요한 데이터가 있다면 백업 후 진행하세요
- 협업 중이라면 팀원과 상의 후 진행하세요


