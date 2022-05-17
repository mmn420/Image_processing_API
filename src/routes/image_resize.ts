import express from 'express';
import path from 'path';
import { existsSync } from 'fs';
import process_image from '../utilities/image_process';

const resize = express.Router();

resize.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const image = req.query.filename as string;
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);

    if (!width) {
      res.status(400).send('Please enter the desirable width.');
      return;
    }
    if (!height) {
      res.status(400).send('Please enter the desirable height.');
      return;
    }
    if (!image) {
      res
        .status(400)
        .send('Please enter the name of the image you want to resize.');
      return;
    }
    const image_path = path.join(
      __dirname,
      '../../assets/full',
      `${image}.jpg`
    );
    const resized_image_name = `${image}${width}_${height}`;
    const resized_image_path = path.join(
      __dirname,
      '../../assets/thumb',
      `${resized_image_name}.jpg`
    );

    if (!existsSync(image_path)) {
      res.status(404).send('File does not exist');
      return;
    }
    if (existsSync(resized_image_path)) {
      res.status(304).sendFile(resized_image_path);
      return;
    }
    await process_image(image_path, resized_image_path, width, height);
    res.status(200).sendFile(resized_image_path);
    return;
  }
);

export default resize;
