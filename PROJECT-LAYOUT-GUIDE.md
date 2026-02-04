# Project Template Layout Guide

This guide explains all the layout components available for creating flexible, professional project pages like your Notion portfolio.

## 🎯 Available Layout Components

### 1. **Project Summary Box**
Highlighted box with border accent for key project information.

```html
<section class="project-summary">
    <p><strong>Description:</strong> Your project description here</p>
    <p><strong>Team:</strong> Team member names</p>
    <p><em>Additional context or notes</em></p>
</section>
```

---

### 2. **Text and Image Side by Side**
50/50 split layout with text on left, image on right.

```html
<div class="content-row">
    <div class="content-text">
        <h2>Your Heading</h2>
        <p>Your text content here...</p>
    </div>
    <div class="content-image">
        <img src="images/your-image.jpg" alt="Description">
        <p class="image-caption">Optional caption</p>
    </div>
</div>
```

**Variations:**

**Image on Left, Text on Right:**
```html
<div class="content-row reverse">
    <div class="content-image-small">
        <img src="images/your-image.jpg" alt="Description">
        <p class="image-caption">Caption</p>
    </div>
    <div class="content-text-wide">
        <h3>Heading</h3>
        <p>Text content...</p>
    </div>
</div>
```

**Smaller Image:**
Use `content-image-small` (max 350px width) for smaller images that don't need full column width.

---

### 3. **Full Width Image**
Image spans entire content width.

```html
<div class="content-full-image">
    <img src="images/wide-image.jpg" alt="Description">
    <p class="image-caption">This is a full-width image</p>
</div>
```

---

### 4. **Two Column Text Layout**
Split text into two equal columns (great for lists or comparisons).

```html
<div class="two-column">
    <div class="column">
        <h3>Left Column</h3>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </div>
    <div class="column">
        <h3>Right Column</h3>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </div>
</div>
```

---

### 5. **Image Grids**

**Two Column Grid:**
```html
<div class="image-grid-2">
    <div class="grid-item">
        <img src="images/image1.jpg" alt="Image 1">
        <p class="image-caption">Caption for image 1</p>
    </div>
    <div class="grid-item">
        <img src="images/image2.jpg" alt="Image 2">
        <p class="image-caption">Caption for image 2</p>
    </div>
</div>
```

**Three Column Grid:**
```html
<div class="image-grid-3">
    <div class="grid-item">
        <img src="images/image1.jpg" alt="Image 1">
        <p class="image-caption">Version 1</p>
    </div>
    <div class="grid-item">
        <img src="images/image2.jpg" alt="Image 2">
        <p class="image-caption">Version 2</p>
    </div>
    <div class="grid-item">
        <img src="images/image3.jpg" alt="Image 3">
        <p class="image-caption">Version 3</p>
    </div>
</div>
```

---

### 6. **Collapsible/Toggle Sections**
Notion-style toggles that hide/show content when clicked.

```html
<div class="toggle-section">
    <button class="toggle-header">
        <span class="toggle-icon">▶</span>
        <h2>Section Title (Click to Expand)</h2>
    </button>
    <div class="toggle-content">
        <p>Hidden content goes here...</p>
        <p>Can include any HTML - text, images, lists, etc.</p>
    </div>
</div>
```

**Features:**
- Click to expand/collapse
- Smooth animation
- Triangle rotates when opened
- Can nest any content inside

---

### 7. **Callout Box**
Highlighted box for important information or key insights.

```html
<div class="callout-box">
    <h3>Important Note or Innovation</h3>
    <p>This stands out from the rest of the content...</p>
    <p>Great for highlighting key insights or breakthroughs.</p>
</div>
```

---

## 📐 Layout Size Options

### Image Sizes:
- `content-image` - Takes full column width (50% in content-row)
- `content-image-small` - Max 350px width (for smaller images)
- `content-full-image` - Full content width

### Text Widths:
- `content-text` - Standard 50% in content-row
- `content-text-wide` - For emphasizing text over image

---

## 🎨 Complete Example Combinations

### Example 1: Process Documentation
```html
<h2>Our Process</h2>

<div class="content-row">
    <div class="content-text">
        <p>We started by analyzing the requirements...</p>
    </div>
    <div class="content-image">
        <img src="images/requirements.jpg" alt="Requirements">
        <p class="image-caption">Initial requirements document</p>
    </div>
</div>

<div class="image-grid-3">
    <div class="grid-item">
        <img src="images/sketch1.jpg" alt="Sketch 1">
        <p class="image-caption">Initial concept</p>
    </div>
    <div class="grid-item">
        <img src="images/sketch2.jpg" alt="Sketch 2">
        <p class="image-caption">Refined design</p>
    </div>
    <div class="grid-item">
        <img src="images/sketch3.jpg" alt="Sketch 3">
        <p class="image-caption">Final prototype</p>
    </div>
</div>
```

