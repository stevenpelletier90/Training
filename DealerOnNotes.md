# Common Code Snippets - Web Designer at DealerOn

### **CSS Styling and Layout**

#### Header Logo Text Conversion

This snippet hides image logos and displays textual logos instead:

```css
.desktop .dealerLogo,
.mobile .dealerLogo {
  display: none;
}
.desktop .dealerName,
.mobile .dealerName {
  display: inline-block;
}
```

#### Navbar Positioning

```css
@media (min-width: 1800px) {
  .navbar.navbar-default {
    left: 275px;
  }
}
```

#### Universal Footer Alignment

Centers all footer content:

```css
footer {
  text-align: center;
}
```

#### Media Query Breakpoints

Used to customize container widths and layouts for different viewport sizes:

```css
@media (max-width: 1799px) and (min-width: 1441px) {
  .desktop.container,
  #nav-container.container {
    width: 1440px;
  }
}
@media (min-width: 1441px) {
  footer .container {
    width: 1440px;
  }
}
```

#### Header Overlay Prevention

Ensures page titles are not obscured by the header:

```css
@media (max-width: 1799px) and (min-width: 992px) {
  .headerWrapper ~ #content {
    padding-top: 100px;
  }
}
```

---

### **JavaScript for Dynamic Features**

#### Rotating Logos

This script cycles through a set of logos every 3 seconds:

```javascript
/* Store parent elements */
var desktopLogos = document.querySelector(".desktop .rotateLogos");
var mobileLogos = document.querySelector(".mobile .rotateLogos");

/* Rotate function */
function rotate(screen) {
  screen.children[0].style.display = "none";
  screen.appendChild(screen.children[0]);
  screen.children[0].style.display = "block";
}

/* 3 second interval */
setInterval(function () {
  rotate(desktopLogos);
  rotate(mobileLogos);
}, 3000);
```

#### jQuery DOM Manipulations

Applies classes and attributes to various content sections for styling and layout adjustments:

```javascript
$(".contentSection2").addClass("bg-alt2");
$("#block5").attr("class", "col-md-12");
$(".contentSection4").addClass("fixedBgSec");
$(".contentSection6 > .container").attr("class", "container-fluid");
$(".contentSection7").addClass("bg-main");
```

#### Logo Management

This removes logos for specific brands (e.g., Fiat):

```javascript
$(".desktop .logoFiat, .mobile .logoFiat").remove();
```

#### Link Highlighter

This snippet helps visualize all links on a page by highlighting them with a yellow background and red text:

```javascript
document.querySelectorAll("a").forEach((link) => {
  link.style.backgroundColor = "yellow";
  link.style.color = "red";
});
```

---

### **Analytics and Tracking**

#### GA4 Link Tagging

#### Email Links

Standard format for email links with GA4 tracking attributes:

```html
<a
  href="mailto:some@domain.com"
  data-dotagging-event="click_to_mail"
  data-dotagging-product-name="Website|Custom Content"
  data-dotagging-comm-phone-number="mailto:some@domain.com"
  data-dotagging-event-action-result="redirect"
  data-dotagging-element-type="body"
  data-dotagging-element-order="0"
  data-dotagging-element-subtype="hyperlink"
  >Email</a
>
```

#### Phone Number Links

Standard format for phone numbers with GA4 tracking attributes. Note the use of dynamic phone number variables:

```html
<a
  href="tel:+#PHONE1-MOBI-DIGITS#"
  data-dotagging-event="click_to_call"
  data-dotagging-product-name="Website|Custom Content"
  data-dotagging-comm-phone-number="tel:+#PHONE1-MOBI-DIGITS#"
  data-dotagging-event-action-result="redirect"
  data-dotagging-element-type="body"
  data-dotagging-element-order="0"
  data-dotagging-element-subtype="hyperlink"
  >#Phone1-Number-Span#</a
>
```

---

### **Development Tips and Best Practices**

#### CMS Replacement Variables

- `#METRO_AREA#` - Displays the metro area configured in the CMS (e.g., "Greater Detroit Area")

#### YouTube Implementation

Use the `iframe16x9` VSCode snippet instead of raw YouTube iframes:

```html
<div class="iframe16x9">
  <iframe src="IFRAME_SOURCE" title="IFRAME_TITLE"></iframe>
</div>
```

#### Font Management

- Restrict fonts to OEM-approved options
- Custom font requests require Design team lead approval

#### Maps Integration

Default option: Use `#GMAP#` replacement code

Alternative static image process:

1. Open dealership location in Google Maps
2. Zoom out until surrounding businesses/ads disappear
3. Screenshot and format in Photoshop
4. Upload as `gmap.jpg` to Media Gallery -> map folder

#### Overflow Handling

Common issues and solutions:

- `row` inside `container-fluid`: Change to `container` or add `margin-horz-x` class
- Last resort: Apply `overflow-x: hidden` to specific section
- Avoid blanket `overflow: hidden` on entire page

