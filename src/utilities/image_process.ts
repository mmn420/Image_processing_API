import sharp from 'sharp';

const process_image = async (
  image_path: string,
  resized_image_path: string,
  width: number,
  height: number
): Promise<void> => {
  await sharp(image_path).resize(width, height).toFile(resized_image_path);
};

export default process_image;
