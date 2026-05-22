图片资源管理

把所有网站使用的图片放入 `assets/images/` 目录。

命名建议：
- 使用小写和中划线（kebab-case），例如 `hero-banner.jpg`、`logo.svg`。
- 使用有语义的前缀组织（例如：`icons/`, `logos/`, `photos/` 子目录）。

版本控制建议：
- 不要将大型未压缩图片（超过 1MB）直接提交到仓库，考虑使用外部 CDN 或 Git LFS。
- 在替换图片时保留旧文件名或在文件名中加入版本号以便缓存失效（例如 `hero-v2.jpg`）。

在页面中引用示例：
```html
<img src="/assets/images/photos/market-01.jpg" alt="Market">
```