### Example 2: Key Innovation Highlight
```html
<div class="callout-box">
    <h3>Breakthrough Moment</h3>
    <p>The key insight came when we realized we could split the head into five groups...</p>
</div>

<div class="content-full-image">
    <img src="images/innovation-diagram.jpg" alt="Innovation">
    <p class="image-caption">Diagram showing the split head concept</p>
</div>
```

### Example 3: Technical Details in Toggle
```html
<div class="toggle-section">
    <button class="toggle-header">
        <span class="toggle-icon">▶</span>
        <h2>Technical Specifications</h2>
    </button>
    <div class="toggle-content">
        <div class="two-column">
            <div class="column">
                <h3>Hardware</h3>
                <ul>
                    <li>Arduino Mega 2560</li>
                    <li>Stepper Motors (NEMA 17)</li>
                    <li>Custom PCB</li>
                </ul>
            </div>
            <div class="column">
                <h3>Software</h3>
                <ul>
                    <li>Python 3.9</li>
                    <li>Custom G-code parser</li>
                    <li>OpenCV for vision</li>
                </ul>
            </div>
        </div>
    </div>
</div>
```

---

## 📱 Responsive Behavior

All layouts automatically adapt for mobile:

**Desktop (>768px):**
- `.content-row` = Side by side (50/50)
- `.image-grid-3` = 3 columns
- `.image-grid-2` = 2 columns
- `.two-column` = 2 columns

**Mobile (<768px):**
- Everything stacks vertically
- Images scale to full width
- Text flows naturally

---

## 💡 Best Practices

### 1. **Use Toggle Sections for:**
   - Long technical details
   - Design iterations
   - Code examples
   - Optional background info
   - Detailed specifications

### 2. **Use Callout Boxes for:**
   - Key innovations
   - Important warnings
   - Major insights
   - Project highlights

### 3. **Use Image Grids for:**
   - Design iterations
   - Process photos
   - Before/after comparisons
   - Multiple views of same object

### 4. **Use Content Rows for:**
   - Explaining alongside visuals
   - Step-by-step processes
   - Feature descriptions with images

---

## 🚀 Quick Start Template

```html
<!-- Project Header -->
<section class="detail-header">
    <h1>Project Name</h1>
    <p class="project-date">Date</p>
    <div class="project-tags">
        <span class="tag">Tag1</span>
        <span class="tag">Tag2</span>
    </div>
</section>

<!-- Summary -->
<section class="project-summary">
    <p><strong>Description:</strong> Brief description</p>
    <p><strong>Team:</strong> Team members</p>
</section>

<!-- Main Content -->
<section class="detail-content">
    
    <!-- Introduction with image -->
    <div class="content-row">
        <div class="content-text">
            <h2>Overview</h2>
            <p>Introduction text...</p>
        </div>
        <div class="content-image">
            <img src="images/overview.jpg" alt="Overview">
        </div>
    </div>
    
    <!-- Full width demo -->
    <div class="content-full-image">
        <img src="images/demo.jpg" alt="Demo">
        <p class="image-caption">System in action</p>
    </div>
    
    <!-- Collapsible details -->
    <div class="toggle-section">
        <button class="toggle-header">
            <span class="toggle-icon">▶</span>
            <h2>Technical Details</h2>
        </button>
        <div class="toggle-content">
            <p>Details here...</p>
        </div>
    </div>
    
    <!-- Innovation highlight -->
    <div class="callout-box">
        <h3>Key Innovation</h3>
        <p>What made this special...</p>
    </div>
    
    <!-- Process iterations -->
    <div class="image-grid-3">
        <div class="grid-item">
            <img src="images/v1.jpg" alt="V1">
            <p class="image-caption">Version 1</p>
        </div>
        <div class="grid-item">
            <img src="images/v2.jpg" alt="V2">
            <p class="image-caption">Version 2</p>
        </div>
        <div class="grid-item">
            <img src="images/v3.jpg" alt="V3">
            <p class="image-caption">Version 3</p>
        </div>
    </div>
    
</section>
```

---

## 🔧 Customization

### Change Column Ratios:
Modify the grid-template-columns in CSS:

```css
/* Make text column wider */
.content-row {
    grid-template-columns: 2fr 1fr;  /* 66% text, 33% image */
}

/* Make image column wider */
.content-row {
    grid-template-columns: 1fr 2fr;  /* 33% text, 66% image */
}
```

### Change Grid Gaps:
```css
.content-row {
    gap: 3rem;  /* Increase spacing */
}
```

### Change Image Max Width:
```css
.content-image-small {
    max-width: 250px;  /* Make smaller */
}
```

---

## ✅ Checklist for Creating a Project Page

- [ ] Create HTML file (copy template)
- [ ] Update project header (title, date, tags)
- [ ] Add project summary box
- [ ] Write introduction with image
- [ ] Add toggle sections for detailed content
- [ ] Include process images in grids
- [ ] Highlight key innovations in callout boxes
- [ ] Add full-width images for major features
- [ ] Test toggle functionality
- [ ] Check mobile responsiveness
- [ ] Upload all images
- [ ] Test all image paths

---

Your project pages are now fully flexible and can match the style and functionality of your Notion portfolio!
