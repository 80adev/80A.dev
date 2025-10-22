#!/usr/bin/env node

/**
 * Revert Script - Restore Original Project Array Style
 * 
 * This script will restore the original ProjectSection component
 * and revert the index.astro file to use the original scrolling style.
 * 
 * Usage: node revert-to-original.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔄 Reverting to original project array style...');

try {
  // 1. Restore the original ProjectSection component
  const backupContent = fs.readFileSync('src/components/ProjectSection.backup.tsx', 'utf8');
  fs.writeFileSync('src/components/ProjectSection.tsx', backupContent);
  console.log('✅ Restored ProjectSection.tsx');

  // 2. Update index.astro to use the original ProjectSection
  const indexPath = 'src/pages/index.astro';
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Replace the import
  indexContent = indexContent.replace(
    'import ProjectSlideshow from "@/components/ProjectSlideshow.astro"',
    'import ProjectSection from "@/components/ProjectSection"'
  );
  
  // Replace the component usage
  indexContent = indexContent.replace(
    '<ProjectSlideshow />',
    '<ProjectSection client:load />'
  );
  
  fs.writeFileSync(indexPath, indexContent);
  console.log('✅ Updated index.astro to use original ProjectSection');

  // 3. Clean up the slideshow component (optional)
  const slideshowPath = 'src/components/ProjectSlideshow.astro';
  if (fs.existsSync(slideshowPath)) {
    fs.renameSync(slideshowPath, 'src/components/ProjectSlideshow.backup.astro');
    console.log('✅ Moved ProjectSlideshow.astro to backup');
  }

  console.log('\n🎉 Successfully reverted to original project array style!');
  console.log('📝 The slideshow component has been moved to ProjectSlideshow.backup.astro');
  console.log('🚀 You can now run "npm run dev" to see the original scrolling style');
  
} catch (error) {
  console.error('❌ Error during revert:', error.message);
  process.exit(1);
}
