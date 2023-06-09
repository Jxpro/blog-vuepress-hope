---
title: Git 如何设置代理
shortTitle: 设置代理
description: 本文介绍了如何设置和取消Git代理，以及查看代理的步骤。
category:
  - Git
tag:
  - Development
  - Git
date: 2021-10-27
order: 1
---

# Git设置代理

```shell
# 为 git 设置全局代理
git config --global https.proxy http://127.0.0.1:7890
git config --global https.proxy https://127.0.0.1:7890

# 取消设置代理
git config --global --unset http.proxy
git config --global --unset https.proxy

# 查看设置代理
git config --global --get http.proxy
git config --global --get https.proxy
```
