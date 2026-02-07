# Code Block Style Guide

Complete guide for displaying Python and other code in your project pages.

## 📝 Code Block Options

### 1. **Full Code Block with Header and Copy Button**

This is the recommended option for larger code snippets. It includes:
- Language label
- Copy button
- Syntax highlighting
- Professional dark theme

```html
<div class="code-block">
    <div class="code-block-header">
        <span class="code-language">Python</span>
        <button class="code-copy-btn">Copy</button>
    </div>
    <pre><code>def calculate_frf(force, response, fs):
    """
    Calculate Frequency Response Function
    
    Args:
        force: Input force signal
        response: Output response signal
        fs: Sampling frequency
    
    Returns:
        frequencies, FRF magnitude, FRF phase
    """
    # Compute FFT
    force_fft = np.fft.fft(force)
    response_fft = np.fft.fft(response)
    
    # Calculate FRF
    frf = response_fft / force_fft
    
    # Get frequency bins
    frequencies = np.fft.fftfreq(len(force), 1/fs)
    
    return frequencies, np.abs(frf), np.angle(frf)</code></pre>
</div>
```

**Key Features:**
- Dark theme (One Dark color scheme)
- Copy button functionality
- Language indicator
- Scrollable for long code

---

### 2. **Simple Code Block (No Header)**

For shorter snippets where you don't need a header or copy button:

```html
<div class="simple-code-block">
<pre>import numpy as np
import matplotlib.pyplot as plt

# Load data
data = np.loadtxt('measurement.csv', delimiter=',')

# Plot results
plt.plot(data)
plt.show()</pre>
</div>
```

**Use when:**
- Code is short (< 10 lines)
- You don't need a copy button
- You want a cleaner look

---

### 3. **Inline Code**

For small code snippets within text:

```html
<p>We used the <code>scipy.signal.butter</code> function to design the filter.</p>
```

Output: We used the `scipy.signal.butter` function to design the filter.

---

### 4. **Light Theme Code Block**

Alternative light theme for specific use cases:

```html
<div class="code-block light">
    <div class="code-block-header">
        <span class="code-language">Python</span>
        <button class="code-copy-btn">Copy</button>
    </div>
    <pre><code>print("Hello, World!")</code></pre>
</div>
```

Add the `light` class to use the light theme.

---

## 🎨 Complete Examples

### Example 1: Python Data Analysis Code

```html
<div class="code-block">
    <div class="code-block-header">
        <span class="code-language">Python</span>
        <button class="code-copy-btn">Copy</button>
    </div>
    <pre><code>import pandas as pd
import numpy as np

# Load experimental data
df = pd.read_csv('modal_test_data.csv')

# Extract frequency response
frequency = df['frequency']
magnitude = df['magnitude']
phase = df['phase']

# Find resonance peaks
from scipy.signal import find_peaks
peaks, properties = find_peaks(magnitude, height=0.5)

# Get natural frequencies
natural_frequencies = frequency[peaks]
print(f"Natural frequencies: {natural_frequencies} Hz")</code></pre>
</div>
```

### Example 2: MATLAB Code

```html
<div class="code-block">
    <div class="code-block-header">
        <span class="code-language">MATLAB</span>
        <button class="code-copy-btn">Copy</button>
    </div>
    <pre><code>% PID Controller Design
Kp = 2.5;
Ki = 0.1;
Kd = 0.05;

% Transfer function
s = tf('s');
G = Kp + Ki/s + Kd*s;

% Step response
step(G);
title('PID Controller Step Response');</code></pre>
</div>
```

### Example 3: Arduino/C++

```html
<div class="code-block">
    <div class="code-block-header">
        <span class="code-language">C++</span>
        <button class="code-copy-btn">Copy</button>
    </div>
    <pre><code>void setup() {
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}</code></pre>
</div>
```

### Example 4: G-Code

