# nuxt-memleak-repro

> Reproduction project for Nuxt.js plugin memory leak

## Install dependencies

`$ npm install`

## Reproduction steps
* build application: <br> `$ npm run build`
* start application: <br> `$ npm run start`
* in separate terminal window - start load test <br>  `$ npm run loadtest`
* after several seconds app crashes with Out of memory error

## Explanation
Out of memory error appears when `context.app` is used in some cases in nuxt plugin. In `/plugins` folder are plugins which shows how to generate out of memory error and appropriate code to fix it. 

You can change currently active plugin through editing `plugin` section in `nuxt.config.js`
* `directive-memleak.js`: <br>
* * declare Vue directive which uses `context.app`
* * declare mixin
* * run application
* * after several seconds Out of memory error appears
* **FIX**: `directive-memleak-fix.js`:<br>
* * leave directive declaration but remove mixin
* * run application
* * error does not appear anymore
* `mounted-memleak.js`:<br>
* * declare mixin with `mounted()` lifecycle hook
* * use `context.app.head.title` directly in `mounted()` body
* * run application
* * after several seconds Out of memory error appears
* **FIX**: `mounted-memleak-fix.js`:<br>
* * assign `context.app.head.title` to variable in plugin scope, and use it in `mounted()` nandler
* * run application
* * error does not appear anymore
