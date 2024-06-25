# Step 0 : install walrus
https://docs.walrus.site/usage/setup.html
# Step 1 : cd to ./web
`bun run build`
# Step 2 : cd to ./walrus-sites
`cargo build --release`
# Step 3 :
`./target/release/site-builder --config site-builder/assets/builder-example.yaml publish ../web/dist `

## site id:
0xd48f917c156106d91666059d9d3c269df201d669970fa43f136ac33dc2ea88cd

## update :
`./target/release/site-builder --config site-builder/assets/builder-example.yaml update ../web/dist 0xd48f917c156106d91666059d9d3c269df201d669970fa43f136ac33dc2ea88cd`
