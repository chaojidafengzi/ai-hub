// ===== AI Hub Data Store =====

// Initial Tools Data - Top 50 AI Tools
const initialTools = [
    // ===== 通用平台 (1-10) =====
    {
        id: 'tool-1',
        name: 'Kimi',
        url: 'https://kimi.moonshot.cn',
        icon: '🤖',
        badge: '热门',
        desc: '月之暗面 AI 助手，长文本处理能力出色，支持 20 万字上下文',
        content: 'Kimi 是月之暗面推出的 AI 助手产品，在长文本处理方面表现优异。支持上传 PDF、Word 等文档进行智能分析，可以快速提取关键信息、生成摘要。适合需要处理大量文档的职场人士和研究者。',
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
        content: 'Claude 是 Anthropic 开发的 AI 助手，以自然流畅的对话能力和出色的代码生成能力著称。最近收购了视觉 AI 公司 Vercept，图像理解能力正在快速提升。',
        type: ['platform', 'text'],
        industry: ['code', 'design', 'media'],
        tags: ['编程', '多模态', '对话'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-3',
        name: 'ChatGPT',
        url: 'https://chat.openai.com',
        icon: '💬',
        badge: '热门',
        desc: 'OpenAI 出品，全球最流行的 AI 对话助手，功能全面',
        content: 'ChatGPT 是 OpenAI 开发的 AI 对话模型，拥有强大的语言理解和生成能力。支持多轮对话、代码生成、创意写作等多种场景。',
        type: ['platform', 'text'],
        industry: ['code', 'marketing', 'education'],
        tags: ['对话', '多语言', '全能'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-4',
        name: 'Gemini',
        url: 'https://gemini.google.com',
        icon: '🔍',
        badge: '推荐',
        desc: '谷歌最新大模型，多模态能力强，与谷歌生态深度整合',
        content: 'Gemini 是谷歌开发的新一代 AI 模型，在文本、图像、代码等多方面都有出色表现。与 Google  Workspace 深度整合。',
        type: ['platform', 'text'],
        industry: ['code', 'education', 'marketing'],
        tags: ['谷歌', '多模态', '免费'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-5',
        name: '文心一言',
        url: 'https://yiyan.baidu.com',
        icon: '🇨🇳',
        badge: '国产',
        desc: '百度出品，中文理解能力强，适合国内用户',
        content: '文心一言是百度开发的大语言模型，在中文场景下表现优秀。支持对话、写作、编程等多种功能。',
        type: ['platform', 'text'],
        industry: ['marketing', 'education', 'media'],
        tags: ['国产', '中文', '百度'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-6',
        name: '通义千问',
        url: 'https://tongyi.aliyun.com',
        icon: '☁️',
        badge: '推荐',
        desc: '阿里巴巴出品，多语言支持，企业级应用丰富',
        content: '通义千问是阿里巴巴开发的大语言模型，拥有强大的多语言能力和丰富的企业级应用场景。',
        type: ['platform', 'text'],
        industry: ['ecommerce', 'marketing', 'finance'],
        tags: ['国产', '阿里', '企业级'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-7',
        name: 'Kling AI',
        url: 'https://klingai.com',
        icon: '🎬',
        badge: '新品',
        desc: '快手出品，AI 视频生成，效果逼真',
        content: 'Kling AI 是快手推出的 AI 视频生成模型，可以生成高质量的视频内容，支持多种风格。',
        type: ['video'],
        industry: ['media', 'marketing', 'game'],
        tags: ['国产', '视频生成', '快手'],
        createdAt: '2026-03-02'
    },
    {
        id: 'tool-8',
        name: 'Perplexity',
        url: 'https://perplexity.ai',
        icon: '🔎',
        badge: '推荐',
        desc: 'AI 搜索引擎，实时联网搜索，引用来源可靠',
        content: 'Perplexity 是新一代 AI 搜索引擎，结合大语言模型和实时网络搜索，提供准确且有来源的信息。',
        type: ['platform', 'text'],
        industry: ['education', 'media', 'law'],
        tags: ['搜索', '联网', '引用'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-9',
        name: 'Character.ai',
        url: 'https://character.ai',
        icon: '🎭',
        badge: '热门',
        desc: '创建虚拟角色对话，娱乐性强，用户粘性高',
        content: 'Character.ai 允许用户创建和与虚拟角色对话，支持各种人物设定，娱乐性极强。',
        type: ['platform', 'text'],
        industry: ['game', 'media', 'education'],
        tags: ['角色扮演', '娱乐', '社交'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-10',
        name: 'Poe',
        url: 'https://poe.com',
        icon: '📱',
        badge: '',
        desc: '多模型聚合平台，一个账号使用多个 AI',
        content: 'Poe 是 Quora 推出的 AI 聚合平台，可以在一个应用中使用 ChatGPT、Claude 等多个模型。',
        type: ['platform'],
        industry: ['education', 'code', 'media'],
        tags: ['聚合', '多模型', '便捷'],
        createdAt: '2026-03-01'
    },
    
    // ===== 图片 AI (11-20) =====
    {
        id: 'tool-11',
        name: 'Midjourney',
        url: 'https://midjourney.com',
        icon: '🎨',
        badge: '热门',
        desc: '顶级 AI 绘画工具，艺术风格多样，社区活跃',
        content: 'Midjourney 是目前最流行的 AI 绘画工具之一，以其出色的艺术风格和丰富的创作可能性著称。',
        type: ['image'],
        industry: ['design', 'game', 'marketing'],
        tags: ['绘画', '艺术', '社区'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-12',
        name: 'Stable Diffusion',
        url: 'https://stability.ai',
        icon: '🖼️',
        badge: '免费',
        desc: '开源 AI 绘画模型，可本地部署，高度可定制',
        content: 'Stable Diffusion 是开源的 AI 绘画模型，支持本地部署和高度定制。拥有庞大的插件生态。',
        type: ['image'],
        industry: ['design', 'game'],
        tags: ['开源', '免费', '可定制'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-13',
        name: 'DALL-E 3',
        url: 'https://openai.com/dall-e-3',
        icon: '🎭',
        badge: '推荐',
        desc: 'OpenAI 出品，图像生成质量高，理解能力强',
        content: 'DALL-E 3 是 OpenAI 的图像生成模型，能够准确理解复杂提示词，生成高质量图像。',
        type: ['image'],
        industry: ['design', 'marketing', 'media'],
        tags: ['OpenAI', '图像生成', '高质量'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-14',
        name: 'Leonardo.ai',
        url: 'https://leonardo.ai',
        icon: '🦎',
        badge: '',
        desc: '专业 AI 艺术平台，游戏资产生成强',
        content: 'Leonardo.ai 专注于游戏和创意产业的 AI 艺术生成，提供丰富的模型和工具。',
        type: ['image'],
        industry: ['game', 'design'],
        tags: ['游戏', '资产', '专业'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-15',
        name: 'Runway',
        url: 'https://runwayml.com',
        icon: '🎬',
        badge: '热门',
        desc: 'AI 视频编辑和生成平台，专业级工具',
        content: 'Runway 提供 AI 视频生成、编辑、特效等专业功能，被众多电影制作团队使用。',
        type: ['video', 'image'],
        industry: ['media', 'marketing'],
        tags: ['视频', '专业', '特效'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-16',
        name: 'Canva AI',
        url: 'https://canva.com',
        icon: '🎪',
        badge: '免费',
        desc: '设计平台 AI 功能，模板生成，图片编辑',
        content: 'Canva AI 提供模板智能生成、图片编辑、文案建议等功能，适合非专业设计师。',
        type: ['image'],
        industry: ['design', 'marketing', 'ecommerce'],
        tags: ['设计', '模板', '易用'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-17',
        name: 'Remove.bg',
        url: 'https://remove.bg',
        icon: '✂️',
        badge: '',
        desc: 'AI 一键抠图，背景去除，简单高效',
        content: 'Remove.bg 使用 AI 技术自动去除图片背景，一键操作，效果精准。',
        type: ['image'],
        industry: ['design', 'ecommerce', 'marketing'],
        tags: ['抠图', '背景去除', '高效'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-18',
        name: 'Magnific AI',
        url: 'https://magnific.ai',
        icon: '🔬',
        badge: '新品',
        desc: 'AI 图像放大和增强，细节还原出色',
        content: 'Magnific AI 可以智能放大和增强图像质量，还原细节，适合老照片修复和图像提升。',
        type: ['image'],
        industry: ['design', 'media'],
        tags: ['放大', '增强', '修复'],
        createdAt: '2026-03-02'
    },
    {
        id: 'tool-19',
        name: 'Ideogram',
        url: 'https://ideogram.ai',
        icon: '🔤',
        badge: '',
        desc: '擅长生成带文字的图像，logo 设计好帮手',
        content: 'Ideogram 在生成包含文字的图像方面表现出色，适合 logo、海报等设计场景。',
        type: ['image'],
        industry: ['design', 'marketing'],
        tags: ['文字', 'logo', '设计'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-20',
        name: 'Flux',
        url: 'https://flux.ai',
        icon: '⚡',
        badge: '新品',
        desc: '新兴 AI 绘画模型，生成速度快，质量高',
        content: 'Flux 是新一代 AI 绘画模型，在生成速度和质量之间取得良好平衡。',
        type: ['image'],
        industry: ['design', 'game'],
        tags: ['快速', '高质量', '新兴'],
        createdAt: '2026-03-02'
    },
    
    // ===== 视频 AI (21-28) =====
    {
        id: 'tool-21',
        name: 'Sora',
        url: 'https://openai.com/sora',
        icon: '🎥',
        badge: '热门',
        desc: 'OpenAI 视频生成模型，效果震撼，尚未开放',
        content: 'Sora 是 OpenAI 开发的 AI 视频生成模型，可以生成长达 1 分钟的高质量视频。',
        type: ['video'],
        industry: ['media', 'marketing', 'game'],
        tags: ['视频生成', 'OpenAI', '期待'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-22',
        name: 'Pika',
        url: 'https://pika.art',
        icon: '🎞️',
        badge: '推荐',
        desc: 'AI 视频生成和编辑工具，操作简单',
        content: 'Pika 提供简单易用的 AI 视频生成和编辑功能，支持文本到视频、图像到视频等。',
        type: ['video'],
        industry: ['media', 'marketing'],
        tags: ['视频生成', '易用', '快速'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-23',
        name: 'HeyGen',
        url: 'https://heygen.com',
        icon: '👤',
        badge: '热门',
        desc: 'AI 数字人视频生成，口型同步精准',
        content: 'HeyGen 可以创建逼真的 AI 数字人视频，支持多语言，口型同步精准。',
        type: ['video'],
        industry: ['marketing', 'education', 'media'],
        tags: ['数字人', '口型同步', '多语言'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-24',
        name: 'Synthesia',
        url: 'https://synthesia.io',
        icon: '🎬',
        badge: '推荐',
        desc: '企业级 AI 视频平台，培训视频制作利器',
        content: 'Synthesia 专注于企业培训视频的 AI 生成，提供多种数字人模板和多语言支持。',
        type: ['video'],
        industry: ['education', 'marketing'],
        tags: ['企业', '培训', '专业'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-25',
        name: 'D-ID',
        url: 'https://d-id.com',
        icon: '🗣️',
        badge: '',
        desc: 'AI 照片说话，让静态图像开口讲话',
        content: 'D-ID 可以让静态照片开口说话，支持自定义语音和文本，效果逼真。',
        type: ['video'],
        industry: ['media', 'marketing', 'education'],
        tags: ['照片说话', '动画', '创意'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-26',
        name: 'InVideo AI',
        url: 'https://invideo.io',
        icon: '📹',
        badge: '',
        desc: 'AI 视频剪辑和生成，一键制作视频',
        content: 'InVideo AI 提供智能视频剪辑和生成功能，支持模板化快速制作。',
        type: ['video'],
        industry: ['marketing', 'media'],
        tags: ['剪辑', '模板', '快速'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-27',
        name: 'Descript',
        url: 'https://descript.com',
        icon: '📝',
        badge: '推荐',
        desc: 'AI 视频编辑如编辑文档，支持语音克隆',
        content: 'Descript 创新的编辑方式，像编辑文档一样编辑视频，支持语音克隆和 AI 配音。',
        type: ['video', 'audio'],
        industry: ['media', 'marketing'],
        tags: ['编辑', '语音克隆', '创新'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-28',
        name: 'CapCut',
        url: 'https://capcut.com',
        icon: '✂️',
        badge: '免费',
        desc: '字节出品，免费视频编辑，AI 功能丰富',
        content: 'CapCut 是字节跳动推出的免费视频编辑工具，集成多种 AI 功能如自动字幕、智能抠图等。',
        type: ['video'],
        industry: ['media', 'marketing'],
        tags: ['免费', '字节', '剪辑'],
        createdAt: '2026-03-01'
    },
    
    // ===== 文本/写作 AI (29-36) =====
    {
        id: 'tool-29',
        name: 'Notion AI',
        url: 'https://notion.so',
        icon: '📝',
        badge: '推荐',
        desc: '笔记软件内置 AI，写作辅助，知识管理',
        content: 'Notion AI 提供写作辅助、内容总结、头脑风暴等功能，与 Notion 深度整合。',
        type: ['text'],
        industry: ['education', 'code', 'marketing'],
        tags: ['笔记', '写作', '知识管理'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-30',
        name: 'Jasper',
        url: 'https://jasper.ai',
        icon: '✍️',
        badge: '',
        desc: '专业 AI 写作工具，营销文案，品牌声音',
        content: 'Jasper 专注于营销文案、博客文章、社交媒体内容等商业写作场景。',
        type: ['text'],
        industry: ['marketing', 'ecommerce'],
        tags: ['写作', '营销', '商业'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-31',
        name: 'Copy.ai',
        url: 'https://copy.ai',
        icon: '📋',
        badge: '',
        desc: '营销文案生成器，多模板可选',
        content: 'Copy.ai 提供多种营销文案模板，快速生成广告、社交媒体内容等。',
        type: ['text'],
        industry: ['marketing', 'ecommerce'],
        tags: ['文案', '模板', '营销'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-32',
        name: 'Grammarly',
        url: 'https://grammarly.com',
        icon: '✅',
        badge: '推荐',
        desc: 'AI 写作助手，语法检查，风格优化',
        content: 'Grammarly 使用 AI 检查语法错误、优化写作风格，支持多平台。',
        type: ['text'],
        industry: ['education', 'media'],
        tags: ['语法', '校对', '写作'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-33',
        name: 'Writesonic',
        url: 'https://writesonic.com',
        icon: '🖋️',
        badge: '',
        desc: 'AI 内容创作平台，SEO 优化文章',
        content: 'Writesonic 帮助创建 SEO 优化的博客文章、广告文案等内容。',
        type: ['text'],
        industry: ['marketing', 'ecommerce'],
        tags: ['SEO', '博客', '内容'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-34',
        name: 'Quillbot',
        url: 'https://quillbot.com',
        icon: '🦜',
        badge: '免费',
        desc: 'AI 改写和 paraphrase 工具，免费好用',
        content: 'Quillbot 提供文本改写、摘要、语法检查等功能，免费版功能丰富。',
        type: ['text'],
        industry: ['education', 'media'],
        tags: ['改写', '免费', '摘要'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-35',
        name: 'Sudowrite',
        url: 'https://sudowrite.com',
        icon: '📚',
        badge: '',
        desc: 'AI 小说写作助手，创意写作专用',
        content: 'Sudowrite 专为创意写作设计，帮助作家克服写作障碍，生成创意内容。',
        type: ['text'],
        industry: ['media'],
        tags: ['小说', '创意', '写作'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-36',
        name: '秘塔写作猫',
        url: 'https://xiezuocat.com',
        icon: '🐱',
        badge: '国产',
        desc: '国产 AI 写作助手，中文优化，功能全面',
        content: '秘塔写作猫提供中文写作辅助、语法检查、内容优化等功能。',
        type: ['text'],
        industry: ['education', 'media'],
        tags: ['国产', '中文', '写作'],
        createdAt: '2026-03-01'
    },
    
    // ===== 音频 AI (37-42) =====
    {
        id: 'tool-37',
        name: 'ElevenLabs',
        url: 'https://elevenlabs.io',
        icon: '🎙️',
        badge: '热门',
        desc: '顶级 AI 语音合成，多语言支持，情感表达丰富',
        content: 'ElevenLabs 提供业界领先的 AI 语音合成服务，支持多种语言和丰富的情感表达。',
        type: ['audio'],
        industry: ['media', 'education', 'marketing'],
        tags: ['语音', '多语言', '情感'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-38',
        name: 'Murf.ai',
        url: 'https://murf.ai',
        icon: '🔊',
        badge: '推荐',
        desc: '专业 AI 配音平台，多种声音可选',
        content: 'Murf.ai 提供专业级 AI 配音服务，拥有多种声音和语言选择。',
        type: ['audio'],
        industry: ['media', 'education', 'marketing'],
        tags: ['配音', '专业', '多声音'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-39',
        name: 'Suno',
        url: 'https://suno.ai',
        icon: '🎵',
        badge: '热门',
        desc: 'AI 音乐生成，创作完整歌曲',
        content: 'Suno 可以生成完整的 AI 音乐作品，包括歌词、旋律、编曲等。',
        type: ['audio'],
        industry: ['media', 'game'],
        tags: ['音乐', '创作', '歌曲'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-40',
        name: 'Udio',
        url: 'https://udio.com',
        icon: '🎶',
        badge: '新品',
        desc: '新兴 AI 音乐平台，音乐质量高',
        content: 'Udio 是新一代 AI 音乐生成平台，在音乐质量和多样性方面表现出色。',
        type: ['audio'],
        industry: ['media', 'game'],
        tags: ['音乐', 'AI', '创作'],
        createdAt: '2026-03-02'
    },
    {
        id: 'tool-41',
        name: 'Adobe Podcast',
        url: 'https://podcast.adobe.com',
        icon: '🎧',
        badge: '免费',
        desc: 'Adobe 出品，AI 音频增强，免费使用',
        content: 'Adobe Podcast 提供 AI 音频增强、降噪等功能，免费版即可使用。',
        type: ['audio'],
        industry: ['media'],
        tags: ['音频', '增强', '免费'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-42',
        name: 'Lalal.ai',
        url: 'https://lalal.ai',
        icon: '🎼',
        badge: '',
        desc: 'AI 音轨分离，提取人声和伴奏',
        content: 'Lalal.ai 使用 AI 技术分离音频中的人声和伴奏，效果精准。',
        type: ['audio'],
        industry: ['media', 'game'],
        tags: ['音轨分离', '人声', '伴奏'],
        createdAt: '2026-03-01'
    },
    
    // ===== 编程 AI (43-47) =====
    {
        id: 'tool-43',
        name: 'GitHub Copilot',
        url: 'https://github.com/features/copilot',
        icon: '💻',
        badge: '热门',
        desc: 'AI 编程助手，代码补全，支持多种语言',
        content: 'GitHub Copilot 提供智能代码补全、函数生成等功能，支持多种编程语言。',
        type: ['platform', 'text'],
        industry: ['code'],
        tags: ['编程', '代码', 'GitHub'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-44',
        name: 'Cursor',
        url: 'https://cursor.sh',
        icon: '🖱️',
        badge: '推荐',
        desc: 'AI 原生代码编辑器，智能编程体验',
        content: 'Cursor 是新一代 AI 代码编辑器，集成大语言模型，提供智能编程体验。',
        type: ['platform'],
        industry: ['code'],
        tags: ['编辑器', 'AI 原生', '智能'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-45',
        name: 'Replit AI',
        url: 'https://replit.com',
        icon: '🔧',
        badge: '',
        desc: '在线 IDE 集成 AI，协作编程',
        content: 'Replit 提供在线编程环境和 AI 辅助功能，支持实时协作。',
        type: ['platform'],
        industry: ['code', 'education'],
        tags: ['在线 IDE', '协作', '教育'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-46',
        name: 'Codeium',
        url: 'https://codeium.com',
        icon: '⌨️',
        badge: '免费',
        desc: '免费 AI 编程助手，支持多种 IDE',
        content: 'Codeium 提供免费的 AI 代码补全和生成功能，支持多种开发环境。',
        type: ['platform'],
        industry: ['code'],
        tags: ['免费', '编程', '多 IDE'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-47',
        name: 'Tabnine',
        url: 'https://tabnine.com',
        icon: '📟',
        badge: '',
        desc: 'AI 代码补全工具，隐私保护',
        content: 'Tabnine 提供智能代码补全，支持本地部署，保护代码隐私。',
        type: ['platform'],
        industry: ['code'],
        tags: ['代码补全', '隐私', '企业'],
        createdAt: '2026-03-01'
    },
    
    // ===== 行业专用 AI (48-50) =====
    {
        id: 'tool-48',
        name: 'Gamma',
        url: 'https://gamma.app',
        icon: '📊',
        badge: '推荐',
        desc: 'AI PPT 生成，一键制作演示文稿',
        content: 'Gamma 使用 AI 快速生成精美的 PPT 演示文稿，支持多种模板和风格。',
        type: ['platform'],
        industry: ['education', 'marketing'],
        tags: ['PPT', '演示', '办公'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-49',
        name: 'Beautiful.ai',
        url: 'https://beautiful.ai',
        icon: '📽️',
        badge: '',
        desc: '智能 PPT 设计，自动排版美化',
        content: 'Beautiful.ai 自动优化 PPT 排版和设计，让演示更专业。',
        type: ['platform'],
        industry: ['education', 'marketing'],
        tags: ['PPT', '设计', '自动'],
        createdAt: '2026-03-01'
    },
    {
        id: 'tool-50',
        name: 'Tome',
        url: 'https://tome.app',
        icon: '📖',
        badge: '',
        desc: 'AI 故事叙述工具，创意演示',
        content: 'Tome 结合 AI 生成内容和精美设计，创建引人入胜的演示和故事。',
        type: ['platform'],
        industry: ['marketing', 'media'],
        tags: ['演示', '故事', '创意'],
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
