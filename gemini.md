Listed directory academic-website
Viewed photography.md:1-11
Searched for files: mosaic.html
Viewed mosaic.html:1-50
Viewed config.toml:1-129
Viewed mosaic.html:1-50
Searched for "mosaic"
Edited mosaic.html
Listed directory css
Viewed go.mod:1-6
Viewed mosaic.html:1-178

I have implemented the modal functionality for your photography mosaic.

### Changes Made:
1.  **Modified [layouts/shortcodes/mosaic.html](cci:7://file:///Users/janeetbajracharya/Desktop/Code/academic-website/layouts/shortcodes/mosaic.html:0:0-0:0)**:
    *   Added **CSS styling** for a premium-feeling modal with a blurred backdrop (`backdrop-filter: blur(8px)`) and a dimmed background.
    *   Implemented **JavaScript logic** to:
        *   Automatically detect all images within a mosaic.
        *   Handle clicking on an image to open it in a fullscreen modal.
        *   Display the image's **alt text** as a caption beneath the image in the modal.
        *   Provide multiple ways to close the modal: a close button (`×`), clicking on the darkened background, or pressing the `Escape` key.
    *   Added a hover effect (`scale(1.02)`) and a pointer cursor to the mosaic images to indicate they are interactive.
    *   Ensured the script is robust and doesn't duplicate the modal element if multiple mosaics are used on the same page.

### How it looks:
*   **Mosaic Layout:** Images remain in their original mosaic grid.
*   **Interaction:** Clicking any image opens it in a smooth, fullscreen overlay.
*   **Aesthetics:** The background dims and blurs, highlighting the image. The description (alt text) is centered beneath the image in a clear, readable font that matches your theme.

You can now add more images to your [content/photography.md](cci:7://file:///Users/janeetbajracharya/Desktop/Code/academic-website/content/photography.md:0:0-0:0) like this, and they will automatically support the modal:

```markdown
{{< mosaic >}}
![Description of first image](/images/photo-1.jpg)
![Description of second image](/images/photo-2.jpg)
{{</ mosaic >}}
```

No further configuration is required!