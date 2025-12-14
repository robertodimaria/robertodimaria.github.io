# Roberto Di Maria - Engineering Portfolio

This is my personal engineering portfolio website, built with Jekyll and the TeXt theme. It showcases my mechanical engineering projects, technical skills, and research in computational engineering.

## 🚀 Features

- **Portfolio**: Showcase of engineering projects and technical work
- **Blog**: Technical articles and insights
- **About**: Professional background and skills
- **Responsive Design**: Works beautifully on all devices
- **TeXt Theme**: Clean, modern, and customizable

## 🛠️ Built With

- [Jekyll](https://jekyllrb.com/) - Static site generator
- [TeXt Theme](https://github.com/kitian616/jekyll-text-theme) - Beautiful Jekyll theme
- [GitHub Pages](https://pages.github.com/) - Hosting

## 📦 Setup

### Prerequisites

- Ruby (version 2.5 or higher)
- Bundler
- Jekyll

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/robertodimaria/robertodimaria.github.io.git
   cd robertodimaria.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the local server:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser and visit `http://localhost:4000`

### Building for Production

```bash
bundle exec jekyll build
```

The site will be generated in the `_site` directory.

## 📝 Adding Content

### New Blog Post

Create a new file in the `_posts` directory with the naming format:
```
YYYY-MM-DD-title-of-post.md
```

Add front matter:
```yaml
---
layout: article
title: "Your Post Title"
date: YYYY-MM-DD
categories: [category1, category2]
tags: [tag1, tag2, tag3]
---
```

### Updating Portfolio

Edit the `portfolio.md` file to add or update project information.

### Customization

- Site configuration: `_config.yml`
- Styling: Modify theme settings in `_config.yml`
- Navigation: Update the `navigation` section in `_config.yml`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **GitHub**: [@robertodimaria](https://github.com/robertodimaria)
- **Website**: [robertodimaria.github.io](https://robertodimaria.github.io)

## 🙏 Acknowledgments

- [TeXt Theme](https://github.com/kitian616/jekyll-text-theme) by Kitian616
- [Jekyll](https://jekyllrb.com/) community
- [GitHub Pages](https://pages.github.com/)