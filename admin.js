// ===== AI Hub Admin Application =====

// Configuration
const ADMIN_CONFIG = {
    defaultUsername: 'admin',
    defaultPassword: 'admin123',
    sessionTimeout: 60 * 60 * 1000, // 1 hour
    rememberDuration: 7 * 24 * 60 * 60 * 1000 // 7 days
};

// State
let sessionTimer = null;
let lastActivity = Date.now();

// ===== Authentication =====
function checkAuth() {
    const session = localStorage.getItem('aiHubAdminSession');
    if (!session) {
        showLogin();
        return false;
    }
    
    try {
        const sessionData = JSON.parse(session);
        const now = Date.now();
        
        // Check if session expired
        if (now > sessionData.expiresAt) {
            logout();
            return false;
        }
        
        // Session valid
        showDashboard();
        return true;
    } catch (e) {
        logout();
        return false;
    }
}

function login(username, password, remember) {
    const storedUsername = localStorage.getItem('aiHubAdminUsername') || ADMIN_CONFIG.defaultUsername;
    const storedPassword = localStorage.getItem('aiHubAdminPassword') || ADMIN_CONFIG.defaultPassword;
    
    if (username === storedUsername && password === storedPassword) {
        const duration = remember ? ADMIN_CONFIG.rememberDuration : ADMIN_CONFIG.sessionTimeout;
        const sessionData = {
            username: username,
            loginAt: Date.now(),
            expiresAt: Date.now() + duration
        };
        
        localStorage.setItem('aiHubAdminSession', JSON.stringify(sessionData));
        logActivity('login', '管理员登录');
        showDashboard();
        showToast('登录成功', 'success');
        return true;
    }
    
    showToast('用户名或密码错误', 'error');
    return false;
}

function logout() {
    logActivity('logout', '管理员退出登录');
    localStorage.removeItem('aiHubAdminSession');
    clearTimeout(sessionTimer);
    showLogin();
    showToast('已退出登录', 'success');
}

function showLogin() {
    document.getElementById('login-screen').style.display = 'flex';
    document.getElementById('admin-dashboard').style.display = 'none';
}

function showDashboard() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('admin-dashboard').style.display = 'block';
    startSessionTimer();
    loadDashboard();
}

function startSessionTimer() {
    clearTimeout(sessionTimer);
    sessionTimer = setTimeout(() => {
        logout();
        showToast('会话已过期，请重新登录', 'warning');
    }, ADMIN_CONFIG.sessionTimeout);
    
    // Reset timer on activity
    document.addEventListener('mousemove', resetSessionTimer);
    document.addEventListener('keydown', resetSessionTimer);
    document.addEventListener('click', resetSessionTimer);
}

function resetSessionTimer() {
    clearTimeout(sessionTimer);
    startSessionTimer();
}

// ===== Login Form =====
document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    const remember = document.getElementById('remember-me').checked;
    login(username, password, remember);
});

// ===== Dashboard =====
function showPanel(panelId) {
    // Update nav
    document.querySelectorAll('.admin-nav .nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.panel === panelId) {
            item.classList.add('active');
        }
    });
    
    // Update panel
    document.querySelectorAll('.admin-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.getElementById('panel-' + panelId).classList.add('active');
    
    // Load panel data
    if (panelId === 'tools') {
        renderToolsTable();
    } else if (panelId === 'news') {
        renderNewsTable();
    } else if (panelId === 'categories') {
        renderCategories();
    } else if (panelId === 'dashboard') {
        loadDashboard();
    }
}

function loadDashboard() {
    const tools = getTools();
    const news = getNews();
    
    // Update stats
    document.getElementById('stat-tools').textContent = tools.length;
    document.getElementById('stat-news').textContent = news.length;
    document.getElementById('stat-storage').textContent = calculateStorageSize();
    
    // Load activity log
    loadActivityLog();
}

function calculateStorageSize() {
    let total = 0;
    for (let key in localStorage) {
        if (key.startsWith('aiHub')) {
            total += localStorage[key].length * 2; // UTF-16
        }
    }
    return formatBytes(total);
}

