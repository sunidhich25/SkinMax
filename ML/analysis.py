import sys, os
sys.path.append(os.path.dirname(__file__))

from completeec import detect_eye_color
from model import detect_hair_texture
from darkcircle import dark_circles

def analyze_face(image_path: str) -> dict:
    """
    Flask calls this with an image path.
    """
    eye_result  = detect_eye_color(image_path)
    hair_result = detect_hair_texture(image_path)
    dark_circles = dark_circles(image_path)

    return {
        "eye_color": {
            "color":      eye_result.get("eye_color"),
           
        },
        "hair_texture": {
            "type":       hair_result.get("hair_texture"),
            
        },
        "dark_circles": {
            "severity" : dark_circles.get("severity")
        }
    }