```html
<div class="code-block">
    <div class="code-block-header">
        <span class="code-language">G-Code</span>
        <button class="code-copy-btn">Copy</button>
    </div>
    <pre><code>G28 ; Home all axes
G1 Z5 F5000 ; Lift nozzle
G1 X10 Y10 F9000 ; Move to position
G1 Z0.3 F500 ; Lower to printing height
G1 X100 E10 F1500 ; Extrude while moving
G28 ; Return home</code></pre>
</div>
```

---

## 🔧 Usage in Your Project Pages

### In a Toggle Section:

```html
<div class="toggle-section">
    <button class="toggle-header">
        <span class="toggle-icon">▶</span>
        <h2>Code Implementation</h2>
    </button>
    <div class="toggle-content">
        <p>Here's the Python implementation of the FRF calculation:</p>
        
        <div class="code-block">
            <div class="code-block-header">
                <span class="code-language">Python</span>
                <button class="code-copy-btn">Copy</button>
            </div>
            <pre><code>your code here...</code></pre>
        </div>
        
        <p>This function computes the frequency response...</p>
    </div>
</div>
```

### Side by Side with Explanation:

```html
<div class="content-row">
    <div class="content-text">
        <h3>Signal Processing</h3>
        <p>We implemented a custom FFT algorithm to analyze the modal response:</p>
        
        <div class="code-block">
            <div class="code-block-header">
                <span class="code-language">Python</span>
                <button class="code-copy-btn">Copy</button>
            </div>
            <pre><code>fft_result = np.fft.fft(signal)
frequencies = np.fft.fftfreq(len(signal), 1/fs)</code></pre>
        </div>
    </div>
    <div class="content-image">
        <img src="images/fft-result.jpg" alt="FFT Result">
        <p class="image-caption">FFT output showing resonance peaks</p>
    </div>
</div>
```

---

## 📋 Language Tags

You can use any language tag in the header:

- Python
- MATLAB
- JavaScript
- C++
- Arduino
- G-Code
- HTML
- CSS
- Bash
- SQL
- JSON
- YAML
- etc.

---

## ⚙️ Setup Instructions

### 1. Include the JavaScript

Add to your HTML file (after other scripts):

```html
<script src="code-blocks.js"></script>
```

### 2. That's it!

The copy functionality works automatically for all code blocks with the `code-copy-btn` class.

---

## 🎯 Best Practices

### DO:
✅ Use code blocks for snippets > 3 lines
✅ Add language labels to help readers
✅ Include copy buttons for user convenience
✅ Keep code properly indented
✅ Add comments to explain complex logic

### DON'T:
❌ Use code blocks for single function names (use inline `code` instead)
❌ Show extremely long files (link to GitHub instead)
❌ Forget to test the copy functionality
❌ Mix tabs and spaces in code

---

## 🔍 Inline Code Best Practices

Use inline code for:
- Function names: `calculate_frf()`
- Variable names: `sampling_rate`
- File names: `config.yaml`
- Short commands: `pip install numpy`
- File paths: `/home/user/data.csv`

Example:
```html
<p>The <code>apply_filter()</code> function takes the raw signal and applies a Butterworth filter with a cutoff frequency specified in <code>config.yaml</code>.</p>
```

---

## 🎨 Customization

### Change Dark Theme Colors

Edit in `styles.css`:

```css
.code-block {
    background-color: #1e1e1e;  /* Your color */
}

.code-block code {
    color: #d4d4d4;  /* Text color */
}
```

### Change Font

```css
code {
    font-family: 'Fira Code', 'JetBrains Mono', monospace;
}
```

### Adjust Font Size

```css
.code-block code {
    font-size: 1rem;  /* Larger */
}
```

---

## 📱 Mobile Behavior

Code blocks are fully responsive:
- Horizontal scrolling for long lines
- Smaller font on mobile
- Copy button remains accessible

---

## ✅ Quick Checklist

When adding code to your project:

- [ ] Choose appropriate code block type
- [ ] Add language label
- [ ] Include copy button (for full blocks)
- [ ] Properly indent code
- [ ] Test copy functionality
- [ ] Check mobile display
- [ ] Add explanation text around code
- [ ] Use inline code for references in text

---

Your code blocks are now professional, functional, and easy to read!
