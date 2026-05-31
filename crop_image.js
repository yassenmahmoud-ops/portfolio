const sharp = require('sharp');
const path = require('path');

const imagePath = path.join(__dirname, 'pic', 'project1-preview.png');

sharp(imagePath)
  .trim({
    background: '#d3e5f8'
  })
  .toFile(imagePath, (err, info) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('✓ تم قص الصورة بنجاح');
      console.log(`الحجم الجديد: ${info.width}x${info.height}`);
    }
  });
