Template Hooks
====================


A safe way to add the created/rendered/destroyed hooks to your templates. Avoid mis-spelling hook names, or overwriting hooks

Simply use as follows:

```js
TemplateHooks(Template.myTemplate, {
  created: function(){},
  rendered: function(){},
  destroyed: function(){}
});

```

Never suffer from:
```js
Template.myTemplate.craeted = function(){}
```


