### Live sass notes

to enter the live sass watch mode you have to press `ctrl +alt + l`

and my settings json is

```json
"liveSassCompile.settings.formats": [
    {
      "format": "compressed",
      "extensionName": ".min.css",
      "savePath": "/dist/css"
    }
  ]
```

add the css to html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- this the link form dist to css and style min.css -->

    <link rel="stylesheet" href="/dist/css/style.min.css" />
    <title>Todo App</title>
  </head>
</html>
```

create folder name sass and create file that into the folder create style.scss and import the files like,
'@import _fillename.scss' . Here the :" _ " called impartial that recon by the scss live complier .

```scss
@import '_base';
@import '_sharedClasses';
@import '_newItemEntry';
```

in scss you can nest classe or element that are nested in the html so that make your code readable by the viewer and understable by others.

```scss
.newItemEntery {
  position: static;
  top: 0;
  margin-bottom: 1rem;
  padding: 0.75rem;

  form {
    display: flex;
    justify-content: space-between;
    label {
      position: absolute;
      left: -100000px;
    }
    input[type='text'] {
      width: 80%;
      font-size: 1.25rem;
    }
  }
}
```

in here we have classname " newItemEntery " and under that we have form so. we can deal with like these.

So in the sass media quaries are easy and simple to diclare and oparete with in of the files or \_base.scss file you can add the media quaris.

exmaplae:

```scss
@mixin mq($size) {
  @media only screen and (min-width: $size) {
    @content;
  }
}

// ! later
body {
  width: 100%;
  min-height: 100%;
  @include mq(768px) {
    font-size: 1.4rem;
  }
}
```

SASS mixins give us the ability to create reusable chunks of code — they reduce repetition, promote dry code and allow for ease of maintenance. just include the mixins value and func to it ..
