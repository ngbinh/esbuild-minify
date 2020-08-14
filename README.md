### Build

```
npx esbuild doc-opt.js --bundle --strict --platform=browser --target=es2015 --outfile=doc-opt-bundle.js --log-level=warning --define:process.env.NODE_ENV=\"production\" --minify --define:process.cwd=String --define:process.platform=String --define:process=String --external:process
```

### Publish and run

```
yarn start
```

and open a browser to `localhost:3000/table/`, the web console will show the error `Uncaught SyntaxError: Unexpected token ':'`