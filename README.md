### Build bad version

With `--minify-syntax`

```
npx esbuild doc-opt.js --bundle --strict --platform=browser --target=es2015 --outfile=docbad-opt-bundle.js --log-level=warning --define:process.env.NODE_ENV=\"production\" --minify --define:process.cwd=String --define:process.platform=String --define:process=String --external:process
```

### Build a good version

Without `--minify-syntax`

```
npx esbuild doc-opt.js --bundle --strict --platform=browser --target=es2015 --outfile=docgood-opt-bundle.js --log-level=warning --define:process.env.NODE_ENV=\"production\" --minify-whitespace --minify-identifiers --define:process.cwd=String --define:process.platform=String --define:process=String --external:process
```