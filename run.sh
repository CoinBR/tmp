#!/bin/sh

DIR=$(dirname "$(readlink -f "$0")")
cd "${DIR}"

npm install
npm run dev

