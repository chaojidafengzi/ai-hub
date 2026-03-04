# 🚀 AI Hub 快速部署指南

网站文件已准备就绪，选择以下任一方式即可上线：

---

## 方式一：Netlify Drop（最快，30 秒上线）⭐推荐

**无需注册，立即上线**

1. 打开 https://app.netlify.com/drop
2. 将整个 `ai-hub` 文件夹拖到网页上
3. 等待上传完成（约 10 秒）
4. 获得临时域名，如：`https://fascinating-jellyfish-123456.netlify.app`

**后续绑定自定义域名**：
- 注册 Netlify 账号
- 在 Settings → Domain management 添加自定义域名

---

## 方式二：Vercel 网页版（推荐）

**1 分钟上线，自动 HTTPS**

1. 打开 https://vercel.com/new
2. 用 GitHub/GitLab/Bitbucket 登录
3. 点击 "Import Project"
4. 选择 "Continue with Third Party" 上传文件夹
5. 点击 "Deploy"

**获得域名**：`https://ai-hub-xxx.vercel.app`

---

## 方式三：GitHub Pages（免费，稳定）

**适合长期运营**

```bash
# 1. 在 GitHub 创建新仓库 ai-hub
# 2. 执行以下命令

cd C:\Users\26583\.openclaw\workspace\ai-hub

# 配置你的 GitHub 账号
git config user.email "你的 GitHub 邮箱"
git config user.name "你的 GitHub 用户名"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/ai-hub.git

# 推送代码
git branch -M main
git push -u origin main

# 3. 在 GitHub 仓库页面
# Settings → Pages → Source: Deploy from a branch → main → Save
```

**获得域名**：`https://你的用户名.github.io/ai-hub`

---

## 方式四：Cloudflare Pages（免费，速度快）

1. 打开 https://pages.cloudflare.com/
2. 登录 Cloudflare 账号
3. 点击 "Create a project"
4. 选择 "Direct Upload"
5. 上传 `ai-hub` 文件夹
6. 点击 "Deploy"

**获得域名**：`https://ai-hub-xxx.pages.dev`

---

## 📱 上线后要做的事

### 1. 测试网站
- 打开域名检查页面是否正常
- 测试移动端显示
- 检查所有链接是否可点击

### 2. 更新内容
- 替换工具推荐为你的实测内容
- 添加真实的行业解读文章
- 更新订阅表单（可接入 Formspree/EmailJS）

### 3. 添加统计
- Google Analytics
- 或 Plausible（隐私友好）

### 4. 绑定域名（可选）
- 在部署平台设置中添加自定义域名
- 配置 DNS 解析

---

## 🎨 内容更新指南

### 添加新工具

编辑 `index.html`，在 `.tools-grid` 内添加：

```html
<div class="tool-card">
    <div class="tool-icon">🚀</div>
    <h3 class="tool-name">工具名称</h3>
    <p class="tool-desc">一句话描述工具功能</p>
    <div class="tool-tags">
        <span class="tag">分类标签</span>
    </div>
    <div class="tool-footer">
        <a href="官网链接" target="_blank" class="tool-link">访问官网 →</a>
    </div>
</div>
```

### 添加新闻解读

编辑 `index.html`，在 `.news-list` 内添加新的 `.news-card`。

### 修改配色

编辑 `styles.css` 顶部的 CSS 变量：

```css
:root {
    --color-primary: #0066FF;   /* 改成你喜欢的颜色 */
    --color-accent: #00D4AA;
}
```

---

## 💡 快速上线建议

**现在就用 Netlify Drop**：
1. 打开 https://app.netlify.com/drop
2. 拖入 `C:\Users\26583\.openclaw\workspace\ai-hub` 文件夹
3. 30 秒后获得在线链接
4. 把链接发到小红书简介和笔记里

**今晚就能上线！**

---

## 📞 需要帮助？

遇到问题可以：
- 检查浏览器控制台错误
- 确认文件路径正确
- 联系部署平台客服

---

**AI Hub** - 记录 AI 行业的发展，帮你省点筛选信息的时间。