function formatBytes(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

// ===== Activity Log =====
function logActivity(type, description) {
    const activities = getActivities();
    activities.unshift({
        type: type,
        description: description,
        timestamp: Date.now()
    });
    
    // Keep last 50 activities
    if (activities.length > 50) {
        activities.pop();
    }
    
    localStorage.setItem('aiHubActivities', JSON.stringify(activities));
}

function getActivities() {
    try {
        const data = localStorage.getItem('aiHubActivities');
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function loadActivityLog() {
    const activities = getActivities();
    const container = document.getElementById('activity-log');
    
    if (activities.length === 0) {
        container.innerHTML = '<p class="empty-state">暂无活动记录</p>';
        return;
    }
    
    container.innerHTML = activities.slice(0, 10).map(activity => {
        const icon = getActivityIcon(activity.type);
        const time = formatActivityTime(activity.timestamp);
        return `
            <div class="activity-item">
                <span class="activity-icon">${icon}</span>
                <div class="activity-content">
                    <span>${activity.description}</span>
                    <span class="activity-time">${time}</span>
                </div>
            </div>
        `;
    }).join('');
}

function getActivityIcon(type) {
    const icons = {
        'login': '🔐',
        'logout': '🔓',
        'tool_add': '➕',
        'tool_edit': '✏️',
        'tool_delete': '🗑️',
        'news_add': '📝',
        'news_edit': '✏️',
        'news_delete': '🗑️',
        'data_export': '📤',
        'data_import': '📥',
        'password_change': '🔑',
        'settings_save': '⚙️'
    };
    return icons[type] || '📌';
}

function formatActivityTime(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 1) return '刚刚';
    if (minutes < 60) return `${minutes}分钟前`;
    if (hours < 24) return `${hours}小时前`;
    if (days < 7) return `${days}天前`;
    
    return new Date(timestamp).toLocaleDateString('zh-CN');
}

// ===== Tools Management =====
function renderToolsTable() {
    const tools = getTools();
    const tbody = document.getElementById('tools-table-body');
    
    if (tools.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="empty-state">暂无工具，点击右上角添加</td></tr>';
        return;
    }
    
    tbody.innerHTML = tools.map(tool => {
        const typeNames = (tool.type || []).map(t => {
            const cat = typeCategories.find(c => c.id === t);
            return cat ? cat.name : t;
        }).join(', ');
        
        const industryNames = (tool.industry || []).map(i => {
            const cat = industryCategories.find(c => c.id === i);
            return cat ? cat.name : i;
        }).join(', ');
        
        return `
            <tr>
                <td>
                    <strong>${tool.icon || '🤖'} ${tool.name}</strong>
                    <br><small style="color: var(--color-text-muted)">${truncate(tool.url, 40)}</small>
                </td>
                <td>${typeNames || '-'}</td>
                <td>${industryNames || '-'}</td>
                <td>${tool.createdAt || '-'}</td>
                <td>
                    <div class="data-table-actions">
                        <button class="btn btn-sm btn-secondary" onclick="openToolModal('${tool.id}')">编辑</button>
                        <button class="btn btn-sm btn-danger" onclick="confirmDeleteTool('${tool.id}')">删除</button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// ===== News Management =====
function renderNewsTable() {
    const newsList = getNews();
    const tbody = document.getElementById('news-table-body');
    
    if (newsList.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="empty-state">暂无快讯，点击右上角添加</td></tr>';
        return;
    }
    
    tbody.innerHTML = newsList.map(news => {
        return `
            <tr>
                <td><strong>${truncate(news.title, 50)}</strong></td>
                <td>${news.tag || '-'}</td>
                <td>${news.date || '-'}</td>
                <td>${news.createdAt || '-'}</td>
                <td>
                    <div class="data-table-actions">
                        <button class="btn btn-sm btn-secondary" onclick="openNewsModal('${news.id}')">编辑</button>
                        <button class="btn btn-sm btn-danger" onclick="confirmDeleteNews('${news.id}')">删除</button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// ===== Categories =====
function renderCategories() {
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

// ===== Tool Modal =====
function openToolModal(toolId = null) {
    const modal = document.getElementById('tool-modal');
    const form = document.getElementById('tool-form');
    const title = document.getElementById('tool-modal-title');
    
    form.reset();
    
    if (toolId) {
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
    const typeCats = [];
    const industryCats = [];
    
    document.querySelectorAll('#tool-type-categories input:checked').forEach(cb => typeCats.push(cb.value));
    document.querySelectorAll('#tool-industry-categories input:checked').forEach(cb => industryCats.push(cb.value));
    
    const toolData = {
        name: document.getElementById('tool-name').value,
        url: document.getElementById('tool-url').value,
        icon: document.getElementById('tool-icon').value,
        badge: document.getElementById('tool-badge').value,
        desc: document.getElementById('tool-desc').value,
        content: document.getElementById('tool-content').value,
        tags: document.getElementById('tool-tags').value.split(',').map(t => t.trim()).filter(t => t),
        type: typeCats,
        industry: industryCats
    };
    
    if (id) {
        updateTool(id, toolData);
        logActivity('tool_edit', `编辑工具：${toolData.name}`);
        showToast('工具已更新', 'success');
    } else {
        addTool(toolData);
        logActivity('tool_add', `添加工具：${toolData.name}`);
        showToast('工具已添加', 'success');
    }
    
    closeToolModal();
    renderToolsTable();
    loadDashboard();
});

// ===== News Modal =====
function openNewsModal(newsId = null) {
    const modal = document.getElementById('news-modal');
    const form = document.getElementById('news-form');
    const title = document.getElementById('news-modal-title');
    
    form.reset();
    
    if (newsId) {
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
        logActivity('news_edit', `编辑快讯：${newsData.title}`);
        showToast('快讯已更新', 'success');
    } else {
        addNews(newsData);
        logActivity('news_add', `添加快讯：${newsData.title}`);
        showToast('快讯已添加', 'success');
    }
    
    closeNewsModal();
    renderNewsTable();
    loadDashboard();
});

// ===== Delete Operations =====
function confirmDeleteTool(id) {
    if (confirm('确定要删除这个工具吗？此操作不可恢复。')) {
        const tools = getTools();
        const tool = tools.find(t => t.id === id);
        deleteTool(id);
        logActivity('tool_delete', `删除工具：${tool ? tool.name : id}`);
        renderToolsTable();
        loadDashboard();
        showToast('工具已删除', 'success');
    }
}

function confirmDeleteNews(id) {
    if (confirm('确定要删除这条快讯吗？此操作不可恢复。')) {
        const newsList = getNews();
        const news = newsList.find(n => n.id === id);
        deleteNews(id);
        logActivity('news_delete', `删除快讯：${news ? news.title : id}`);
        renderNewsTable();
        loadDashboard();
        showToast('快讯已删除', 'success');
    }
}

// ===== Data Export/Import =====
function exportData() {
    const data = {
        tools: getTools(),
        news: getNews(),
        activities: getActivities(),
        exportedAt: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-hub-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    logActivity('data_export', '导出数据备份');
    showToast('数据已导出', 'success');
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            
            if (data.tools) saveTools(data.tools);
            if (data.news) saveNews(data.news);
            
            logActivity('data_import', '导入数据备份');
            showToast('数据已导入', 'success');
            loadDashboard();
            renderToolsTable();
            renderNewsTable();
        } catch (error) {
            showToast('导入失败：文件格式错误', 'error');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

// ===== Password Management =====
function openPasswordModal() {
    document.getElementById('password-modal').classList.add('active');
}

function closePasswordModal() {
    document.getElementById('password-modal').classList.remove('active');
    document.getElementById('password-form').reset();
}

document.getElementById('password-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    const storedPassword = localStorage.getItem('aiHubAdminPassword') || ADMIN_CONFIG.defaultPassword;
    
    if (currentPassword !== storedPassword) {
        showToast('当前密码错误', 'error');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        showToast('两次输入的新密码不一致', 'error');
        return;
    }
    
    if (newPassword.length < 6) {
        showToast('密码长度至少 6 位', 'error');
        return;
    }
    
    localStorage.setItem('aiHubAdminPassword', newPassword);
    logActivity('password_change', '修改管理员密码');
    closePasswordModal();
    showToast('密码已修改，请重新登录', 'success');
    
    setTimeout(() => logout(), 1500);
});

// ===== Settings =====
function saveSettings() {
    const siteTitle = document.getElementById('site-title').value;
    const sessionTimeout = document.getElementById('session-timeout').value;
    
    localStorage.setItem('aiHubSiteTitle', siteTitle);
    ADMIN_CONFIG.sessionTimeout = parseInt(sessionTimeout) * 60 * 1000;
    
    logActivity('settings_save', '保存系统设置');
    showToast('设置已保存', 'success');
}

function confirmReset() {
    if (confirm('⚠️ 警告：此操作将清除所有数据并恢复默认值，且不可恢复！\n\n确定要继续吗？')) {
        if (confirm('请再次确认：确定要重置所有数据吗？')) {
            localStorage.removeItem('aiHubTools');
            localStorage.removeItem('aiHubNews');
            localStorage.removeItem('aiHubActivities');
            
            // Reinitialize data
            initializeData();
            
            logActivity('data_reset', '重置所有数据');
            showToast('数据已重置', 'success');
            loadDashboard();
            renderToolsTable();
            renderNewsTable();
        }
    }
}

// ===== Navigation =====
document.querySelectorAll('.admin-nav .nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        showPanel(item.dataset.panel);
    });
});

// ===== Utilities =====
function truncate(str, len) {
    if (!str) return '';
    if (str.length <= len) return str;
    return str.substring(0, len) + '...';
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast ' + type;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    // Check authentication
    checkAuth();
    
    // Load saved settings
    const savedTitle = localStorage.getItem('aiHubSiteTitle');
    if (savedTitle) {
        document.getElementById('site-title').value = savedTitle;
    }
});

console.log('🔐 AI Hub Admin loaded');
