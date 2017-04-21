# Codeceptjs Multi-Browser Demo
this demo shows some issues I found using the fancy multi-browser feature:

- [ ] safari instances stay open after testrun
- [ ] first resolution in browser/resolution combination will overwrite all other resolutions for that browser. E.g. using a array of [chrome / maximum] and [chrome / 1024] will end up in 2 tests with chrome/maximum (and 'maximum' will be used in both folder-names).


## My Setup
* selenium server standalone 3.3.1

* codeceptjs@0.6.3-pre (global install)

* webdriverio@4.7.1 (global install)

* npm@4.5.0

## Running the Demo

> codeceptjs run-multiple basic --steps


