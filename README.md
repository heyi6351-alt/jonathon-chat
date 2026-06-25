# Jonathon skill web chat

一个可上传到 GitHub Pages 的静态网页聊天器。它不会上传原始微信聊天记录，只内置已蒸馏出的 Jonathon skill 规则、关系记忆和时间段画像。

## 使用方式

1. 把 `jonathon-chat/` 目录上传到一个 GitHub 仓库。
2. 在 GitHub 仓库设置里开启 Pages，目录选 `main / root`。
3. 用手机打开 Pages 地址。
4. 点左上角设置，填入 DeepSeek API Key。

默认 DeepSeek 设置：

- Base URL: `https://api.deepseek.com`
- Model: `deepseek-v4-pro`

DeepSeek 官方文档说明其 API 兼容 OpenAI 格式，base_url 为 `https://api.deepseek.com`，示例模型包括 `deepseek-v4-pro`。

## 推荐：用 Cloudflare Worker 代理

部分模型 API 不允许浏览器跨域请求。更安全的方式是部署 `worker.js`：

1. 在 Cloudflare Workers 新建 Worker。
2. 粘贴 `worker.js`。
3. 设置环境变量 `DEEPSEEK_API_KEY`。
4. 发布后，把 Worker URL 填到网页的 Proxy URL。

这样 API Key 不需要放在手机浏览器里。

## 本地记忆

- 最近对话、长期记忆、API 设置都保存在当前浏览器 `localStorage`。
- 换手机或换浏览器不会自动同步。
- “思考”按钮显示的是回复计划/摘要，不是模型完整隐藏推理。

## 隐私提醒

如果仓库是公开的，不要提交 API Key、原始微信记录、私人照片或附件。这个目录只适合提交蒸馏后的规则和网页代码。
