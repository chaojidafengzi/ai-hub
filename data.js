// ===== AI Hub Data Store =====

// Initial Tools Data
const initialTools = [
    {
        id: 'tool-1',
        name: 'Kimi Claw',
        url: 'https://kimi.moonshot.cn',
        icon: '🤖',
        badge: '热门',
        desc: '月之暗面最新 AI 助手，长文本处理能力出色，适合文档分析和总结',
        content: 'Kimi Claw 是月之暗面推出的最新 AI 助手产品，在长文本处理方面表现优异。支持上传 PDF、Word 等文档进行智能分析，可以快速提取关键信息、生成摘要。适合需要处理大量文档的职场人士和研究者。',
        type: ['platform', 'text'],
        industry: ['education', 'media', 'code'],
        tags: ['国产', '长文本', '文档分析'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-2',
        name: 'Claude',
        url: 'https://claude.ai',
        icon: '🎨',
        badge: '推荐',
        desc: 'Anthropic 出品，对话自然，代码能力强，视觉能力持续升级',
        content: 'Claude 是 Anthropic 开发的 AI 助手，以自然流畅的对话能力和出色的代码生成能力著称。最近收购了视觉 AI 公司 Vercept，图像理解能力正在快速提升。适合开发者、内容创作者和专业人士使用。',
        type: ['platform', 'text'],
        industry: ['code', 'design', 'media'],
        tags: ['编程', '多模态', '对话'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-3',
        name: 'Gemini 3.1 Pro',
        url: 'https://gemini.google.com',
        icon: '🔍',
        badge: '新品',
        desc: '谷歌最新大模型，长文本和代码生成能力提升，静默升级中',
        content: 'Gemini 3.1 Pro 是谷歌最新推出的大模型版本，在长文本处理和代码生成方面有显著提升。采用静默升级策略，部分用户已体验到新功能。与谷歌生态深度整合，适合使用 Google 工作流的用户。',
        type: ['platform', 'text'],
        industry: ['code', 'education', 'marketing'],
        tags: ['谷歌', '多模态', '代码'],
        createdAt: '2026-03-02'
    },
    {
        id: 'tool-4',
        name: 'Minimax Claw',
        url: 'https://minimaxi.com',
        icon: '📊',
        badge: '',
        desc: '国内大模型第一梯队，与 Kimi 同期发布，功能对标，值得体验',
        content: 'Minimax Claw 是国内 AI 公司 Minimax 推出的最新产品，与 Kimi 在同一周发布，形成直接竞争。在对话理解和中文场景优化方面表现出色，适合国内用户使用。',
        type: ['platform', 'text'],
        industry: ['marketing', 'media', 'ecommerce'],
        tags: ['国产', '对话', '中文优化'],
        createdAt: '2026-03-02'
    },
    {
        id: 'tool-5',
        name: 'Runway ML',
        url: 'https://runwayml.com',
        icon: '🎬',
        badge: '热门',
        desc: '专业 AI 视频生成和编辑工具，电影级效果',
        content: 'Runway ML 是专业的 AI 视频创作平台，提供视频生成、编辑、特效等多种功能。被众多电影制作团队和专业创作者使用，适合需要高质量视频内容的用户。',
        type: ['video'],
        industry: ['media', 'game', 'marketing'],
        tags: ['视频', '专业', '特效'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-6',
        name: 'Midjourney',
        url: 'https://midjourney.com',
        icon: '🖼️',
        badge: '推荐',
        desc: '顶级 AI 绘画工具，艺术风格多样，社区活跃',
        content: 'Midjourney 是目前最流行的 AI 绘画工具之一，以其出色的艺术风格和丰富的创作可能性著称。通过 Discord 使用，拥有活跃的创作者社区，适合设计师、艺术家和创意工作者。',
        type: ['image'],
        industry: ['design', 'game', 'marketing'],
        tags: ['绘画', '艺术', '社区'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-7',
        name: 'Stable Diffusion',
        url: 'https://stability.ai',
        icon: '🎨',
        badge: '免费',
        desc: '开源 AI 绘画模型，可本地部署，高度可定制',
        content: 'Stable Diffusion 是开源的 AI 绘画模型，支持本地部署和高度定制。拥有庞大的插件生态和社区资源，适合技术爱好者和需要隐私保护的专业用户。',
        type: ['image'],
        industry: ['design', 'game'],
        tags: ['开源', '免费', '可定制'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-8',
        name: 'ElevenLabs',
        url: 'https://elevenlabs.io',
        icon: '🎙️',
        badge: '推荐',
        desc: '顶级 AI 语音合成，多语言支持，情感表达丰富',
        content: 'ElevenLabs 提供业界领先的 AI 语音合成服务，支持多种语言和丰富的情感表达。适合内容创作者、教育机构和需要语音输出的应用场景。',
        type: ['audio'],
        industry: ['media', 'education', 'marketing'],
        tags: ['语音', '多语言', '情感'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-9',
        name: 'Notion AI',
        url: 'https://notion.so',
        icon: '📝',
        badge: '',
        desc: '笔记软件内置 AI，写作辅助，知识管理',
        content: 'Notion AI 是 Notion 笔记软件内置的 AI 功能，提供写作辅助、内容总结、头脑风暴等功能。与 Notion 的知识管理功能深度整合，适合学生、研究者和知识工作者。',
        type: ['text', 'platform'],
        industry: ['education', 'code', 'marketing'],
        tags: ['笔记', '写作', '知识管理'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-10',
        name: 'GitHub Copilot',
        url: 'https://github.com/features/copilot',
        icon: '💻',
        badge: '热门',
        desc: 'AI 编程助手，代码补全，支持多种语言',
        content: 'GitHub Copilot 是微软和 OpenAI 合作开发的 AI 编程助手，提供智能代码补全、函数生成等功能。支持多种编程语言，已被数百万开发者使用。',
        type: ['platform', 'text'],
        industry: ['code'],
        tags: ['编程', '代码', '开发者'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-11',
        name: 'Canva AI',
        url: 'https://canva.com',
        icon: '🎭',
        badge: '',
        desc: '设计平台 AI 功能，模板生成，图片编辑',
        content: 'Canva AI 是 Canva 设计平台新增的 AI 功能，提供模板智能生成、图片编辑、文案建议等功能。适合非专业设计师快速创建高质量设计内容。',
        type: ['image'],
        industry: ['design', 'marketing', 'ecommerce'],
        tags: ['设计', '模板', '易用'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-12',
        name: 'Jasper',
        url: 'https://jasper.ai',
        icon: '✍️',
        badge: '',
        desc: '专业 AI 写作工具，营销文案，品牌声音',
        content: 'Jasper 是专业的 AI 写作平台，专注于营销文案、博客文章、社交媒体内容等商业写作场景。支持品牌声音定制，适合营销团队和内容创作者。',
        type: ['text'],
        industry: ['marketing', 'ecommerce', 'media'],
        tags: ['写作', '营销', '商业'],
        createdAt: '2026-03-01'
    }
];

// Initial News Data
const initialNews = [
    {
        id: 'news-1',
        title: '大厂集体动作背后的 3 个信号',
        date: '2026-03-04',
        tag: '行业周报',
        excerpt: 'Kimi 与 Minimax 同期发布 Claw 产品，OpenAI 牵手五角大楼，Anthropic 收购视觉 AI 公司，谷歌 Gemini 静默升级...这周 AI 圈的大事，我们帮你解读背后的逻辑。',
        content: `## 本周核心事件

### 事件 1：Kimi 与 Minimax 分别发布「Claw」产品

这不是简单的产品更新。

月之暗面和 Minimax 作为国内大模型第一梯队，选择在同一周发布同名产品，说明两点：

1. **技术路线趋同**——双方都看好这个方向
2. **竞争进入白热化**——谁先占领用户心智谁赢

**对普通用户的实际影响：**
- 短期看，你会看到更多「免费试用」「限时优惠」
- 长期看，功能会快速迭代，但价格战可能让中小厂商出局

**我的判断：** 可以免费用，但别急着付费订阅。等 3-6 个月，市场格局稳定后再做选择。

---

### 事件 2：OpenAI 与五角大楼达成模型部署协议

这条新闻被很多人忽略了，但它很重要。

AI+ 国防不是新概念，但 OpenAI 这个级别的厂商入局，意味着技术成熟度已经到了可部署阶段。

这里有个关键信息差：**军用技术通常会在 12-24 个月后下放到民用市场**，参考 GPS、互联网、语音识别的发展路径。

所以你现在用的 AI 工具，可能在 1-2 年内会有一波「军事级」功能升级（当然，核心能力不会开放）。

**对从业者的启示：** 关注 OpenAI 的企业版动态，那里会最先释放信号。

---

### 事件 3：Anthropic 收购视觉 AI 创企 Vercept

这笔收购金额没披露，但战略意义很明显：**Claude 要补上视觉能力的短板**。

之前 Claude 在文本对话上表现优秀，但在图像理解、多模态任务上落后于 GPT-4V 和 Gemini。

**收购后可能的变化：**
- Claude 能看懂更复杂的图表/截图
- 设计/运营岗位会有新工具出现
- 现有的视觉 AI 工具可能被整合

**我的建议：** 如果你在做设计、内容运营、数据分析，下半年可以重点关注 Claude 的更新，可能会解放大量重复劳动。

---

### 事件 4：谷歌 Gemini 升级至 3.1 Pro 版本

这次升级的重点不是参数，而是「实用性」。

根据谷歌官方披露的信息，3.1 Pro 在长文本处理、代码生成、多轮对话上都有提升。

但有个细节值得注意：升级是「静默」进行的，很多用户没收到通知。这说明谷歌在测试灰度发布，先让部分用户体验，数据好了再全量推送。

**你现在可以做的：**
1. 检查你用的 AI 工具有没有 Gemini 后端
2. 如果有，试试同样的 prompt 效果是否提升
3. 记录对比数据，这可能是一个内容选题（笑）`,
        highlights: [
            '竞争维度从参数转向场景和生态',
            '国内厂商技术差距在缩小，商业化仍是短板',
            '视觉 AI 是下一个爆发赛道，提前布局相关技能'
        ],
        createdAt: '2026-03-04'
    },
    {
        id: 'news-2',
        title: 'GPT-5 传闻再起：这些功能可能改变工作方式',
        date: '2026-03-03',
        tag: '产品动态',
        excerpt: 'OpenAI 官方未确认，但多方消息源指向 GPT-5 即将发布。我们整理了已知信息和可能的影响。',
        content: `## 已知信息

根据多个可靠消息源，GPT-5 可能在以下方面有重大升级：

### 1. 推理能力
- 更复杂的逻辑推理
- 多步骤问题解决
- 数学和科学计算

### 2. 多模态整合
- 原生支持图像、音频、视频输入
- 跨模态理解能力
- 实时视频分析

### 3. 上下文窗口
- 可能扩展到 100 万 + tokens
- 完整书籍级别的理解
- 长对话记忆

## 对工作的影响

**知识工作者：** 报告撰写、数据分析、研究辅助能力大幅提升

**开发者：** 更复杂的代码生成和调试，可能改变开发流程

**创意行业：** 多模态能力打开新的创作可能性

## 建议

- 保持关注，但不过度期待
- 评估现有工作流，找出可优化的环节
- 提前学习 prompt engineering 等基础技能`,
        highlights: [
            '推理和多模态能力是升级重点',
            '上下文窗口可能大幅扩展',
            '建议提前评估工作流优化空间'
        ],
        createdAt: '2026-03-03'
    },
    {
        id: 'news-3',
        title: 'AI 工具投资热潮：2026 Q1 融资盘点',
        date: '2026-03-01',
        tag: '行业分析',
        excerpt: '2026 年第一季度 AI 工具领域融资超过 50 亿美元，哪些赛道最受资本青睐？',
        content: `## 融资概览

2026 年 Q1，全球 AI 工具领域共发生 127 起融资事件，总金额超过 50 亿美元。

## 热门赛道

### 1. 企业级 AI 助手（35%）
- 代表公司：Anthropic、Cohere
- 平均融资额：8000 万美元
- 投资逻辑：企业付费意愿强，ARR 增长快

### 2. 垂直行业 AI（25%）
- 医疗 AI、法律 AI、教育 AI
- 平均融资额：5000 万美元
- 投资逻辑：行业壁垒高，竞争相对较小

### 3. AI 基础设施（20%）
- 模型训练、推理优化、数据标注
- 平均融资额：6000 万美元
- 投资逻辑：卖水人逻辑，需求稳定

### 4. 消费级 AI 应用（20%）
- 写作、绘画、视频工具
- 平均融资额：3000 万美元
- 投资逻辑：用户增长快，但变现待验证

## 趋势判断

1. **投资回归理性**：相比 2023-2024 年的狂热，投资人更关注收入和利润
2. **垂直化是方向**：通用大模型格局已定，垂直应用有机会
3. **出海是必选项**：国内竞争激烈，海外市场空间更大`,
        highlights: [
            '企业级 AI 助手获得最多投资',
            '垂直行业 AI 成为新热点',
            '投资逻辑从增长转向盈利'
        ],
        createdAt: '2026-03-01'
    }
];

// Category Definitions
const typeCategories = [
    { id: 'platform', name: '通用平台', icon: '🌐' },
    { id: 'video', name: '视频 AI', icon: '🎬' },
    { id: 'image', name: '图片 AI', icon: '🎨' },
    { id: 'text', name: '文本 AI', icon: '📝' },
    { id: 'audio', name: '音频 AI', icon: '🎙️' }
];

const industryCategories = [
    { id: 'design', name: '设计', icon: '🎭' },
    { id: 'marketing', name: '营销', icon: '📢' },
    { id: 'education', name: '教育', icon: '📚' },
    { id: 'medical', name: '医疗', icon: '🏥' },
    { id: 'finance', name: '金融', icon: '💰' },
    { id: 'law', name: '法律', icon: '⚖️' },
    { id: 'media', name: '媒体', icon: '📺' },
    { id: 'ecommerce', name: '电商', icon: '🛒' },
    { id: 'game', name: '游戏', icon: '🎮' },
    { id: 'code', name: '编程', icon: '💻' }
];

// Data Management Functions
function loadData(key, defaultValue) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
        console.error('Error loading data:', e);
        return defaultValue;
    }
}

function saveData(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (e) {
        console.error('Error saving data:', e);
        return false;
    }
}

// Initialize Data
function initializeData() {
    if (!localStorage.getItem('aiHubTools')) {
        saveData('aiHubTools', initialTools);
    }
    if (!localStorage.getItem('aiHubNews')) {
        saveData('aiHubNews', initialNews);
    }
}

// Get current data
function getTools() {
    return loadData('aiHubTools', initialTools);
}

function getNews() {
    return loadData('aiHubNews', initialNews);
}

// Save data
function saveTools(tools) {
    return saveData('aiHubTools', tools);
}

function saveNews(news) {
    return saveData('aiHubNews', news);
}

// CRUD Operations
function addTool(tool) {
    const tools = getTools();
    tool.id = 'tool-' + Date.now();
    tool.createdAt = new Date().toISOString().split('T')[0];
    tools.unshift(tool);
    saveTools(tools);
    return tool;
}

function updateTool(id, updates) {
    const tools = getTools();
    const index = tools.findIndex(t => t.id === id);
    if (index !== -1) {
        tools[index] = { ...tools[index], ...updates };
        saveTools(tools);
        return tools[index];
    }
    return null;
}

function deleteTool(id) {
    const tools = getTools();
    const filtered = tools.filter(t => t.id !== id);
    saveTools(filtered);
    return filtered.length !== tools.length;
}

function addNews(news) {
    const newsList = getNews();
    news.id = 'news-' + Date.now();
    news.createdAt = new Date().toISOString().split('T')[0];
    newsList.unshift(news);
    saveNews(newsList);
    return news;
}

function updateNews(id, updates) {
    const newsList = getNews();
    const index = newsList.findIndex(n => n.id === id);
    if (index !== -1) {
        newsList[index] = { ...newsList[index], ...updates };
        saveNews(newsList);
        return newsList[index];
    }
    return null;
}

function deleteNews(id) {
    const newsList = getNews();
    const filtered = newsList.filter(n => n.id !== id);
    saveNews(filtered);
    return filtered.length !== newsList.length;
}

// Initialize on load
initializeData();
