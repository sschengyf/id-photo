extern crate image;

use wasm_bindgen::prelude::*;
use image::{GenericImageView, Rgba, ImageBuffer, ImageFormat};

#[wasm_bindgen]
pub fn process_image(image_data: &[u8], format: &str) -> Vec<u8> {

    let image_format = match format.to_lowercase().as_str() {
        "jpeg" | "jpg" => ImageFormat::Jpeg,
        "png" => ImageFormat::Png,
        "gif" => ImageFormat::Gif,
        "bmp" => ImageFormat::Bmp,
        _ => {
            // Unsupported format, return an empty Vec<u8> or handle the error accordingly
            return Vec::new();
        }
    };

    let img = image::load_from_memory_with_format(image_data, image_format).unwrap();

    // Target dimensions for ID photo (replace with your specific requirements)
    let target_width = 200;
    let target_height = 300;

    // Resize the image
    let resized_image = img.resize_exact(target_width, target_height, image::imageops::FilterType::Lanczos3);

    let (id_photo_width, id_photo_height) = resized_image.dimensions();

    let margin = 10; // Adjust spacing as needed

    let collage_width = 3 * id_photo_width;
    let collage_height = 2 * id_photo_height;
    let mut collage = ImageBuffer::from_pixel(collage_width, collage_height, Rgba([255, 255, 255, 255]));

    for y in 0..2 {
        for x in 0..3 {
            let x_offset = x * (id_photo_width + margin);
            let y_offset = y * (id_photo_height + margin);
            image::imageops::overlay(&mut collage, &resized_image, x_offset.into(), y_offset.into());
        }
    }

     // Convert the resized image to a Vec<u8>
     let mut output_data = Vec::new();
     let mut output_cursor = std::io::Cursor::new(&mut output_data);
     collage.write_to(&mut output_cursor, image_format).unwrap();

     // Return the processed image data
     output_data

}


