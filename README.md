### Build

```
npx esbuild doc-opt.js --bundle --avoid-tdz --platform=browser --target=es2015 --outfile=doc-opt-bundle.js --log-level=error --define:process.env.NODE_ENV=\"development\" --define:process.cwd=String --define:process.platform=String --define:process=String --external:process
```

### Publish and run

```
yarn start
```

and open a browser to `localhost:3000/form/`, the web console will show the error 

```
doc.js:45556 Uncaught TypeError: Cannot read property 'imports' of undefined
    at _import (doc.js:45556)
    at $p_Ldesign_anduin_components_editor_laminar_SpecificFontSizeBlot$__InlineBlotClass$lzycompute__Ldesign_anduin_components_editor_laminar_Blot (doc.js:81302)
    at $p_Ldesign_anduin_components_editor_laminar_SpecificFontSizeBlot$__InlineBlotClass__Ldesign_anduin_components_editor_laminar_Blot (doc.js:81309)
    at $c_Ldesign_anduin_components_editor_laminar_SpecificFontSizeBlot$.apply__sjs_js_Dynamic (doc.js:81323)
    at doc.js:129178
    at $c_sjsr_AnonFunction1.apply__O__O (doc.js:121917)
    at doc.js:102511
    at $c_sjsr_AnonFunction1.apply__O__O (doc.js:121917)
    at doc.js:102518
    at $c_sjsr_AnonFunction1.apply__O__O (doc.js:121917)
```