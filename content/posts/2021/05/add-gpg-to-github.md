---
title: "Подписание коммитов на github"
date: 2021-05-15
draft: false
tags: ["linux", "security", "git"]
---

### Проверяем наличие *gpg* ключа

```bash
$ gpg --list-secret-keys --keyid-format LONG

/home/igor/.gnupg/pubring.kbx
-----------------------------
sec   4096R/3AB5C34374267BD2 2020-12-16 [SC]
      021168ECE0DB0F4EE69683093E97A7AC31B85FE2
uid                 [ultimate] Igor B <test@gmail.com>
ssb   rsa4096/DD2491E8EF9F481B 2020-12-16 [E]

```

где `3AB5C34374267BD2` это id нашего ключа.

### Добавляем ключ на github

```bash
$ gpg --armor --export 3AB5C34374267BD2

-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBF/aUngBEAC/+Ynki8GnGA5Ik6B1JBpIOOIaiMP
...
lJ2fYfZ74zf0e9mvvTHUzV5BSSNQhViU62wWGDLxtFDLbh1ygTw=
=iIeq
-----END PGP PUBLIC KEY BLOCK-----

```

Копируем весь вывод целиком и добавляем gpg ключ на странице https://github.com/settings/keys

### Локальная настройка git

Добавляем ключ в настройки гита

```bash
$ git config --global user.signingkey 3AB5C34374267BD2
```
Устанавливаем подписание коммитов по умолчанию

```bash
$ git config --global commit.gpgsign true
```
