---
title: 如何设置Git代理
shortTitle: 为Git设置全局代理
description: 了解如何设置Git代理，取消代理，以及查看设置代理的步骤。
category:
  - Git
tag:
  - Tool
  - Git
date: 2021-10-27
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
