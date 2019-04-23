from flask import Flask, render_template, jsonify
import cv2

app = Flask(__name__)

@app.route("/")
def player():
    return render_template("player.html")

@app.route("/fps")
def getFPS():
    cap = cv2.VideoCapture("static/mov_bbb.mp4")
    # cap = cv2.VideoCapture("https://www.w3schools.com/html/mov_bbb.mp4")
    fps = cap.get(cv2.CAP_PROP_FPS);
    return jsonify({'fps':fps})

if __name__ == '__main__':
    app.run()