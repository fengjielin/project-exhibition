Q & A

question:Vue项目中的views和components文件夹有什么区别？

answer:可重用的内容可以保存在src/components文件夹中，与路由器绑定的内容可以保存在src/views中


git命令

```shell
git status
# 查看git状态
git checkout -b login
# 创建并切换分支 login
git branch
# 查看分支
get add .
# 将修改/新增/删除的文件添加到暂存区
git commit -m '完成了登陆功能'
# 将暂存区中的文件提交到本地仓库
git checkout master 
# 切换分支
git merge login
# 将login分支合并到当前分支
git push
# 将本地仓库的内容推送到云端仓库中
git push -u origin login
# 将login分支也推送到云端仓库中
```
