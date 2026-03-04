// ===== AI Hub Tutorials Admin =====

// Simple auth (in production, use proper auth)
let isAdminLoggedIn = false;

// ===== Login =====
document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    
    // Check stored credentials or default
    const storedUsername = localStorage.getItem('tutorialsAdminUsername') || 'admin';
    const storedPassword = localStorage.getItem('tutorialsAdminPassword') || 'admin123';
    
    if (username === storedUsername && password === storedPassword) {
        isAdminLoggedIn = true;
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'block';
        loadTutorialsTable();
        showToast('登录成功');
    } else {
        showToast('用户名或密码错误', 'error');
    }
});

function logout() {
    isAdminLoggedIn = false;
    document.getElementById('login-screen').style.display = 'block';
    document.getElementById('admin-dashboard').style.display = 'none';
    document.getElementById('login-form').reset();
    showToast('已退出登录');
}

// ===== Load Tutorials Table =====
function loadTutorialsTable() {
    const tutorials = getTutorials();
    const tbody = document.getElementById('tutorials-table-body');
    
    if (tutorials.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="empty-table">暂无教程</td></tr>';
        return;
    }
    
    const categoryNames = {
        'login': '登录注册',
        'usage': '使用技巧',
        'advanced': '进阶教程'
    };
    
    tbody.innerHTML = tutorials.map(tutorial => `
        <tr>
            <td>
                <div class="table-item">
                    <span class="table-item-icon">${tutorial.icon || '📚'}</span>
                    <div class="table-item-info">
                        <div class="table-item-title">${tutorial.title}</div>
                        <div class="table-item-desc">${tutorial.excerpt?.substring(0, 60) || ''}...</div>
                    </div>
                </div>
            </td>
            <td><span class="status-badge">${categoryNames[tutorial.category] || tutorial.category}</span></td>
            <td>${tutorial.readTime || '5 分钟'}</td>
            <td>${tutorial.createdAt || '-'}</td>
            <td>
                <div class="table-actions">
                    <button class="btn-icon" onclick="openTutorialModal('${tutorial.id}')">编辑</button>
                    <button class="btn-icon delete" onclick="confirmDeleteTutorial('${tutorial.id}')">删除</button>
                </div>
            </td>
        </tr>
    `).join('');
}

// ===== Tutorial Modal =====
function openTutorialModal(tutorialId = null) {
    const modal = document.getElementById('tutorial-modal');
    const form = document.getElementById('tutorial-form');
    const title = document.getElementById('tutorial-modal-title');
    
    form.reset();
    
    if (tutorialId) {
        // Edit mode
        const tutorials = getTutorials();
        const tutorial = tutorials.find(t => t.id === tutorialId);
        if (tutorial) {
            title.textContent = '编辑教程';
            document.getElementById('tutorial-id').value = tutorial.id;
            document.getElementById('tutorial-title').value = tutorial.title;
            document.getElementById('tutorial-category').value = tutorial.category;
            document.getElementById('tutorial-icon').value = tutorial.icon || '';
            document.getElementById('tutorial-badge').value = tutorial.badge || '';
            document.getElementById('tutorial-excerpt').value = tutorial.excerpt;
            document.getElementById('tutorial-read-time').value = tutorial.readTime || '';
            document.getElementById('tutorial-content').value = tutorial.content;
            document.getElementById('tutorial-tips').value = (tutorial.tips || []).join('\n');
        }
    } else {
        title.textContent = '添加教程';
        document.getElementById('tutorial-id').value = '';
    }
    
    modal.classList.add('active');
}

function closeTutorialModal() {
    document.getElementById('tutorial-modal').classList.remove('active');
}

document.getElementById('tutorial-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const id = document.getElementById('tutorial-id').value;
    const tipsText = document.getElementById('tutorial-tips').value;
    const tips = tipsText.split('\n').map(t => t.trim()).filter(t => t);
    
    const tutorialData = {
        title: document.getElementById('tutorial-title').value,
        category: document.getElementById('tutorial-category').value,
        icon: document.getElementById('tutorial-icon').value,
        badge: document.getElementById('tutorial-badge').value,
        excerpt: document.getElementById('tutorial-excerpt').value,
        readTime: document.getElementById('tutorial-read-time').value,
        content: document.getElementById('tutorial-content').value,
        tips: tips
    };
    
    if (id) {
        updateTutorial(id, tutorialData);
        showToast('教程已更新');
    } else {
        addTutorial(tutorialData);
        showToast('教程已添加');
    }
    
    closeTutorialModal();
    loadTutorialsTable();
});

// ===== Delete Tutorial =====
function confirmDeleteTutorial(id) {
    if (confirm('确定要删除这个教程吗？')) {
        deleteTutorial(id);
        loadTutorialsTable();
        showToast('教程已删除');
    }
}

// ===== Password Modal =====
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
    
    const storedPassword = localStorage.getItem('tutorialsAdminPassword') || 'admin123';
    
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
    
    localStorage.setItem('tutorialsAdminPassword', newPassword);
    closePasswordModal();
    showToast('密码已修改');
});

// ===== Data Export/Import =====
function exportData() {
    const tutorials = getTutorials();
    const data = JSON.stringify(tutorials, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `tutorials-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
    showToast('数据已导出');
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const tutorials = JSON.parse(e.target.result);
            if (Array.isArray(tutorials)) {
                saveTutorials(tutorials);
                loadTutorialsTable();
                showToast('数据已导入');
            } else {
                showToast('文件格式错误', 'error');
            }
        } catch (err) {
            showToast('文件解析失败', 'error');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

// ===== Admin Navigation =====
document.querySelectorAll('.admin-nav .nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        document.querySelectorAll('.admin-nav .nav-item').forEach(i => i.classList.remove('active'));
        document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
        
        item.classList.add('active');
        const panelId = 'panel-' + item.dataset.panel;
        document.getElementById(panelId).classList.add('active');
    });
});

// ===== Toast Notification =====
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast ' + (type === 'error' ? 'error' : 'success');
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    // Check if already logged in (session)
    const session = sessionStorage.getItem('tutorialsAdminSession');
    if (session === 'true') {
        isAdminLoggedIn = true;
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'block';
        loadTutorialsTable();
    }
});

// Save session on login
const originalLoginHandler = document.getElementById('login-form')?.addEventListener;
if (originalLoginHandler) {
    sessionStorage.setItem('tutorialsAdminSession', 'true');
}

console.log('📚 AI Hub Tutorials Admin loaded');
