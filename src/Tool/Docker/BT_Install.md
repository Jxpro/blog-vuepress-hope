---
title: 在 Docker 中安装宝塔面板
shortTitle: 安装宝塔面板
description: 本文将介绍如何在Docker中安装宝塔面板，包括软硬件版本、安装（基于centos镜像和直接使用宝塔镜像）、宝塔管理、以及解决安装中遇到的问题等。
category:
  - Docker
tag:
  - Tool
  - Docker
date: 2022-04-17
---

# Docker 中安装宝塔面板

## 一、软硬件版本

|   名称   |                          版本                           |
| :------: | :-----------------------------------------------------: |
| 系统版本 | Ubuntu 18.04.6 LTS (GNU/Linux 4.15.0-48-generic x86_64) |
|  docker  |                        20.10.10                         |

## 二、安装(基于centos镜像)

拉取镜像，宝塔对centos7**兼容性[^1]**最好 ，且centos8的docker镜像下载不了`step3`的`screen

```shell
docker pull centos:7
```

创建一个命名为`centos`容器并进入，命名为`btpanel`

>   将宿主机的`20，21，80，443，888，8888`这五个**端口映射**到`docker`容器中去
>
>   并将宿主机的`/home/www`**文件夹挂载**到`docker`容器的`/www`上去
>
>   *(注意：文件目录如果不存在。宿主机和容器会自己创建，无需手动创建)*
>
>   *(注意：如果报错没有权限还是自己手动创建一下)*
>
>   `privileged`表示在运行容器的时候，给容器加特权，设置容器有写文件的**权限**

```shell
# 没有启动 vsftpd 服务
docker run -it --name btpanel -p 20:20 -p 21:21 -p 80:80 -p 443:443 -p 888:888 -p 3306:3306 -p 8888:8888 --privileged=true --restart always -v /data/www:/www centos:7 /bin/bash

# 启动了的话改变一下映射端口或者关一下 vsftpd 服务
docker run -it --name btpanel -p 20:20 -p 210:21 -p 80:80 -p 443:443 -p 888:888 -p 3306:3306 -p 8888:8888 --privileged=true --restart always -v /data/www:/www centos:7 /bin/bash
```

由于docker中是一个**纯净版本**，我们首先需要给他升级并且安装必要的软件

这里使用`yum update -y`会升级系统和内核，但是因为是纯净版本，所以升级很快

```shell
# centos 7
yum update -y && yum install initscripts screen wget -y

# centos 8 下报错
# No match for argument: screen
# Error: Unable to find a match: screen
# 所以centos 8下暂时无法安装screen包，但不影响宝塔安装
yum update -y && yum install initscripts wget -y
```

执行`Centos`宝塔面板的安装命令，期间会有一个安装确认，输入`y`

```shell
wget -O i.sh http://download.bt.cn/install/install_6.0.sh && sh i.sh
```

安装完成

```text
外网面板地址: http://119.23.209.135:8888/7d2e5682
内网面板地址: http://172.18.0.2:8888/7d2e5682
```

![img](https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2021/10/29-223358.png)

Tips：**删除镜像**后记得删除`/data/www`目录

## 三、安装(直接使用baota镜像)

使用说明：https://github.com/pch18-docker/baota

Dockerfile：https://github.com/pch18-docker/baota/blob/clear/Dockerfile

```shell
docker run -d --name btpanel --net=host --privileged=true --restart always -v /data/wwwroot:/wwwroot pch18/baota:lnp
```

>   -   登陆地址 `http://{{面板ip地址}}:8888`
>
>   -   初始账号 `username`
>   -   初始密码 `password`

>   `pch18/baota`或`pch18/baota:latest`等同`pch18/baota:lnmp`
>   `pch18/baota:lnmp`为最新版本的官方纯净安装的基础上安装`nginx`,`mysql`,`php`
>   `pch18/baota:lnp` 为官方版本纯净安装的基础上安装`nginx`,`php`(不内置`mysql`,用于外置数据库的环境)
>   `pch18/baota:lamp` 为官方版本纯净安装的基础上安装`apache`,`php`
>   `pch18/baota:lap` 为官方版本纯净安装的基础上安装`apache`,`php`(不内置`mysql`,用于外置数据库的环境)
>   `pch18/baota:clear` 为官方版本纯净安装, 不默认安装`nginx`,`mysql`,`php`等程序

## 四、问题

1.   Step2 出现错误

     ```shell
     docker: Error response from daemon: driver failed programming external connectivity on endpoint btpanel (daaeec405d1d7b088754e6a7fe621f9c584a10a5df294e241aa574317b757716): Error starting userland proxy: listen tcp4 0.0.0.0:21: bind: address already in use.
     ```

     原因：FTP服务 ( `vsftpd` ) 默认占用21端口

     解决方法：

     1.   关闭并禁止自启动 `vsftpd`
     2.   更改映射端口
     3.   修改 `vsftpd` 配置端口

