---
title: Админка в Jekyll
image: "/img/programming.png"
layout: post
categories: [develop]
tags:
  - Jekyll
  - Admin
  - Coding
---

### Удалось установить админку

***

Пополняем Gemfile следующим содержимым:

```
group :jekyll_plugins do

gem "jekyll-admin"

end
```

***

Теперь в моем распоряжении удобный интерфейс для публикации!

Подводные камни - установка большого количества зависимостей + фиксы различных ошибок. Однако, с помощью гугла все решается довольно легко :-)

Оставлю здесь ссылочку на оригинальную статью:

* [Html Blog](https://htmlblog.github.io/plugin-adminka-dlja-jekyll)
