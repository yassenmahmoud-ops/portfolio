from PIL import Image

img = Image.open(r'C:\Users\Tiger\Desktop\portfolio\pic\project1-preview.png')
width, height = img.size
print(f'Original size: {width}x{height}')

if img.mode == 'RGBA':
    img = img.convert('RGB')

pixels = img.load()

# Find left edge without light blue background
left = 0
for x in range(width):
    found = False
    for y in range(height):
        r, g, b = pixels[x, y]
        if not (r > 200 and g > 220 and b > 240):
            found = True
            break
    if found:
        left = max(0, x - 2)
        break

# Find right edge
right = width
for x in range(width - 1, -1, -1):
    found = False
    for y in range(height):
        r, g, b = pixels[x, y]
        if not (r > 200 and g > 220 and b > 240):
            found = True
            break
    if found:
        right = min(width, x + 2)
        break

cropped = img.crop((left, 0, right, height))
print(f'New size: {right - left}x{height}')
cropped.save(r'C:\Users\Tiger\Desktop\portfolio\pic\project1-preview.png')
print('✓ تم قص الصورة بنجاح')
