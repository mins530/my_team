// 메인페이지 코멘트 입력 자바스크립트 
function addComment() {
    let commentInput = document.getElementById('commentInput');
    let commentsContainer = document.getElementById('commentsContainer');

    if (commentInput.value.trim() === '') {
        alert('코멘트를 입력하세요.');
        return;
    }

    let newComment = document.createElement('div');
    newComment.classList.add('comment', 'mt-2');
    newComment.innerHTML = `<div class="comment-body">${commentInput.value}</div>`;

    commentsContainer.appendChild(newComment);
    commentInput.value = '';
}

// 메인페이지 Search 입력 스크립트
const teamMembers = {
    "정성원님" : "team-members/member1.html",
    "배민석님" : "team-members/member2.html",
    "서재일님" : "team-members/member3.html",
    "김경민B님" : "team-members/member4.html",
    
};

function searchTeamMember() {
    const searchInput = document.getElementById('searchInput').value.trim();
    
    if (teamMembers[searchInput]) {
        window.location.href = teamMembers[searchInput];
    } else {
        alert('팀원을 찾을 수 없습니다.');
    }
}