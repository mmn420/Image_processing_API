import process_image from '../utilities/image_process';
import path from 'path';
import { existsSync, unlink } from 'fs';

describe('Tests for image processing', () => {
  const image_path = path.join(__dirname, '../../assets/full', 'fjord.jpg');
  const resized_image_path = path.join(
    __dirname,
    '../../assets/thumb',
    'fjord_resized.jpg'
  );
  const width = 300;
  const height = 300;
  it('should return a resized image if all the inputs are valid', async () => {
    await process_image(image_path, resized_image_path, width, height);
    expect(existsSync(resized_image_path)).toBeTruthy();
  });
  afterAll(() => {
    unlink(resized_image_path, (err) => {
      if (err) console.log(err);
    });
  });
});
