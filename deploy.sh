#!/bin/bash

brunch build --production
git add public && git commit -m 'new build'
git subtree split --prefix public -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages