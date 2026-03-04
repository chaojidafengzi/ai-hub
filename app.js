// ===== AI Hub Application =====

// Current state
let currentCategory = 'all';
let pendingUrl = null;

// ===== Page Navigation =====
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === pageId) {
            item.classList.add('active');
        }
    });
    
    // Load content based on page
    if (pageId === 'tools') {
        renderTools();
    } else if (pageId === 'news') {
        renderNews();
    } else if (pageId === 'tutorials') {
        renderTutorials();
    } else if (pageId === 'admin') {
        renderAdminPanel();
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// ===== Tools Rendering =====
function renderTools(filter = 'all') {
    const tools = getTools();
    const container = document.getElementById('tools-container');
    
    let filteredTools = tools;
    
    if (filter !== 'all') {
        if (filter.startsWith('industry-')) {
            const industry = filter.replace('industry-', '');
            filteredTools = tools.filter(tool => 
                tool.industry && tool.industry.includes(industry)
            );
        } else {
            filteredTools = tools.filter(tool => 
                tool.type && tool.type.includes(filter)
            );
        }
    }
    
    if (filteredTools.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>暂无工具，去后台添加一些吧～</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filteredTools.map(tool => createToolCard(tool)).join('');
    
    // Add click handlers
    document.querySelectorAll('.tool-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = link.href;
            showLinkConfirm(url);
        });
    });
}

function createToolCard(tool) {
    const typeNames = tool.type ? tool.type.map(t => {
        const cat = typeCategories.find(c => c.id === t);
        return cat ? cat.name : t;
    }) : [];
    
    const industryNames = tool.industry ? tool.industry.map(i => {
        const cat = industryCategories.find(c => c.id === i);
        return cat ? cat.name : i;
    }) : [];
    
    return `
        <div class="tool-card">
            ${tool.badge ? `<div class="tool-badge">${tool.badge}</div>` : ''}
            <div class="tool-icon">${tool.icon || '🤖'}</div>
            <h3 class="tool-name">${tool.name}</h3>
            <p class="tool-desc">${tool.desc}</p>
            <div class="tool-tags">
                ${(tool.tags || []).map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
            </div>
            <div class="tool-footer">
                <div class="tool-categories">
                    ${typeNames.slice(0, 2).map(n => `<span>${n}</span>`).join(' · ')}
                </div>
                <a href="${tool.url}" target="_blank" class="tool-link">访问官网 →</a>
            </div>
        </div>
    `;
}

// ===== News Rendering =====
function renderNews() {
    const newsList = getNews();
    const container = document.getElementById('news-container');
    
    container.innerHTML = newsList.map(item => createTimelineItem(item)).join('');
    
    // Add click handlers
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('click', () => {
            const newsId = item.dataset.newsId;
            showNewsDetail(newsId);
        });
    });
}

function createTimelineItem(news) {
    return `
        <div class="timeline-item" data-news-id="${news.id}">
            <div class="timeline-date">${formatDate(news.date)}</div>
            <h3 class="timeline-title">${news.title}</h3>
            <span class="timeline-tag">${news.tag || '资讯'}</span>
        </div>
    `;
}

