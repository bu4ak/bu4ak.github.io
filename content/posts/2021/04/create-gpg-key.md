---
title: "Создание GPG ключа"
date: 2021-04-26
draft: false
tags: ["linux", "security"]
---

### Мы должны убедиться, что *gpg* установлен

```bash
    $ gpg --version

    gpg (GnuPG) 2.2.27
    ...
```

### Запускаем генерацию

```bash
    $ gpg --full-generate-key     

    Please select what kind of key you want:
    (1) RSA and RSA (default)
    (2) DSA and Elgamal
    (3) DSA (sign only)
    (4) RSA (sign only)
    (14) Existing key from card
    Your selection? 
```

Здесь нужно выбрать, какого типа ключ мы хотим сгенерировать. Выбираем вариант по умолчанию.

### Далее нас спросят, какой длины ключ мы хотели бы сгенерировать

```bash
    RSA keys may be between 1024 and 4096 bits long.
    What keysize do you want? (3072) 
```

На текущий момент рекомендуемая длина *3072*. Нужно учитывать, что бóльшая длина обеспечивает бóльшую надёжность. Но в то же время может снижать производительность (особенно при шифровании больших файлов).

### Время жизни ключа

```bash
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0) 
```

Наиболее безопасный вариант - это вариант с ограниченным сроком жизни. Например, в случае утери доступа к ключу, комьютеру и тд, через какое-то время ключ "протухнет". Но в таком случае нужно следить за его сроком жизни и своевременно его обновлять. Для простоты выбираем значение по умолчанию (0).
Далее нужно подтвердить свой выбор:
```bash
Key does not expire at all
Is this correct? (y/N) 
```

### Персональные данные

Заполняем имя и адрес электронной почты, с которыми будет ассоциироваться данный ключ. Например:

```bash
Real name: Igor
Email address: test@mail.com
Comment: 
```
Проверяем

```bash
You selected this USER-ID:
    "Igor <test@mail.com>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? 

```

и если всё верно, подтверждаем ввод (O).

### Пароль

При генерации gpg ключа использование пароля не обязательно, но очень рекомендуется.

Вводим и подтверждаем пароль.


### Проверяем сгенерированный ключ

```bash
$ gpg2 --list-secret-keys --keyid-format LONG

sec   rsa3072/687AC877135E6279 2021-04-26 [SC]
      7998D756E71D86C525AE1B4F687AC877135E6272
uid                 [ultimate] Igor <test@mail.com>
ssb   rsa3072/D8A0CD6CA99110B3 2021-04-26 [E]

```

где **687AC877135E6279** - это id нашего ключа. Для большинства оперций обычно используется именно он.