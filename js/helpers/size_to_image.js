/*
 * size element to image:
 * used to automatically resize elements to their sibling image
 * how to use:
 * 1.   add the class "size-to-image-container" to the parent element,
 *      this will nest the "size-to-image" element and the "size-to-image-target" element
 * 2. add the class "size-to-image" to the element which you want to automatically resize
 * 3. add the class "size-to-image-target" to the image you want the element to resize to
 *
 * Resizing occurs once after image initially loads, and subsequently on window resize
 * If the image size changes for other events, the resize_all_fit_to_image_elements() function
 * needs to be manually called
 */

function size_element_to_image() {
    var element = $(this).siblings(".size-to-image").first();
    element.width($(this).width());
    element.height($(this).height());
}

function update_all_size_to_image_elements() {
    $(".size-to-image-target").each(size_element_to_image);
}

$(window).resize(function() {
    update_all_size_to_image_elements();
});

$(document).ready(function() {
    $(".size-to-image-target").load(size_element_to_image);
});
