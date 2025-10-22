#!/usr/bin/env node

/**
 * Switch to React Slideshow Script
 * 
 * This script will switch to the React slideshow component
 * and update the index.astro file to use the slideshow style.
 * 
 * Usage: node switch-to-slideshow-react.js
 */

const fs = require('fs');
const path = require('path');

console.log('🎠 Switching to React slideshow style...');

try {
  // Check if slideshow component exists
  const slideshowPath = 'src/components/ProjectSlideshow.tsx';
  if (!fs.existsSync(slideshowPath)) {
    console.log('❌ React slideshow component not found. Please create ProjectSlideshow.tsx first.');
    process.exit(1);
  }

  // Update index.astro to use the slideshow
  const indexPath = 'src/pages/index.astro';
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Replace the import
  indexContent = indexContent.replace(
    'import ProjectSection from "@/components/ProjectSection"',
    'import ProjectSlideshow from "@/components/ProjectSlideshow"'
  );
  
  // Replace the component usage
  indexContent = indexContent.replace(
    '<ProjectSection client:load />',
    '<ProjectSlideshow client:load />'
  );
  
  fs.writeFileSync(indexPath, indexContent);
  console.log('✅ Updated index.astro to use ProjectSlideshow');

  console.log('\n🎉 Successfully switched to React slideshow style!');
  console.log('🚀 You can now run "npm run dev" to see the slideshow');
  
} catch (error) {
  console.error('❌ Error during switch:', error.message);
  process.exit(1);
}
