// 状態管理
let currentGenre = 'all';
let currentSize = 'all';

// 要素の取得
const videoGrid = document.getElementById('video-grid');
const modal = document.getElementById('modal');
const modalVideo = document.getElementById('modal-video');
const closeModalBtn = document.getElementById('close-modal');

// --- メイン機能 ---

// 動画カードの描画
function renderVideos() {
    videoGrid.innerHTML = '';
    
    const filteredData = videoData.filter(video => {
        const genreMatch = currentGenre === 'all' || video.genre === currentGenre;
        const sizeMatch = currentSize === 'all' || video.size === currentSize;
        return genreMatch && sizeMatch;
    });

    filteredData.forEach(video => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <div class="thumb-wrapper">
                <img src="${video.thumb}" alt="${video.title}" loading="lazy">
                <div class="play-icon"><div class="play-shape"></div></div>
            </div>
            <span class="card-purpose">${video.purpose}</span>
            <h3 class="card-title">${video.title}</h3>
            <div class="card-meta">${video.size} / ${video.genre}</div>
        `;
        card.onclick = () => openModal(video);
        videoGrid.appendChild(card);
    });
}

// モーダルを開く
function openModal(video) {
    document.getElementById('modal-title').innerText = video.title;
    document.getElementById('modal-purpose').innerText = video.purpose;
    document.getElementById('modal-desc').innerText = video.desc;
    document.getElementById('modal-tech').innerText = video.tech;
    
    // 動画アスペクト比調整
    if (video.size === "縦長") {
        modalVideo.style.aspectRatio = "9 / 16";
        modalVideo.style.width = "auto";
        modalVideo.style.height = "80vh";
    } else {
        modalVideo.style.aspectRatio = "16 / 9";
        modalVideo.style.width = "100%";
        modalVideo.style.height = "auto";
    }

    modalVideo.src = video.src;
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
}

// モーダルを閉じる
function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        modalVideo.pause();
        modalVideo.src = "";
    }, 500);
    document.body.style.overflow = 'auto';
}

// --- イベントリスナー ---

// ジャンルフィルタ
document.querySelectorAll('#genre-filters .filter-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('#genre-filters .filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentGenre = btn.dataset.filter;
        renderVideos();
    };
});

// サイズフィルタ
document.querySelectorAll('#size-filters .filter-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('#size-filters .filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentSize = btn.dataset.filterSize;
        renderVideos();
    };
});

// 閉じる操作
closeModalBtn.onclick = closeModal;
modal.onclick = (e) => { if(e.target === modal) closeModal(); };

// セキュリティ：右クリック禁止（ビデオ周辺）
document.addEventListener('contextmenu', e => {
    if (e.target.closest('video') || e.target.classList.contains('video-shield')) {
        e.preventDefault();
    }
});

// 初期実行
renderVideos();