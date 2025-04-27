  document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('contextmenu', e => e.preventDefault());
    });
  });

  window.onload = function() {
    const hamburger = document.getElementById('hamburger');
    const sideMenu = document.getElementById('sideMenu');
    const content = document.getElementById('content');
  
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      sideMenu.classList.toggle('active');
    });
  
    
      hamburger.classList.remove('active');
      sideMenu.classList.remove('active');
    };

    const searchInput = document.getElementById('search-input');
    const paragraphs = document.querySelectorAll('.content p');
    
    searchInput.addEventListener('input', function() {
      const query = searchInput.value.trim().toLowerCase();
    
      // Remove all previous highlights
      paragraphs.forEach(p => {
        p.innerHTML = p.textContent;
      });
    
      if (query === '') {
        return; // If input is empty, do nothing more
      }
    
      let found = false;
    
      paragraphs.forEach(p => {
        const text = p.textContent.toLowerCase();
        if (!found && text.includes(query)) {
          // Highlight only the first match
          const regex = new RegExp(`(${query})`, 'gi');
          p.innerHTML = p.textContent.replace(regex, '<span class="highlight">$1</span>');
    
          // Scroll smoothly to the element
          p.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
          found = true;
        }
      });
    });
    
    const text = "On Development...";
    const speed = 100;         // Typing speed (ms)
    const deleteSpeed = 150;    // Deleting speed (ms)
    const waitBeforeDelete = 1000;  // Wait after full text before blinking
    const waitBeforeTypeAgain = 500; // Wait before typing again
    const blinkTimes = Infinity;      // How many blinks
    
    let i = 0;
    let isDeleting = false;
    let isBlinking = false;
    let blinkCount = 0;
    
    const element = document.getElementById('typewriter-text');
    const cursor = document.getElementById('cursor');
    
    function typeWriter() {
      if (isBlinking) return; // During blinking, don't type/delete
    
      if (isDeleting) {
        i--;
        element.textContent = text.substring(0, i);
      } else {
        i++;
        element.textContent = text.substring(0, i);
      }
    
      let timeout = isDeleting ? deleteSpeed : speed;
    
      if (!isDeleting && i === text.length) {
        startBlinking();
        return;
      } else if (isDeleting && i === 0) {
        isDeleting = false;
        timeout = waitBeforeTypeAgain;
      }
    
      setTimeout(typeWriter, timeout);
    }
    
    function startBlinking() {
      isBlinking = true;
      blinkCount = 0;
      blinkCursor();
    }
    
    function blinkCursor() {
      cursor.style.opacity = (cursor.style.opacity == 0 ? 1 : 0);
      blinkCount++;
    
      if (blinkCount >= blinkTimes * 2) { 
        // blinkTimes * 2 because each blink is 2 toggles (show/hide)
        isBlinking = false;
        isDeleting = true;
        setTimeout(typeWriter, deleteSpeed);
      } else {
        setTimeout(blinkCursor, 300); // Blink speed
      }
    }
    
    // Start the animation
    typeWriter();
    

    // Example notifications
const messages = [
    {
      sender: "Alice",
      preview: "Hey! Are you coming to the meeting...",
      full: "Hey! Are you coming to the meeting later today at 3 PM? Don't forget the project files!"
    },
    {
      sender: "Bob",
      preview: "Don't forget to submit your report...",
      full: "Don't forget to submit your report before Friday afternoon. Let me know if you need any help!"
    },
    {
      sender: "Charlie",
      preview: "Let's catch up soon!",
      full: "Let's catch up soon! It's been way too long since our last coffee meetup. How about this weekend?"
    }
  ];
  
  const notificationsContainer = document.getElementById('notifications');
  
  messages.forEach((msg, index) => {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
      <div class="sender">${msg.sender}</div>
      <div class="preview">${msg.preview}</div>
      <div class="full-message">${msg.full}</div>
    `;
  
    notification.addEventListener('click', () => {
      notification.classList.toggle('expanded');
    });
  
    notificationsContainer.appendChild(notification);
  });
  