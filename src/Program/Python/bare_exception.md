---
title: 不要使用bare 'except'（PEP 8）
shortTitle: PEP 8 不使用bare 'except'
description: 不要使用bare 'except'（PEP 8），解决方法是添加Inspection的option里面的E722项和取消勾选Unclear exception clauses。
category:
  - Python
tag:
  - Program
  - Python
date: 2021-11-20
---

# PEP 8: do not use bare 'exept'

## 错误描述

![image-20211112222512429](https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2021/11/12-222513.png)

## 原因一：[Flake8 Rules](https://www.flake8rules.com/)

>   Do not use bare except, specify exception instead (E722)

解决方法：`Inspection`的`option`里添加`E722`项

![image-20211112222613037](https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2021/11/12-222614.png)

## 原因二：Unclear exception clauses

解决方法：取消勾选`Unclear exception clauses`

![image-20211112222736678](https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2021/11/12-222738.png)