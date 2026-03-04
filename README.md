# AI Hub

现代简约风格的 AI 工具推荐与行业快讯网站

## 🌐 功能特性

### 前台功能
- ✅ **侧边栏导航** - 简洁的深色侧边栏设计
- ✅ **AI 工具库** - 卡片式展示，支持分类筛选
  - 按类型：通用平台、视频 AI、图片 AI、文本 AI、音频 AI
  - 按行业：设计、营销、教育、医疗、金融、法律、媒体、电商、游戏、编程
- ✅ **AI 快讯** - 时间线展示，点击查看详情
- ✅ **跳转确认** - 访问外部网站前弹出确认提示
- ✅ **响应式设计** - 适配桌面和移动设备

### 后台管理
- ✅ **工具管理** - 添加/编辑/删除 AI 工具
- ✅ **快讯管理** - 添加/编辑/删除行业快讯
- ✅ **分类管理** - 查看和管理分类体系
- ✅ **富文本编辑** - 支持 Markdown 格式
- ✅ **实时保存** - 数据存储在本地

## 📁 项目结构

```
ai-hub/
├── index.html      # 主页面
├── styles.css      # 样式文件
├── app.js          # 应用逻辑
├── data.js         # 数据管理
└── README.md       # 说明文档
```

## 🚀 快速部署

### 方式一：GitHub Pages（推荐）

```bash
# 1. 进入项目目录
cd ai-hub

# 2. 提交代码
git add .
git commit -m "Update: 完整重构网站功能"

# 3. 推送到 GitHub
git push origin main

# 4. 在 GitHub 启用 Pages
# Settings → Pages → Source: main branch → Save
```

访问地址：`https://你的用户名.github.io/ai-hub/`

### 方式二：本地预览

直接用浏览器打开 `index.html` 即可预览（部分功能需要 HTTP 服务器）

```bash
# 使用 Python 启动本地服务器
python -m http.server 8000

# 或使用 Node.js
npx serve
```

## 📝 使用指南

### 前台使用

1. **浏览工具**
   - 点击左侧「AI 工具」进入工具库
   - 使用顶部分类标签筛选
   - 点击「访问官网」跳转（会有确认提示）

2. **阅读快讯**
   - 点击左侧「AI 快讯」进入时间线
   - 点击任意快讯查看详细内容
   - 点击「返回快讯列表」回到时间线

### 后台管理

1. **进入后台**
   - 点击左侧「后台管理」
   - 切换顶部标签管理不同内容

2. **添加工具**
   - 点击「+ 添加工具」
   - 填写基本信息（名称、链接、描述）
   - 选择类型和行业分类
   - 添加标签（逗号分隔）
   - 点击「保存」

3. **添加快讯**
   - 点击「+ 添加快讯」
   - 填写标题、日期、标签
   - 编写摘要和正文（支持 Markdown）
   - 添加核心观点（每行一条）
   - 点击「保存」

4. **编辑/删除**
   - 在列表中找到对应项目
   - 点击「编辑」修改内容
   - 点击「删除」移除项目（需确认）

## 🎨 自定义

### 修改配色

编辑 `styles.css` 中的 CSS 变量：

```css
:root {
    --color-primary: #0066FF;      /* 主色调 */
    --color-accent: #00D4AA;       /* 强调色 */
    --color-bg-sidebar: #0F0F1A;   /* 侧边栏背景 */
}
```

### 修改分类

编辑 `data.js` 中的分类定义：

```javascript
const typeCategories = [
    { id: 'platform', name: '通用平台', icon: '🌐' },
    // 添加更多分类...
];

const industryCategories = [
    { id: 'design', name: '设计', icon: '🎭' },
    // 添加更多分类...
];
```

### 初始化数据

首次使用时，`data.js` 包含示例数据。如需清空重置：

```javascript
// 在浏览器控制台执行
localStorage.removeItem('aiHubTools');
localStorage.removeItem('aiHubNews');
location.reload();
```

## 📊 数据存储

- 数据存储在浏览器 `localStorage`
- 无需后端服务器
- 数据仅在当前浏览器可用
- 建议定期备份重要数据

## 🔧 技术栈

- **HTML5** - 语义化结构
- **CSS3** - 现代样式和动画
- **Vanilla JavaScript** - 无框架依赖
- **LocalStorage** - 数据持久化

## 📱 浏览器支持

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 许可证

MIT License

---

**AI Hub** - 记录 AI 行业的发展，帮你省点筛选信息的时间。
