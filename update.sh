sudo apt update
systemctl stop docs-prolinkmoon
git pull
npm ci
npm run docs:build
systemctl start docs-prolinkmoon
systemctl daemon-reload
systemctl restart docs-prolinkmoon
done