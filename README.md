 # 🌅 Teacher's Day Message Card

A creative and professional **Teacher's Day Message Card** built with **HTML, CSS, and JavaScript**. The project presents a digital greeting inside an animated folder-style card with a sunset atmosphere, a personalized teacher message, a photo area, sparkle effects, and a cute Rasengan-inspired cursor.

LIVE VIEW HERE: https://arnesrowin211-ship-it.github.io/TEACHER-S-DAY-GREETINGS/


## 📌 Project Description

This project was created as a personalized digital greeting for Teacher's Day. The webpage uses a folder-opening interaction to reveal the main greeting card. The design combines a warm sunset background with a clean, elegant card layout.

The HTML defines the greeting structure and controls, while CSS provides the sunset scenery, folder animation, responsive layout, and glowing cursor design. JavaScript handles the folder interaction, greeting animation, cursor movement, sparkle effects, and optional ambient audio. fileciteturn0file0L21-L29 fileciteturn0file2L7-L13

## ✨ Features

- 🌅 Animated sunset-inspired background
- ☀️ Glowing sun effect
- ☁️ Moving clouds
- ⛰️ Sunset mountain silhouette
- ⭐ Subtle star effects
- 📁 Interactive folder-style greeting
- 💌 Personalized Teacher's Day message
- 🖼️ Teacher photo section
- 💫 Cute Rasengan-inspired glowing cursor
- ✨ Sparkle animation when opening the greeting
- 📱 Responsive design for smaller screens
- 🎵 Optional ambient audio support
- ♿ Reduced-motion support for users who prefer less animation

The sunset background, folder/card styling, and responsive behavior are implemented in `style.css`. fileciteturn0file1L31-L41 fileciteturn0file1L461-L485

## 📂 Project Files

```text
Teacher-Day-Message-Card/
│
├── index.html
├── style.css
├── script.js
├── teacher-photo.jpg
└── README.md
```

### `index.html`
Contains the main webpage structure, including the sunset background, greeting heading, folder, teacher photo, message, buttons, and optional audio element. fileciteturn0file0L13-L18 fileciteturn0file0L32-L40 fileciteturn0file0L71-L85

### `style.css`
Controls the visual appearance of the webpage, including:

- Colors and typography
- Sunset background
- Sun, clouds, mountains, and stars
- Folder design
- Greeting paper
- Photo frame
- Buttons
- Rasengan-style cursor
- Mobile responsive layout

The project uses **DM Sans** and **Playfair Display** fonts. fileciteturn0file0L7-L10

### `script.js`
Provides the interactive functionality:

- Open/close folder animation
- Greeting paper glow effect
- Optional ambient audio button
- Rasengan cursor tracking
- Cursor trail
- Opening sparkle effect

fileciteturn0file2L15-L26 fileciteturn0file2L29-L45 fileciteturn0file2L47-L70 fileciteturn0file2L72-L108

## 🚀 How to Run

1. Download or clone the project.
2. Make sure all project files are inside the same folder.
3. Make sure the teacher photo is named:

```text
teacher-photo.jpg
```

4. Open `index.html` in a modern web browser such as:
   - Google Chrome
   - Microsoft Edge
   - Mozilla Firefox

5. Click **Open My Greeting ✦** to open the folder and reveal the message.

## ✏️ How to Customize

### Change the Teacher's Name or Greeting

Open `index.html` and edit the message inside the `.message` section.

Example:

```html
<h2>Thank You, Teacher!</h2>

<p>
  Thank you for your patience, guidance, encouragement, and for
  believing in your students.
</p>
```

You can also replace:

```html
<strong>Your Student</strong>
```

with your own name.

### Change the Teacher Photo

Replace `teacher-photo.jpg` with your preferred image and keep the same filename.

The image is displayed inside the photo frame using:

```html
<img src="teacher-photo.jpg" alt="Teacher photo">
```

fileciteturn0file0L36-L40

### Change the Colors

Open `style.css` and edit the CSS variables near the beginning of the file:

```css
:root {
  --ink: #271b3d;
  --muted: #655a78;
  --cream: #fffaf3;
  --purple: #6f43a8;
  --purple-dark: #422565;
  --gold: #f2b35f;
  --sunset-pink: #e87986;
  --sky: #f4a46f;
}
```

fileciteturn0file1L7-L15

## 🎵 Optional Ambient Music

The JavaScript includes support for optional ambient audio. To use it:

1. Add an MP3 file to the project folder.
2. Name it:

```text
ambient.mp3
```

3. In `index.html`, uncomment:

```html
<source src="ambient.mp3" type="audio/mpeg">
```

The music button is designed to notify the user when no audio source has been added. fileciteturn0file2L29-L45

## 🖱️ Rasengan-Inspired Cursor

The project includes a custom glowing cursor inspired by a small energy sphere. The cursor follows the mouse pointer while a smaller trail follows behind it. The effect is created using CSS and JavaScript rather than an external cursor image. fileciteturn0file1L395-L458 fileciteturn0file2L47-L70

## 📱 Responsive Design

The webpage automatically adjusts for smaller screens. On mobile devices, the folder and greeting layout change to a single-column format, and the custom cursor is disabled so that normal touch interaction remains comfortable. fileciteturn0file1L461-L479

## 🛠️ Technologies Used

- **HTML5** — webpage structure
- **CSS3** — design, animations, responsive layout, gradients, and effects
- **JavaScript** — interaction, animation, cursor tracking, and sparkle effects
- **Google Fonts** — DM Sans and Playfair Display

## 👨‍🏫 Purpose

This project demonstrates basic front-end web development skills while creating a meaningful digital greeting for a teacher. It combines structure, styling, animation, interactivity, and responsive design in one webpage.

## 📄 License

This project is intended for educational and personal use. You may modify the HTML, CSS, JavaScript, message, images, and design for your own school activity or project.

---

### 💜 Thank You, Teacher!

> A teacher plants the seeds of knowledge that continue to grow long after the lesson ends.
