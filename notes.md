Q & A

1. 
question:Vue项目中的views和components文件夹有什么区别？

answer:可重用的内容可以保存在src/components文件夹中，与路由器绑定的内容可以保存在src/views中

2. 
question: css使用别名引入背景图片失败

answer: 格式需要在前面加上 ~

```css
background-image: url('~assets/images/portrait.jpg');
```

3. 
question: 行内绑定style，background: url(‘../../assets/img/xxxxx’)直接写在行间样式不生效，即不能直接在标签中style属性中写，必须写在非行间样式才会生效。

answer: 如果要写在行间样式中，需要对资源进行导入，比如ES规范的import或者CommomJS规范的require

```vue
:style="{
  background: `#008c8c url(${require(`../../assets/images/portrait.png`)}) no-repeat center/cover`,
}"
```

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