#### CMS Management

- Version control: Use CMS Tracking Tool (may require multiple search attempts)
- Template Selection: Use Design group "37: Responsive – OEM/DealerSpecific"
- URL Parameter: Add `?om=1` to view CSS file locations

---

### **Utility Classes**

#### Flex Utilities

`.flex-all` - Basic flex container

```css
.flex-all {
  display: flex;
}
```

`.flex-wrap` - Allows flex items to wrap

```css
.flex-wrap {
  flex-flow: row wrap;
}
```

`.flex-center-all` - Center align items

```css
.flex-center-all {
  display: flex;
  align-items: center;
}
```

`.flex-center-md` - Center align on screens ≥992px

```css
@media (min-width: 992px) {
  .flex-center-md {
    display: flex;
    align-items: center;
  }
}
```

`.flex-center-sm` - Center align on screens ≥768px

```css
@media (min-width: 768px) {
  .flex-center-sm {
    display: flex;
    align-items: center;
  }
}
```

#### List Utilities

`.list-vert-align` - Vertically aligns list items

```css
.list-vert-align > li {
  vertical-align: middle;
}
```

#### Form Utilities

`.form-xs-auto` - Inline display for mobile forms

```css
.form-xs-auto {
  margin-bottom: -5px;
}
.form-xs-auto .input-group {
  display: inline-table;
  vertical-align: middle;
  margin-bottom: 5px;
}
```

#### Spacing Utilities

**Padding Classes**

- Base sizes: `_5x` (.5em), `1x` (1em), `2x` (2em), `3x` (3em), `4x` (4em)
- Patterns:
  - All sides: `.pad-{size}` (e.g. `.pad-1x`)
  - Vertical: `.pad-vert-{size}`
  - Horizontal: `.pad-horz-{size}`
  - Individual: `.pad-{direction}-{size}` (direction: top/right/bottom/left)
  - Remove padding: `.pad-x`

**List Padding Classes**

- Apply to `<ul>` or `<ol>` elements
- Same patterns as regular padding with `list-` prefix
- Example: `.list-pad-1x`, `.list-pad-vert-2x`

**Margin Classes**

- Base sizes: Same as padding
- Patterns:
  - All sides: `.margin-{size}` (e.g. `.margin-1x`)
  - Vertical: `.margin-vert-{size}`
  - Horizontal: `.margin-horz-{size}`
  - Individual: `.margin-{direction}-{size}`
  - Auto margins: `.margin-auto`
  - Remove margin: `.margin-x`

**List Margin Classes**

- Apply to `<ul>` or `<ol>` elements
- Same patterns as regular margin with `list-` prefix
- Example: `.list-margin-1x`, `.list-margin-vert-2x`

---

### **Reference Resources**

#### Official Templates

- Cadillac Template: [https://dealer26992.dealeron.com/](https://dealer26992.dealeron.com/)

---

The aspect ratio rule using the `::before` pseudo-element is a powerful CSS technique, often called the "padding-bottom hack" or "padding-trick". Here's how it works and why it's useful:

Basic Structure:

```css
.container {
  position: relative;
}

.container::before {
  content: "";
  display: block;
  padding-bottom: 56.25%; /* For 16:9 aspect ratio */
}
```

How it works:

1. The `padding-bottom` percentage is calculated based on the container's WIDTH
2. Common aspect ratios:
   - 56.25% = 16:9 (widescreen video)
   - 75% = 4:3 (traditional screens)
   - 100% = 1:1 (square)
   - 62.5% = 8:5 (common photo ratio)

Use cases:

1. Responsive Images:

```css
.image-container {
  position: relative;
}

.image-container::before {
  content: "";
  display: block;
  padding-bottom: 75%; /* 4:3 ratio */
}

.image-container img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

2. Video Embeds:

```css
.video-wrapper {
  position: relative;
}

.video-wrapper::before {
  content: "";
  display: block;
  padding-bottom: 56.25%; /* 16:9 ratio */
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
```

3. Card Layouts:

```css
.card {
  position: relative;
}

.card::before {
  content: "";
  display: block;
  padding-bottom: 150%; /* 2:3 ratio, common for cards */
}
```

Benefits:

1. Prevents Content Jump: Maintains space for content while loading
2. Responsive: Automatically scales with viewport width
3. Consistent Layout: Maintains proportions across different screen sizes
4. Performance: No JavaScript needed
5. Cross-browser Compatible: Works in all modern browsers

The technique is particularly useful for:

- Image galleries
- Video thumbnails
- Card layouts
- Hero sections
- Background images (like in your example)
- Responsive iframes
- Banner ads
- Social media embeds

The mathematical formula is:

```
padding-bottom = (height ÷ width) × 100
```

So for a 16:9 ratio:

```
(9 ÷ 16) × 100 = 56.25%
```

This technique has largely replaced older methods like fixed heights or complex JavaScript solutions, making it a fundamental tool in modern responsive web design.
