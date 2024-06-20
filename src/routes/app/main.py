import tkinter as tk
from tkinter import filedialog
from rembg import remove
from PIL import Image

def main():
    root = tk.Tk()
    root.withdraw()  # Hide the main window

    input_path = filedialog.askopenfilename(title='Select image file')
    if not input_path:
        print("No input file selected.")
        return

    output_path = filedialog.asksaveasfilename(title='Save file to..', defaultextension=".png")
    if not output_path:
        print("No output file selected.")
        return

    try:
        input_image = Image.open(input_path)
        output_image = remove(input_image)
        output_image.save(output_path)
        print(f"Image saved to {output_path}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
