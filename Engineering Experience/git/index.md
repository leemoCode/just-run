
## 创建本地分支
git branch 分支名

## 切换到本地分支
git checkout 分支名

## 提交本地分支到远程仓库
git push origin 本地分支名

## 新建本地分支与远程分支关联
git branch --set-upstream-to=origin/remote_branch  your_branch

remote_branch = 你本地分支对应的远程分支
your_branch = 是你当前的本地分支

## 快捷指令
git push --set-upstream origin  xxx

## 阮一峰  git常用命令
https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html


## 绕过eslint 检查验证
解决方案 git commit -m 'xxx' --no-verify

## 撤回上一次commit操作
git reset --soft HEAD^
使用cmd时 more? 额外加一个^

## 删除本地分支
$ git branch -d <BranchName>

## 删除远程分支
$ git push origin --delete <BranchName>

## 将远程分支向本地同步一次
git remote update -p

## 快速删除node_modules
全局安装rimraf：
npm install rimraf -g
到你的项目根目录下（即有node_modules的目录），执行命令：
rimraf node_modules
快速删除node_modules文件夹

## 清除缓存
npm cache clean --force

## 回退到某版本
git reset --hard commit_id

## 放弃本次merge
git reset --merge

## 暂存代码等操作
git stash 暂存
git stash list 查看暂存信息
git stash pop 取出
git stash clear 清空暂存栈

## npm ERR! could not determine executable to run
开项目文件夹，显示隐藏的文件，找到 '.git'文件夹，找到hooks，删除hooks里全部内容，重新提交。

## 抓取客户端log内报错
adb logcat | grep error

## feature\stable环境区分
带t-tag是feature环境

## 查看提交记录
git log --oneline（简略、 单行）

git log （详细、多行）



npm run rls 发版本+提交代码

删除 untracked files
git clean -f


yarn build -- -t 检测错误


查看端口占用情况 -> 拿到进程号
netstat -abon | findstr "8888"

关闭某个进程
taskkill -PID 进程号 -F

关闭strict-ssl
npm config set strict-ssl false

## oppo 发布流程

yarn login --registry http://admin.npm.oppoer.me --scope @cpc

yarn lint
yarn build

yarn rls --preid beta
yarn rls

git reset --hard xxxx
git tag -d v.xxx



C:\Users\80304198\AppData\Local\Yarn\Data\link\@cpc
