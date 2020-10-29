# 初期設定
```
git clone https://github.com/saneshige/cypress-test.git
cd cypress-test
npm i
```
# 実行
```
npm test
```

# その他の実行方法
## cypress管理画面を表示して画面で実行
```
./node_modules/.bin/cypress open
```
## 画面を表示せずにすべて実行
```
./node_modules/.bin/cypress run --headless --browser chrome
```

## 画面を表示せず、個別に実行
```
./node_modules/.bin/cypress run --headless --browser chrome --spec "cypress/specs/yahoo.js"
```
