---
title: Теги и категории в Jekyll
image: "/img/social.jpg"
layout: post
categories: [develop]
tags:
- Jekyll
- Tags
- Categories
- Coding
---

### Используем теги и категории постов

Jekyll позволяет группировать посты по категориям и добавлять в каждый пост индивидуальные теги. Это очень удобно и позволяет читателю быстро найти нужную его тему в блоге.

***

Теги и категории являются глобальными переменными в Jekyll, т.е. ими очень легко оперировать при помощи циклов if и for:

```
{%raw%}
{% for category in site.categories %}
  <p>{{ category }}</p>
{% endfor %}

{% for tag in site.tags %}
  <p>{{ tag }}</p>
{% endfor %}
{%endraw%}
```

***


Категории и теги могут прописываться в каждый пост следующим образом:



```
---
layout: post
title: Заголовок
categories: [Общее]
tags:
  - Jekyll
  - Start
  - Blog
---
```


***


Это позволяет авторам организовать шаблоны для работы с ними, а также добавляет блогу удобство и функциональность!

Подробнее об использовании переменных в Jekyll можно почитать [тут](http://prgssr.ru/documentation/12_variables).
