# Architecture of Microcomputers Website

This is an educational website about the architecture of microcomputers, created for CC201.

## Features
- Interactive homepage with animated mascot
- Detailed sections on computer components, I/O devices, and buses
- Parallax effects and responsive design
- Audio feedback and mute functionality
- Mobile-friendly hamburger menu

## GitHub Pages Deployment

This website is optimized for GitHub Pages deployment. The following fixes have been applied:

### Fixed Issues:
1. **File naming**: Renamed "Mute button" folder to "mute-button" (removed spaces and capitals)
2. **Image paths**: Fixed typo in `ComputyDefaultBSpng.png` → `ComputyDefaultBS.png`
3. **JavaScript errors**: Added null checks for elements that only exist on specific pages
4. **GitHub Pages compatibility**: Added `.nojekyll` file for proper asset loading

### Deployment Instructions:
1. Push all files to your GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main` or `master`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

## Local Development
To run locally:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`

## File Structure
- `index.html` - Homepage with interactive mascot
- `components.html` - Computer components overview
- `iodevices.html` - Input/Output devices
- `buses.html` - System buses information  
- `aboutus.html` - Team member information
- `styles.css` - All styling and responsive design
- `script.js` - Interactive functionality and animations
- `audio/` - Sound effects and background music
- `images/` - All graphics and sprites
- `fonts/` - Custom pixel fonts

## Browser Compatibility
- Works in all modern browsers
- Mobile responsive design
- Graceful fallbacks for older browsers
