extern crate image;

use wasm_bindgen::prelude::*;
use image::{DynamicImage, GenericImageView, ImageBuffer, ImageFormat, Rgb};
use imageproc::drawing::draw_text_mut;

struct Size {
    width: u32,
    height: u32,
}

#[wasm_bindgen]
pub fn process_image(image_data: &[u8], format: &str, photo_size: &str, print_size: &str) -> Vec<u8> {
    let image_format = match format.to_lowercase().as_str() {
        "jpeg" | "jpg" => ImageFormat::Jpeg,
        _ => {
            // Unsupported format, return an empty Vec<u8> or handle the error accordingly
            return Vec::new();
        }
    };

    let photo_size_in_pixels = match photo_size.to_lowercase().as_str() {
        "3x4cm" => Size { width: 354, height: 472 },
        "3.5x4.5cm" => Size { width: 413, height: 531 },
        "5.1x5.1cm" => Size { width: 600, height: 600 },
        _ => {
            // Unsupported photo size, return an empty Vec<u8> or handle the error accordingly
            return Vec::new();
        }
    };

    let print_size_in_pixels = match print_size.to_lowercase().as_str() {
        "10x15cm" => Size { width: 1800, height: 1200 },
        _ => {
            // Unsupported photo size, return an empty Vec<u8> or handle the error accordingly
            return Vec::new();
        }
    };

    let img = image::load_from_memory_with_format(image_data, image_format).unwrap();

    let (img_original_width, img_original_height) = img.dimensions();

    let resize_rate = photo_size_in_pixels.width as f32 / img_original_width as f32;

    let resize_height = (img_original_height as f32 * resize_rate) as u32;

    // Resize the image
    let mut resized_image = img.resize_exact(photo_size_in_pixels.width, resize_height, image::imageops::FilterType::Lanczos3);

    // Crop the resized image to the chosen photo size
    let cropped_image = resized_image.crop(0, (resize_height - photo_size_in_pixels.height) / 2, photo_size_in_pixels.width, photo_size_in_pixels.height);

    if image_format == ImageFormat::Jpeg {
        process_jpeg(cropped_image, print_size_in_pixels, photo_size, print_size)
    } else {
        panic!("Unsupported image format. Only JPEG format is supported.");
    }
}

fn process_jpeg(resized_image: DynamicImage, print_size_in_pixels: Size, photo_size: &str, print_size: &str) -> Vec<u8> {
    let (id_photo_width, id_photo_height) = resized_image.dimensions();
    let gap = 5; // Adjust spacing as needed
    let print_padding = 20; // Adjust padding as needed
    let Size {width: print_width, height: print_height} = print_size_in_pixels;

    let col_num = (print_width - print_padding * 2) / (id_photo_width + gap);
    let row_num = print_height / (id_photo_height + gap);

    let occupied_width = col_num * id_photo_width + (col_num - 1) * gap;
    let occupied_height = row_num * id_photo_height + (row_num - 1) * gap;

    let mut collage = ImageBuffer::from_pixel(occupied_width, occupied_height, Rgb([255, 255, 255]));

    for y in 0..row_num {
        for x in 0..col_num {
            let x_offset = x * (id_photo_width + gap);
            let y_offset = y * (id_photo_height + gap);
            image::imageops::overlay(&mut collage, &resized_image.to_rgb8(), x_offset.into(), y_offset.into());
        }
    }

    let mut underlay = ImageBuffer::from_pixel(print_width, print_height, Rgb([255, 255, 255]));
    // Set the scale (size) of the text
    let scale = ab_glyph::PxScale { x: 24.0, y: 24.0 };

    // Load a font from file
    let font_data = include_bytes!("./fonts/Inter-VariableFont_slnt,wght.ttf"); // replace this with your font path
    let font = ab_glyph::FontArc::try_from_slice(font_data as &[u8]).unwrap();


    let print_offset_x = (print_width - occupied_width) / 2;
    let print_offset_y = (print_height - occupied_height) / 2;

    let size_string = format!("Photo size: {} Print size: {} theidphoto.com", photo_size, print_size);
    draw_text_mut(&mut underlay, Rgb([0u8, 0u8, 0u8]), print_offset_x as i32, (occupied_height + print_offset_y + 5) as i32, scale, &font, &size_string);

    image::imageops::overlay(&mut underlay, &collage, print_offset_x.into(), print_offset_y.into());

     // Convert the resized image to a Vec<u8>
    let mut output_data = Vec::new();
    let mut output_cursor = std::io::Cursor::new(&mut output_data);
    underlay.write_to(&mut output_cursor, ImageFormat::Jpeg).unwrap();

    // Return the processed image data
    output_data
}

