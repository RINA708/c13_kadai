```python
from PIL import Image

# 背景を読み込み
bg = Image.open('bg0.png').convert('RGBA')

# 蝶のGIF（1フレーム目）を読み込み
bf = Image.open('butterfly.gif').convert('RGBA')

# HTMLと同じ座標・サイズ (left, top, width) で3匹合成
for (x, y, w) in [(160, 411, 68), (377, 354, 70), (589, 434, 65)]:
    b = bf.resize((w, int(121 * w / 153)))  # 元サイズ153x121の縦横比を維持して縮小
    bg.alpha_composite(b, (x, y))

bg.convert('RGB').save('check.png')
```
