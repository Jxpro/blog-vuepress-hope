---
title: 在Typora下配置图床
shortTitle: Typora图床配置
description: 通过npm安装PicGo-Core，准备Gitee仓库，配置PicGo，使用配置好的文件（配置文件在~/.picgo/config.json）格式化图片名称，防止重复，使用PicGo Gitee图床插件。
category:
  - Markdown
tag:
  - Program
  - Markdown
date: 2021-10-29
---

# Typora下配置图床

## 一、安装PicGo-Core

**错误**安装：

```shell
# 不能如下通过**npm**安装
# 因为npm安装以后没有exe文件，无法通过typora运行PicGo
npm install picgo -g
```

**正确**安装：

![img](https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2021/10/29-223421.png)

## 二、准备Gitee仓库

1.   **创建或选择**一个gitee仓库
     -   需要保证**仓库公开**，不然可以上传，但是无法下载显示，因为没公开
     -   需要保证有README.md，文件或者不为空仓库，不然无法删除，原因未知
2.   生成私人令牌`Token`，权限选择`projects`即可，其他可不选

## 三、配置PicGo

进入Typora安装的picgo.exe目录

```shell
cd C:\Users\username\AppData\Roaming\Typora\picgo\win64\
```

安装相关插件

```shell
# 用于格式化图片名称，防止重复
.\picgo install super-prefix
# PicGo Gitee图床插件
.\picgo install gitee-uploader
```

通过`CLI`配置`Gitee`仓库

```shell
# 设置配置文件
# 按上下键找到gitee，回车
./picgo set uploader
```
>   可选项说明：
>
>   -   **repo**：用户名/仓库名，注意不是整个https地址！！！
>
>       -   **错误**示范：repo : https://gitee.com/username/reponame
>
>       -   **正确**示范：repo : username/reponame
>
>   -   **token**：刚才生成的token
>
>   -   **path**：路径，图片存储于 reponame/${path} 下
>
>   -   **custompath**：用于配置path，customPath为占位符
>
>       示例：path：blog/${customPath}
>
>       -   customPath选择年[^1]，则实际的path值为blog/2021
>
>       -   customPath选择年季[^2]，则实际的path值为blog/2021/summer
>
>       -   customPath选择年月[^3]，则实际的path值为blog/2021/01
>
>   -   **customURL**: 不用填，保持默认（ 不能乱填 ）

配置完后使用Gitee仓库

```   bash
# 使用配置好的文件（配置文件在~/.picgo/config.json）
./picgo use uploader
```

打开 ~/.picgo/config.json，结尾追加以下参数，用于配置图片路径重命名参数

>   `"prefixFormat":"YYYY/MM/DD/"`这条不能加，修改路径会导致图片无法显示

```json
"picgo-plugin-super-prefix": {
    "fileFormat": "YYYY-MM-DD-HHmmss"
}
```

打开Typora，验证图片上传，查看是否成功

![img](https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2021/10/29-223429.png)

[^1]: year
[^2]: yearQuarter
[^3]: yearMonth
