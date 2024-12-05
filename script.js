// script.js
function addPost() {
    const postInput = document.getElementById('postInput');
    const pdfInput = document.getElementById('pdfInput');
    const feed = document.getElementById('feed');
  
    // Create a new post container
    const postCard = document.createElement('div');
    postCard.className = 'feed-post card';
  
    // Card body
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
  
    // Add post content if provided
    if (postInput.value.trim() !== '') {
      const postContent = document.createElement('p');
      postContent.className = 'card-text';
      postContent.textContent = postInput.value;
      cardBody.appendChild(postContent);
    }
  
    // Add PDF link if a file is selected
    if (pdfInput.files.length > 0) {
      const pdfFile = pdfInput.files[0];
      const pdfLink = document.createElement('a');
      pdfLink.href = URL.createObjectURL(pdfFile);
      pdfLink.target = '_blank';
      pdfLink.textContent = `View PDF: ${pdfFile.name}`;
      pdfLink.className = 'btn btn-outline-secondary mt-2';
      cardBody.appendChild(pdfLink);
    }
  
    // Add timestamp
    const postTime = document.createElement('small');
    postTime.className = 'text-muted d-block mt-3';
    postTime.textContent = `Posted on ${new Date().toLocaleString()}`;
    cardBody.appendChild(postTime);
  
    postCard.appendChild(cardBody);
    feed.insertBefore(postCard, feed.firstChild);
  
    // Clear inputs
    postInput.value = '';
    pdfInput.value = '';
  }
  