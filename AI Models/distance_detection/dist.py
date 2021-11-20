# install opencv "pip install opencv-python"
import cv2,ctypes
import threading
import time,sys
import multiprocessing

from tkinter import *
from ctypes import windll

from BlurWindow.blurWindow import blur

# mutex = threading.Lock()
window = None

class App(threading.Thread):
    
    def __init__(self, tk_root):
        self.root = tk_root
        threading.Thread.__init__(self)
        self.start()

    def kill(self):
        print('kill')
        self.root.quit()
        self.root.update()

def blur_window():
    root = Tk()
    # T = Text(root, height=2, width=30)
    # T.pack()
    # T.insert(END, "Just a text Widget\nin two lines\n")
    # mainloop()
    blurred_window = App(root)
    global window
    window = blurred_window
    root.config(bg='black')
    # root.wm_attributes("-transparent", 'green')
    root.attributes('-alpha', 0.9)
    # root.geometry('500x400')
    root.wm_attributes("-fullscreen", True)
    
    root.update()
    hWnd = windll.user32.GetForegroundWindow()
    blur(hWnd, hexColor=False, Acrylic=True, Dark=True)

    root.lift()
    root.attributes('-topmost', True)
    root.after_idle(root.attributes, '-topmost', False)
    root.mainloop()
    

# Configure the alignment of the text

    
    # mutex.acquire()
    # mutex.release()
    return blurred_window


	

def blur_thread():
    t = threading.Thread(target=blur_window)
    t.start()
    return 10


# distance from camera to object(face) measured
# centimeter
Known_distance = 25

# width of face in the real world or Object Plane
# centimeter
Known_width = 14

# Colors
GREEN = (0, 255, 0)
RED = (0, 0, 255)
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

# defining the fonts
fonts = cv2.FONT_HERSHEY_COMPLEX

# face detector object
face_detector = cv2.CascadeClassifier(
	cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# focal length finder function
def Focal_Length_Finder(measured_distance, real_width, width_in_rf_image):

	# finding the focal length
	focal_length = (width_in_rf_image * measured_distance) / real_width
	return focal_length

# distance estimation function
def Distance_finder(Focal_Length, real_face_width, face_width_in_frame):

	distance = (real_face_width * Focal_Length)/face_width_in_frame

	# return the distance
	return distance


def face_data(image):

	face_width = 0 # making face width to zero

	# converting color image ot gray scale image
	gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

	# detecting face in the image
	faces = face_detector.detectMultiScale(gray_image, 1.3, 5)

	# looping through the faces detect in the image
	# getting coordinates x, y , width and height
	for (x, y, h, w) in faces:

		# draw the rectangle on the face
		cv2.rectangle(image, (x, y), (x+w, y+h), GREEN, 2)

		# getting face width in the pixels
		face_width = w

	# return the face width in pixel
	return face_width



# reading reference_image from directory
ref_image = cv2.imread("Ref_image1.jpg")
# find the face width(pixels) in the reference_image
ref_image_face_width = face_data(ref_image)
# get the focal by calling "Focal_Length_Finder"
# face width in reference(pixels),
# Known_distance(centimeters),
# known_width(centimeters)
Focal_length_found = Focal_Length_Finder(
	Known_distance, Known_width, ref_image_face_width)
print(Focal_length_found)
# show the reference image
# cv2.imshow("ref_image", ref_image)
# initialize the camera object so that we
# can get frame from it
cap = cv2.VideoCapture(0)
# looping through frame, incoming from
# camera/video
t = None
while True:
	# reading the frame from camera
	_, frame = cap.read()
	# calling face_data function to find
	# the width of face(pixels) in the frame
	face_width_in_frame = face_data(frame)
	# check if the face is zero then not
	# find the distance
	if face_width_in_frame != 0:
		# finding the distance by calling function
		# Distance distance finder function need
		# these arguments the Focal_Length,
		# Known_width(centimeters),
		# and Known_distance(centimeters)
		Distance = Distance_finder(
			Focal_length_found, Known_width, face_width_in_frame)
		# print(Distance)
		if Distance < 120:
			# t = AutoCloseMessageBoxW('122', 'TEST_CLOSE', 10)
			if window == None:
				# mutex.acquire()
				blur_thread()
				
			# root.destroy()
		else:
			if not window == None:
				window.kill()
				window = None
		# draw line as background of text
		cv2.line(frame, (30, 30), (230, 30), RED, 32)
		cv2.line(frame, (30, 30), (230, 30), BLACK, 28)
		# # Drawing Text on the screen
		cv2.putText(
					frame, f"Distance: {round(Distance,2)} CM", (30, 35),
					fonts, 0.6, GREEN, 2)
	# show the frame on the screen
	cv2.imshow("frame", frame)
	# quit the program if you press 'q' on keyboard
	if cv2.waitKey(1) == ord("q"):
		break
# closing the camera
cap.release()
# closing the the windows that are opened
cv2.destroyAllWindows()
