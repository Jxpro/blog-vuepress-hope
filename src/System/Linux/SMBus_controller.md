---
title: VMware 下安装 Ubuntu 报 SMBus 错误
shortTitle: Ubuntu SMBus 错误
description: 当在 VMware 上安装 Ubuntu 时，可能会出现 SMBus 错误，如 i2c_piix4 Host SMBus controller not enabled。报错的根源在于 i2c_piix4，可以通过搜索 i2c_piix4 解决此问题。
category:
  - Linux
tag:
  - System
  - Linux
date: 2022-02-13
---

# VMware 下 安装 Ubuntu 报 SMBus 错误

如果能进入终端则切换到root用户，如果不能则在VMware进入界面时按下shift进入GNU GRUB界面，依次选择：

1.   Advanced options for Ubuntu
2.   Ubuntu，with Linux （recovery mode）
3.   root

![img](https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2021/10/29-223153.png)

![img](https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2021/10/29-223159.png)

![img](https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2021/10/29-223236.png)

查找报错的模块

```shell
# 对只读文件修改
mount -o remount,rw /

# 此处根据报错内容不同，输入内容也不同
# 比如我的错误为i2c_piix4 Host SMBus controller not enabled，那么我搜索piix4
# 返回i2c_piix4   24576   0
# 那么报错的根源就在i2c_piix4
lsmod | grep piix4
```

禁用报错的模块

```shell
vi + /etc/modprobe.d/blacklist.conf

//用vi打开并跳转到最后一行
//新建一行并插入以下内容 ( i2c_piix4为刚才查询获得的 )
//保存并退出

blacklist i2c_piix4
```

重新生成引导文件，如果不进行该操作直接重启还是会报错

```shell
update-initramfs  -u  -k  all
```

重启

```shell
reboot
```
