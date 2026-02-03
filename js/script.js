// --- 状態管理の変更 ---
let currentGenres = []; // 配列に変更
let currentSize = 'all';

// 要素の取得
const videoGrid = document.getElementById('video-grid');
const modal = document.getElementById('modal');
const modalVideo = document.getElementById('modal-video');
const closeModalBtn = document.getElementById('close-modal');

// --- renderVideos関数のロジック修正 ---
function renderVideos() {
    videoGrid.innerHTML = '';
    
    const filteredData = videoData.filter(video => {
        // --- ジャンルフィルタの判定ロジックを修正 ---
        // 選択されているジャンル(currentGenres)のどれか一つが、
        // 動画のジャンル配列(video.genre)の中に含まれているかを確認
        const genreMatch = currentGenres.length === 0 || 
                          currentGenres.some(selectedGenre => video.genre.includes(selectedGenre));
        
        const sizeMatch = currentSize === 'all' || video.size === currentSize;
        return genreMatch && sizeMatch;
    });

    filteredData.forEach(video => {
        const card = document.createElement('div');
        card.className = 'video-card';
        // 表示部分：配列をカンマ区切りの文字列にして表示
        const genreDisplay = Array.isArray(video.genre) ? video.genre.join(', ') : video.genre;

        card.innerHTML = `
            <div class="thumb-wrapper">
                <img src="${video.thumb}" alt="${video.title}" loading="lazy">
                <div class="play-icon"><div class="play-shape"></div></div>
            </div>
            <span class="card-purpose">${video.purpose}</span>
            <h3 class="card-title">${video.title}</h3>
            <div class="card-meta">${video.size} / ${genreDisplay}</div>
        `;
        card.addEventListener('click', () => openModal(video));
        videoGrid.appendChild(card);
    });
}

// モーダル制御
function openModal(video) {
    document.getElementById('modal-title').innerText = video.title;
    document.getElementById('modal-purpose').innerText = video.purpose;
    document.getElementById('modal-desc').innerText = video.desc;
    document.getElementById('modal-tech').innerText = video.tech;
    
    if (video.size === "縦長") {
        modalVideo.style.cssText = "aspect-ratio: 9/16; width: auto; height: 85vh; max-width: 100%;";
    } else {
        modalVideo.style.cssText = "aspect-ratio: 16/9; width: 100%; height: auto;";
    }

    // パス設定と強制ロード
    modalVideo.src = video.src;
    modalVideo.load(); 

    modal.style.display = 'flex';
    
    // ロード完了を待ってから再生
    modalVideo.oncanplay = () => {
        modal.classList.add('active');
        modalVideo.play().catch(e => console.log("Auto-play blocked"));
    };

    document.body.style.overflow = 'hidden';
}

// 右クリックを動画上で直接禁止する（シールド不要）
modalVideo.addEventListener('contextmenu', e => e.preventDefault());

function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        modalVideo.pause();
        modalVideo.src = ""; // リソースを解放
    }, 500);
    document.body.style.overflow = 'auto';
}

// --- ジャンルフィルタのクリックイベント修正 ---
document.querySelectorAll('#genre-filters .filter-btn').forEach(btn => {
    btn.onclick = () => {
        const genre = btn.dataset.filter;

        if (genre === 'all') {
            currentGenres = [];
            document.querySelectorAll('#genre-filters .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        } else {
            // "ALL" ボタンの active を解除
            document.querySelector('#genre-filters .filter-btn[data-filter="all"]').classList.remove('active');

            if (currentGenres.includes(genre)) {
                // すでに選択されていれば削除（OFFにする）
                currentGenres = currentGenres.filter(g => g !== genre);
                btn.classList.remove('active');
            } else {
                // 選択されていなければ追加（ONにする）
                currentGenres.push(genre);
                btn.classList.add('active');
            }

            // 一つも選択されていない場合は "ALL" を active に戻す
            if (currentGenres.length === 0) {
                document.querySelector('#genre-filters .filter-btn[data-filter="all"]').classList.add('active');
            }
        }
        renderVideos();
    };
});

document.querySelectorAll('#size-filters .filter-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('#size-filters .filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentSize = btn.dataset.filterSize;
        renderVideos();
    };
});

// スムーズスクロールの微調整（ヘッダーと被る場合）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        if (!target) return;

        let targetPosition;

        if (href === "#top") {
            // ロゴクリック時：ページの最上部（0）へ
            targetPosition = 0;
        } else {
            // WORKSなど他のリンク：ヘッダーの高さを考慮
            const headerHeight = document.querySelector('header').offsetHeight;
            targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        }

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

closeModalBtn.onclick = closeModal;
modal.onclick = (e) => { if(e.target === modal) closeModal(); };

document.addEventListener('contextmenu', e => {
    if (e.target.closest('video') || e.target.classList.contains('video-shield')) e.preventDefault();
});

// 追加：要素の取得
const videoOverlay = document.getElementById('video-overlay');

// --- openModal関数（修正） ---
function openModal(video) {
    document.getElementById('modal-title').innerText = video.title;
    document.getElementById('modal-purpose').innerText = video.purpose;
    document.getElementById('modal-desc').innerText = video.desc;
    document.getElementById('modal-tech').innerText = video.tech;
    
    if (video.size === "縦長") {
        modalVideo.style.cssText = "aspect-ratio: 9/16; width: auto; height: 85vh; max-width: 100%;";
    } else {
        modalVideo.style.cssText = "aspect-ratio: 16/9; width: 100%; height: auto;";
    }

    modalVideo.src = video.src;
    modalVideo.load(); 

    // モーダルを開いた時はボタンを表示する
    videoOverlay.classList.remove('is-hidden');

    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
}

// --- ビデオの再生・停止イベント（追記） ---

// 1. 中央のボタン（オーバーレイ）をクリックしたら再生開始
videoOverlay.addEventListener('click', () => {
    modalVideo.play();
});

// 2. 再生が始まったらボタンを隠す
modalVideo.addEventListener('play', () => {
    videoOverlay.classList.add('is-hidden');
});

// 3. 一時停止したらボタンを出す
modalVideo.addEventListener('pause', () => {
    videoOverlay.classList.remove('is-hidden');
});

// 4. 動画が終了したらボタンを出す
modalVideo.addEventListener('ended', () => {
    videoOverlay.classList.remove('is-hidden');
});

renderVideos();