2.   Setp4 运行出现提示：

     注意: **5.x系列**Linux面板从2020年1月1日起终止维护，与技术支持，请考虑安装全新的7.x版本 宝塔官网: https://www.bt.cn

     ```shell
     wget -O i.sh http://download.bt.cn/install/install.sh && sh i.sh
     修改为
     wget -O i.sh http://download.bt.cn/install/install_6.0.sh && sh i.sh
     ```

3.   Setp4 运行出现错误

     ```shell
     install.sh: line 1: --2021-10-28: command not found
     install.sh: line 2: syntax error near unexpected token `('
     install.sh: line 2: `Resolving download.bt.cn (download.bt.cn)... 116.10.184.143, 240e:a5:4200:89::143'
     ```

     原因：参考文章：[wget命令详解](https://www.cnblogs.com/sx66/p/11887022.html)

     ```shell
     # step4 原命令
     wget -o i.sh https://download.bt.cn/install/install_6.0.sh && sh i.sh

     # 错误位置
     -o -> -O

     # 区别
     -o,  --output-file=FILE    将日志信息写入 FILE
     -O,  --output-document=FILE    将文档写入 FILE
     ```

4.   <span style="color:crimson">Error: DBUS_ERROR: Failed to connect to socket /run/dbus/system_bus_socket: No such file or directory</span>

     ```shell
     确定两点：
     1. dbus是否启动？如果没启动，则：
     /etc/init.d/dbus start

     2. dbus启动了，守护进程dbus-daemon是否启动？如果没启动，则：
     dbus-daemon --system
     ```

     原因：**实际上 **docker 下的 centos 镜像**没有** dbus，但是不影响宝塔正常运行

## 五、宝塔管理

直接进入容器，输入`bt`，根据提示进行操作：

```shell
docker exec -it btpanel bash
bt
```

![image-20220619204145165](https://raw.githubusercontent.com/Jxpro/PicBed/master/md/new/2022-06-19-204146.png)

其他说明：[宝塔linux面板重启、重置等命令](https://www.xp8.net/server/392.html)

```shell
# 查看默认入口和账号密码
/etc/init.d/bt default
# 停止
/etc/init.d/bt stop
# 启动
/etc/init.d/bt start
# 重启
/etc/init.d/bt restart
# 卸载
/etc/init.d/bt stop && chkconfig --del bt && rm -f /etc/init.d/bt && rm -rf /www/server/panel

# 查看当前面板端口
cat /www/server/panel/data/port.pl
# 修改面板端口，如要改成8881（centos 6 系统）
echo '8881' > /www/server/panel/data/port.pl && /etc/init.d/bt restart
iptables -I INPUT -p tcp -m state --state NEW -m tcp --dport 8881 -j ACCEPT
service iptables save
service iptables restart
# 修改面板端口，如要改成8881（centos 7 系统）
echo '8881' > /www/server/panel/data/port.pl && /etc/init.d/bt restart
firewall-cmd --permanent --zone=public --add-port=8881/tcp
firewall-cmd --reload

# 强制修改MySQL管理(root)密码，如要改成123456
cd /www/server/panel && python tools.pyc root 123456
# 修改面板密码，如要改成123456
cd /www/server/panel && python tools.pyc panel 123456
# 查看宝塔日志
cat /tmp/panelBoot.pl
# 查看软件安装日志
cat /tmp/panelExec.log
# 站点配置文件位置
/www/server/panel/vhost
# 删除域名绑定面板
rm -f /www/server/panel/data/domain.conf
# 清理登陆限制
rm -f /www/server/panel/data/*.login
# 查看面板授权IP
cat /www/server/panel/data/limitip.conf
# 关闭访问限制
rm -f /www/server/panel/data/limitip.conf
# 查看许可域名
cat /www/server/panel/data/domain.conf
# 关闭面板SSL
rm -f /www/server/panel/data/ssl.pl && /etc/init.d/bt restart
# 查看面板错误日志
cat /tmp/panelBoot
# 查看数据库错误日志
cat /www/server/data/*.err

站点配置文件目录(nginx)
/www/server/panel/vhost/nginx
站点配置文件目录(apache)
/www/server/panel/vhost/apache
站点默认目录
/www/wwwroot
数据库备份目录
/www/backup/database
站点备份目录
/www/backup/site
站点日志
/www/wwwlogs
```

[^1]: 系统兼容性顺序：Centos7.x > Debian10 > Ubuntu 20.04 > Cenots8.x > Ubuntu 18.04 > 其它系统
