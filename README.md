# AI Hub

现代简约风格的 AI 工具推荐与行业解读网站

## 🌐 在线访问

[https://yourusername.github.io/ai-hub](https://yourusername.github.io/ai-hub)

## 📁 项目结构

```
ai-hub/
├── index.html      # 主页面
├── styles.css      # 样式文件
├── script.js       # 交互脚本
└── README.md       # 说明文档
```

## 🚀 快速部署

### 方式一：GitHub Pages（推荐）

```bash
# 1. 初始化 git 仓库
cd ai-hub
git init
git add .
git commit -m "Initial commit"

# 2. 创建 GitHub 仓库并推送
git remote add origin https://github.com/yourusername/ai-hub.git
git branch -M main
git push -u origin main

# 3. 在 GitHub 仓库设置中启用 Pages
# Settings → Pages → Source: main branch → Save
```

### 方式二：Vercel

```bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 部署
cd ai-hub
vercel

# 3. 按提示完成部署
```

### 方式三：Netlify

1. 访问 [netlify.com](https://netlify.com)
2. 拖拽 `ai-hub` 文件夹到部署区域
3. 获取自动生成的域名

## 🎨 自定义内容

### 修改工具推荐

编辑 `index.html` 中的 `.tools-grid` 部分，添加新的工具卡片：

```html
<div class="tool-card">
    <div class="tool-icon">🚀</div>
    <h3 class="tool-name">工具名称</h3>
    <p class="tool-desc">工具描述</p>
    <div class="tool-tags">
        <span class="tag">标签 1</span>
        <span class="tag">标签 2</span>
    </div>
    <div class="tool-footer">
        <a href="https://example.com" target="_blank" class="tool-link">访问官网 →</a>
    </div>
</div>
```

### 更新行业解读

编辑 `index.html` 中的 `.news-list` 部分，添加新的新闻卡片。

### 修改配色方案

编辑 `styles.css` 中的 CSS 变量：

```css
:root {
    --color-primary: #0066FF;      /* 主色调 */
    --color-accent: #00D4AA;       /* 强调色 */
    --color-secondary: #1A1A2E;    /* 深色 */
}
```

## 📱 响应式设计

网站已适配移动端、平板和桌面设备。

## ✨ 功能特性

- ✅ 现代简约设计风格
- ✅ 响应式布局
- ✅ 平滑滚动导航
- ✅ 工具卡片悬停效果
- ✅ 订阅表单（前端演示）
- ✅ 回到顶部按钮
- ✅ 滚动动画效果

## 📝 待办事项

- [ ] 接入真实邮件订阅服务（如 Mailchimp）
- [ ] 添加工具筛选功能
- [ ] 集成访问统计
- [ ] 添加深色模式
- [ ] 增加更多新闻内容

## 📄 许可证

MIT License

---

**AI Hub** - 记录 AI 行业的发展，帮你省点筛选信息的时间。
