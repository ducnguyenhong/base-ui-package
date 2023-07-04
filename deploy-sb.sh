scp -r storybook-static root@10.210.39.146:/opt/ivnd-control
echo "Deploy website completed!"
# pm2 start npx --name iVND-Control -- serve storybook-static -l 9000
