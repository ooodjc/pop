# POP
### 货架商品活动提示排版工具
输出结果为横版A4图片，一张图片有4格内容。

[在线页面](https://ooodjc.github.io/pop/)
# 一、安装
``` 
npm install
```
# 二、运行
```
npm run dev
```
# 三、编译
```
npm run build
```
编译后的文件在./dist下,要运行编译后的文件可使用http-server命令运行。
```
//安装http-server
npm install http-server -g
//运行http-server,默认是8080端口
http-server
//修改为3000端口运行
http-server -p 3000
//如果出现http-server : 无法加载文件 C:\Users\xxx\AppData\Roaming\npm\http-server.ps1，因为在此系统上禁止运行脚本
//解决办法：以管理员身份 打开windows powershell 输入set-ExecutionPolicy RemoteSigned   选择 A 或者 Y
```