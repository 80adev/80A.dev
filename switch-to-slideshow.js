#!/usr/bin/env node

/**
 * Switch to Slideshow Script
 * 
 * This script will switch back to the slideshow component
 * and update the index.astro file to use the slideshow style.
 * 
 * Usage: node switch-to-slideshow.js
 */

const fs = require('fs');
const path = require('path');

console.log('🎠 Switching to slideshow style...');

try {
  // 1. Restore the slideshow component
  const slideshowBackupPath = 'src/components/ProjectSlideshow.backup.astro';
  const slideshowPath = 'src/components/ProjectSlideshow.astro';
  
  if (fs.existsSync(slideshowBackupPath)) {
    fs.copyFileSync(slideshowBackupPath, slideshowPath);
    console.log('✅ Restored ProjectSlideshow.astro');
  } else {
    console.log('❌ Slideshow backup not found. Please implement the slideshow first.');
    process.exit(1);
  }

  // 2. Update index.astro to use the slideshow
  const indexPath = 'src/pages/index.astro';
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Replace the import
  indexContent = indexContent.replace(
    'import ProjectSection from "@/components/ProjectSection"',
    'import ProjectSlideshow from "@/components/ProjectSlideshow.astro"'
  );
  
  // Replace the component usage
  indexContent = indexContent.replace(
    '<ProjectSection client:load />',
    '<ProjectSlideshow />'
  );
  
  fs.writeFileSync(indexPath, indexContent);
  console.log('✅ Updated index.astro to use ProjectSlideshow');

  console.log('\n🎉 Successfully switched to slideshow style!');
  console.log('🚀 You can now run "npm run dev" to see the slideshow');
  
} catch (error) {
  console.error('❌ Error during switch:', error.message);
  process.exit(1);
}
