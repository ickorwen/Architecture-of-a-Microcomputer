// Elements and vars and shit
const startAudio = new Audio('audio/Pc_Bootup_Sound.mp3')
const bgAudio = new Audio('audio/homebg.mp3');
const muteButton = document.getElementById('mute-button');
const phallus = document.getElementById('phallus');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
const componentsLink = document.querySelector('nav ul li a[href="components.html"]');
const iodevicesLink = document.querySelector('nav ul li a[href="iodevices.html"]');
const busesLink = document.querySelector('nav ul li a[href="buses.html"]')
const aboutUsLink = document.querySelector('nav ul li a[href="aboutus.html"]')
const popup = document.getElementById('popup');
const popupOkButton = document.getElementById('popup-ok');

// Preloaded images because phallus gets glitchy at first
const images = [
	'images/HomepageMascotSprites/spaced/ComputyEyesClosedBS.png',
	'images/HomepageMascotSprites/spaced/ComputyNoScreenBS.png',
	'images/HomepageMascotSprites/spaced/ComputyDefaultBS.png'
];

// cycles through image array
images.forEach(src => {
	const img = new Image();
	img.src = src;
});

// Audio Setup
bgAudio.loop = true;
bgAudio.preload = 'auto';
bgAudio.volume = 0.3;
startAudio.volume = 0.3;

function playAudio() {
	bgAudio.play().catch(err => console.error('Audio play error:', err));
	document.removeEventListener('click', playAudio);
	document.removeEventListener('keydown', playAudio);
}

window.addEventListener('load', () => {
	bgAudio.play().catch(() => {
		console.log('Autoplay blocked; waiting for user interaction.');
	});

	// Only run home page specific code if elements exist
	if (popup && phallus) {
		setTimeout(() => {
			popup.style.display = 'flex'; // Show the popup
			phallus.classList.add('starting'); // Add zoom effect on page load
		}, 500);
	}
});

document.addEventListener('click', playAudio);
document.addEventListener('keydown', playAudio);

// Mute/Unmute Toggle
if (muteButton) {
	muteButton.addEventListener('click', () => {
		bgAudio.muted = !bgAudio.muted;
		muteButton.src = bgAudio.muted 
			? 'images/mute-button/Sound Off.png' 
			: 'images/mute-button/Sound On.png';
	});
}

// Parallax Effect
document.addEventListener('mousemove', (e) => {
	const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
	const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
	const layers = {
		treeLeftBack: document.getElementById('tree_left_back'),
		treeLeftFront: document.getElementById('tree_left_front'),
		treeRightBack: document.getElementById('tree_right_back'),
		treeRightFront: document.getElementById('tree_right_front')
	};

	// Only apply parallax if layers exist
	if (layers.treeLeftBack) layers.treeLeftBack.style.transform = `translate(${x * 4}px, ${y * 4}px)`;
	if (layers.treeLeftFront) layers.treeLeftFront.style.transform = `translate(${x * 8}px, ${y * 8}px)`;
	if (layers.treeRightBack) layers.treeRightBack.style.transform = `translate(${x * 4}px, ${y * 4}px)`;
	if (layers.treeRightFront) layers.treeRightFront.style.transform = `translate(${x * 8}px, ${y * 8}px)`;
});

// Close Popup and Start Blinking
if (popupOkButton && popup && phallus) {
	popupOkButton.addEventListener('click', () => {
		popup.style.display = 'none'; // Hide the popup
		phallus.classList.remove('starting'); // Remove the zoom effect
		startAudio.play();
		// Start the blinking effect after the popup is closed
		blinkEffect();
	});
}

// Set the initial image (ensure visibility before blink starts)
if (phallus) {
	phallus.style.backgroundImage = `url(images/HomepageMascotSprites/spaced/ComputyNoScreenBS.png)`;
}

// Blinking Animation (Changing Sprite)
let blinkInterval;

function blinkEffect() {
	if (phallus) {
		blinkInterval = setInterval(() => {
			phallus.style.backgroundImage = `url(images/HomepageMascotSprites/spaced/ComputyEyesClosedBS.png)`;
			setTimeout(() => {
				phallus.style.backgroundImage = `url(images/HomepageMascotSprites/spaced/ComputyDefaultBS.png)`;
			}, 300);
		}, Math.floor(Math.random() * 4000) + 3000); // Random interval for blinking
	}
}

// Stop blinking when phallus is clicked
if (phallus) {
	phallus.addEventListener('click', (e) => {
		// Stop blinking
		clearInterval(blinkInterval);

		// Zoom and Redirect to the components page
		zoomAndRedirect('components.html');
	});
}

// Zoom and Redirect Logic
function zoomAndRedirect(targetUrl) {
	phallus.classList.add('zoomed');

	setTimeout(() => {
		phallus.style.backgroundImage = `url(images/HomepageMascotSprites/spaced/ComputyNoScreenBS.png)`;
	}, 900);

	setTimeout(() => {
		window.location.href = targetUrl;
	}, 2000);
}

function slideAndRedirect(targetUrl) {
	phallus.classList.add('slide');

	setTimeout(() => {
		phallus.style.backgroundImage = `url(images/HomepageMascotSprites/spaced/ComputyNoScreenBS.png)`;
	}, 500);

	setTimeout(() => {
		window.location.href = targetUrl;
	}, 2000);
}


// Event Listeners for Links
if (componentsLink) {
	componentsLink.addEventListener('click', (e) => {
		e.preventDefault();
		zoomAndRedirect('components.html');
	});
}

if (iodevicesLink) {
	iodevicesLink.addEventListener('click', (e) => {
		e.preventDefault();
		zoomAndRedirect('iodevices.html');
	});
}

if (aboutUsLink) {
	aboutUsLink.addEventListener('click', (e) => {
		e.preventDefault();
		slideAndRedirect('aboutus.html');
	});
}

if (busesLink) {
	busesLink.addEventListener('click', (e) => {
		e.preventDefault();
		zoomAndRedirect('buses.html')
	});
}