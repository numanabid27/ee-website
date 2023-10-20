document.addEventListener("DOMContentLoaded", function () {
    const itemsContainer = document.querySelector(".items");
    const items = document.querySelectorAll(".item");
    const totalItems = items.length;
    let currentIndex = 0;
    const itemWidth = items[0].offsetWidth;

    function showItem(index) {
      const offset = -index * itemWidth;
      itemsContainer.style.transform = `translateX(${offset}px)`;
    }

    function nextItem() {
      currentIndex++;
      if (currentIndex >= totalItems) {
        currentIndex = 0;
      }
      showItem(currentIndex);
    }

    // Initial display
    showItem(currentIndex);

    // Auto-slide every 5 seconds (adjust the interval as needed)
    const autoSlideInterval = 5000; // 5 seconds

    setInterval(nextItem, autoSlideInterval);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const factBlocks = document.querySelectorAll('.fact-block');
    const descriptionBlocks = document.querySelectorAll('.description-block');
    const factBlocksContainer = document.querySelector('.facts-container');
    const initialTop = factBlocksContainer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    // const testVal = document.getElementById('test')

    function updateBlocks() {
        factBlocks.forEach((block, index) => {
            const rect = factBlocksContainer.getBoundingClientRect();
            const descriptionBlock = descriptionBlocks[index];
            const currentTop = rect.top;
            const delta = initialTop - currentTop;
            // testVal.innerHTML = delta

            if (delta > 0 && delta <= 150) {
                descriptionBlock.style.top = `-${150 - delta}px`
                // if (-50 < delta && delta < 0) descriptionBlock.style.top = `${delta + 50}px`;
                // else if (0 < delta && delta < 50) descriptionBlock.style.top = `${delta}px`;
            } else if (delta > 150 && delta <= 300) {
                descriptionBlock.style.top = '0';
            } else {
                if(delta <= 0) descriptionBlock.style.top = '-150px';
            }
        });
        requestAnimationFrame(updateBlocks);
    }


    const container = document.querySelector('.containers .content'); // Use querySelector to select the element
    container.addEventListener('scroll', function() {
      requestAnimationFrame(updateBlocks);
    });

  });

  var videoPlayButton,
  videoWrapper = document.getElementsByClassName('video-wrapper')[0],
  video = document.getElementsByTagName('video')[0],
  videoMethods = {
    renderVideoPlayButton: function() {
      if (videoWrapper.contains(video)) {
        this.formatVideoPlayButton()
        video.classList.add('has-media-controls-hidden')
        videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
        videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
      }
    },

    formatVideoPlayButton: function() {
      videoWrapper.insertAdjacentHTML('beforeend', '\
        <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
        <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
        <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
        </svg>\
        ')
    },

    hideVideoPlayButton: function() {
      video.play()
      videoPlayButton.classList.add('is-hidden')
      video.classList.remove('has-media-controls-hidden')
      video.setAttribute('controls', 'controls')
    }
  }

  videoMethods.renderVideoPlayButton()