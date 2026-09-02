import * as fs from 'fs';
import * as path from 'path';
import { ANDROID_FILES } from '../src/data/androidFiles';

console.log(`Writing ${ANDROID_FILES.length} Android files to project structure...`);

for (const file of ANDROID_FILES) {
  const filePath = path.resolve(process.cwd(), file.path);
  const dirPath = path.dirname(filePath);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  fs.writeFileSync(filePath, file.content, 'utf8');
  console.log(`✓ Created ${file.path}`);
}

console.log('All Android project files successfully written!');
