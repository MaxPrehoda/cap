from flask import Flask, request, jsonify
from rembg import remove
from PIL import Image
import io
import base64

app = Flask(__name__)

@app.route('/')
def index():
    return "Background Removal API"

@app.route('/remove-bg', methods=['POST'])
def remove_bg():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    file = request.files['image']
    img = Image.open(file.stream)
    output = remove(img)

    img_byte_arr = io.BytesIO()
    output.save(img_byte_arr, format='PNG')
    img_byte_arr = img_byte_arr.getvalue()

    encoded_img = base64.b64encode(img_byte_arr).decode('utf-8')

    return jsonify({"image": encoded_img})

if __name__ == '__main__':
    app.run(debug=True)