function showNewsDetail(newsId) {
    const newsList = getNews();
    const news = newsList.find(n => n.id === newsId);
    
    if (!news) return;
    
    const article = document.getElementById('news-article');
    article.innerHTML = `
        <header class="article-header">
            <div class="article-meta">
                <span class="article-date">${formatDate(news.date)}</span>
                <span class="article-tag">${news.tag || '资讯'}</span>
            </div>
            <h1 class="article-title">${news.title}</h1>
        </header>
        <div class="article-content">
            ${news.excerpt ? `<p class="lead">${news.excerpt}</p>` : ''}
            ${renderMarkdown(news.content)}
            ${news.highlights && news.highlights.length > 0 ? `
                <div class="article-highlights">
                    <h4>核心观点</h4>
                    <ul>
                        ${news.highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>
    `;
    
    showPage('news-detail');
}

// ===== Tutorials Rendering =====
function renderTutorials(filter = 'all') {
    const tutorials = getTutorials();
    const container = document.getElementById('tutorials-container');
    
    let filteredTutorials = tutorials;
    
    if (filter !== 'all') {
        filteredTutorials = tutorials.filter(t => t.category === filter);
    }
    
    if (filteredTutorials.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>暂无教程，去后台添加一些吧～</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filteredTutorials.map(tutorial => createTutorialCard(tutorial)).join('');
    
    // Add click handlers
    document.querySelectorAll('.tutorial-card').forEach(card => {
        card.addEventListener('click', () => {
            const tutorialId = card.dataset.tutorialId;
            showTutorialDetail(tutorialId);
        });
    });
}

function createTutorialCard(tutorial) {
    const categoryNames = {
        'login': '登录注册',
        'usage': '使用技巧',
        'advanced': '进阶教程'
    };
    
    return `
        <div class="tutorial-card" data-tutorial-id="${tutorial.id}">
            ${tutorial.badge ? `<div class="tool-badge">${tutorial.badge}</div>` : ''}
            <div class="tool-icon">${tutorial.icon || '📚'}</div>
            <h3 class="tool-name">${tutorial.title}</h3>
            <p class="tool-desc">${tutorial.excerpt}</p>
            <div class="tool-footer">
                <div class="tool-categories">
                    ${categoryNames[tutorial.category] || tutorial.category} · ⏱️ ${tutorial.readTime || '5 分钟'}
                </div>
                <span class="tool-link">阅读全文 →</span>
            </div>
        </div>
    `;
}

function showTutorialDetail(tutorialId) {
    const tutorials = getTutorials();
    const tutorial = tutorials.find(t => t.id === tutorialId);
    
    if (!tutorial) return;
    
    const categoryNames = {
        'login': '登录注册',
        'usage': '使用技巧',
        'advanced': '进阶教程'
    };
    
    const article = document.getElementById('tutorial-article');
    article.innerHTML = `
        <header class="article-header">
            <div class="article-meta">
                <span class="article-tag">${categoryNames[tutorial.category] || tutorial.category}</span>
                <span class="article-date">⏱️ ${tutorial.readTime || '5 分钟'}</span>
                <span class="article-date">📅 ${tutorial.createdAt || '最近更新'}</span>
            </div>
            <h1 class="article-title">${tutorial.title}</h1>
        </header>
        <div class="article-content">
            ${tutorial.excerpt ? `<p class="lead">${tutorial.excerpt}</p>` : ''}
            ${renderMarkdown(tutorial.content)}
            ${tutorial.tips && tutorial.tips.length > 0 ? `
                <div class="article-highlights">
                    <h4>💡 小贴士</h4>
                    <ul>
                        ${tutorial.tips.map(tip => `<li>${tip}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>
    `;
    
    showPage('tutorial-detail');
}

// ===== Simple Markdown Renderer =====
function renderMarkdown(text) {
    if (!text) return '';
    
    let html = text;
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Bold
    html = html.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*(.*)\*/gim, '<em>$1</em>');
    
    // Line breaks
    html = html.replace(/\n/gim, '<br>');
    
    // Horizontal rules
    html = html.replace(/^---$/gim, '<hr>');
    
    // Lists
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    
    return html;
}

// ===== Link Confirmation =====
function showLinkConfirm(url) {
    pendingUrl = url;
    document.getElementById('external-url').textContent = url;
    document.getElementById('confirm-modal').classList.add('active');
}

function closeConfirmModal() {
    document.getElementById('confirm-modal').classList.remove('active');
    pendingUrl = null;
}

document.getElementById('confirm-visit')?.addEventListener('click', () => {
    if (pendingUrl) {
        window.open(pendingUrl, '_blank');
        closeConfirmModal();
    }
});

// ===== Tool Modal =====
function openToolModal(toolId = null) {
    const modal = document.getElementById('tool-modal');
    const form = document.getElementById('tool-form');
    const title = document.getElementById('tool-modal-title');
    
    form.reset();
    
    if (toolId) {
        // Edit mode
        const tools = getTools();
        const tool = tools.find(t => t.id === toolId);
        if (tool) {
            title.textContent = '编辑工具';
            document.getElementById('tool-id').value = tool.id;
            document.getElementById('tool-name').value = tool.name;
            document.getElementById('tool-url').value = tool.url;
            document.getElementById('tool-icon').value = tool.icon || '';
            document.getElementById('tool-badge').value = tool.badge || '';
            document.getElementById('tool-desc').value = tool.desc;
            document.getElementById('tool-content').value = tool.content || '';
            document.getElementById('tool-tags').value = (tool.tags || []).join(', ');
            
            // Check categories
            document.querySelectorAll('#tool-type-categories input').forEach(cb => {
                cb.checked = tool.type && tool.type.includes(cb.value);
            });
            document.querySelectorAll('#tool-industry-categories input').forEach(cb => {
                cb.checked = tool.industry && tool.industry.includes(cb.value);
            });
        }
    } else {
        title.textContent = '添加工具';
        document.getElementById('tool-id').value = '';
    }
    
    modal.classList.add('active');
}

function closeToolModal() {
    document.getElementById('tool-modal').classList.remove('active');
}

document.getElementById('tool-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const id = document.getElementById('tool-id').value;
    const typeCategories = [];
    const industryCategories = [];
    
    document.querySelectorAll('#tool-type-categories input:checked').forEach(cb => {
        typeCategories.push(cb.value);
    });
    document.querySelectorAll('#tool-industry-categories input:checked').forEach(cb => {
        industryCategories.push(cb.value);
    });
    
    const toolData = {
        name: document.getElementById('tool-name').value,
        url: document.getElementById('tool-url').value,
        icon: document.getElementById('tool-icon').value,
        badge: document.getElementById('tool-badge').value,
        desc: document.getElementById('tool-desc').value,
        content: document.getElementById('tool-content').value,
        tags: document.getElementById('tool-tags').value.split(',').map(t => t.trim()).filter(t => t),
        type: typeCategories,
        industry: industryCategories
    };
    
    if (id) {
        updateTool(id, toolData);
    } else {
        addTool(toolData);
    }
    
    closeToolModal();
    renderAdminPanel();
    
    // Show success message
    showNotification(id ? '工具已更新' : '工具已添加');
});

// ===== News Modal =====
function openNewsModal(newsId = null) {
    const modal = document.getElementById('news-modal');
    const form = document.getElementById('news-form');
    const title = document.getElementById('news-modal-title');
    
    form.reset();
    
    if (newsId) {
        // Edit mode
        const newsList = getNews();
        const news = newsList.find(n => n.id === newsId);
        if (news) {
            title.textContent = '编辑快讯';
            document.getElementById('news-id').value = news.id;
            document.getElementById('news-title').value = news.title;
            document.getElementById('news-date').value = news.date;
            document.getElementById('news-tag').value = news.tag || '';
            document.getElementById('news-excerpt').value = news.excerpt;
            document.getElementById('news-content').value = news.content;
            document.getElementById('news-highlights').value = (news.highlights || []).join('\n');
        }
    } else {
        title.textContent = '添加快讯';
        document.getElementById('news-id').value = '';
        // Set default date to today
        document.getElementById('news-date').value = new Date().toISOString().split('T')[0];
    }
    
    modal.classList.add('active');
}

function closeNewsModal() {
    document.getElementById('news-modal').classList.remove('active');
}

document.getElementById('news-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const id = document.getElementById('news-id').value;
    const highlightsText = document.getElementById('news-highlights').value;
    const highlights = highlightsText.split('\n').map(h => h.trim()).filter(h => h);
    
    const newsData = {
        title: document.getElementById('news-title').value,
        date: document.getElementById('news-date').value,
        tag: document.getElementById('news-tag').value,
        excerpt: document.getElementById('news-excerpt').value,
        content: document.getElementById('news-content').value,
        highlights: highlights
    };
    
    if (id) {
        updateNews(id, newsData);
    } else {
        addNews(newsData);
    }
    
    closeNewsModal();
    renderAdminPanel();
    
    // Show success message
    showNotification(id ? '快讯已更新' : '快讯已添加');
});

// ===== Admin Panel =====
function renderAdminPanel() {
    renderAdminToolsList();
    renderAdminNewsList();
    renderCategoryEditor();
}

function renderAdminToolsList() {
    const tools = getTools();
    const container = document.getElementById('admin-tools-list');
    
    container.innerHTML = tools.map(tool => `
        <div class="admin-list-item">
            <div class="admin-item-info">
                <div class="admin-item-title">${tool.icon || '🤖'} ${tool.name}</div>
                <div class="admin-item-meta">${tool.url} · ${tool.createdAt}</div>
            </div>
            <div class="admin-item-actions">
                <button class="btn-icon" onclick="openToolModal('${tool.id}')">编辑</button>
                <button class="btn-icon delete" onclick="confirmDeleteTool('${tool.id}')">删除</button>
            </div>
        </div>
    `).join('');
}

function renderAdminNewsList() {
    const newsList = getNews();
    const container = document.getElementById('admin-news-list');
    
    container.innerHTML = newsList.map(news => `
        <div class="admin-list-item">
            <div class="admin-item-info">
                <div class="admin-item-title">${news.title}</div>
                <div class="admin-item-meta">${news.date} · ${news.tag || '资讯'}</div>
            </div>
            <div class="admin-item-actions">
                <button class="btn-icon" onclick="openNewsModal('${news.id}')">编辑</button>
                <button class="btn-icon delete" onclick="confirmDeleteNews('${news.id}')">删除</button>
            </div>
        </div>
    `).join('');
}

function renderCategoryEditor() {
    const typeContainer = document.getElementById('type-categories-list');
    const industryContainer = document.getElementById('industry-categories-list');
    
    typeContainer.innerHTML = typeCategories.map(cat => `
        <div class="category-item">
            <span>${cat.icon}</span>
            <span>${cat.name}</span>
            <span class="category-id">${cat.id}</span>
        </div>
    `).join('');
    
    industryContainer.innerHTML = industryCategories.map(cat => `
        <div class="category-item">
            <span>${cat.icon}</span>
            <span>${cat.name}</span>
            <span class="category-id">${cat.id}</span>
        </div>
    `).join('');
}

function confirmDeleteTool(id) {
    if (confirm('确定要删除这个工具吗？')) {
        deleteTool(id);
        renderAdminPanel();
        showNotification('工具已删除');
    }
}

function confirmDeleteNews(id) {
    if (confirm('确定要删除这条快讯吗？')) {
        deleteNews(id);
        renderAdminPanel();
        showNotification('快讯已删除');
    }
}

// ===== Admin Tabs =====
document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
        
        btn.classList.add('active');
        const panelId = 'admin-' + btn.dataset.adminTab + '-panel';
        document.getElementById(panelId).classList.add('active');
    });
});

// ===== Navigation =====
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = item.dataset.page;
        showPage(pageId);
    });
});

// ===== Category Tabs =====
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        renderTools(currentCategory);
    });
});

// ===== Notification =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: var(--color-secondary);
        color: white;
        padding: 16px 24px;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        z-index: 3000;
        animation: slideUp 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// ===== Utility Functions =====
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return '今天';
    if (days === 1) return '昨天';
    if (days < 7) return `${days}天前`;
    
    return date.toLocaleDateString('zh-CN', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    showPage('tools');
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeToolModal();
            closeNewsModal();
            closeConfirmModal();
        }
    });
});

console.log('🚀 AI Hub initialized');
