import cv2
s_img = cv2.imread("images/t.png",-1)
l_img = cv2.imread("images/example_01.jpg",-1)



l_img=cv2.cvtColor(l_img,cv2.COLOR_BGR2BGRA)

#x,y,b=l_img.shape()
#w,h,c=s_img.shape()
s_img=cv2.resize(s_img,(200,200))

#x_offset=y_offset=50
#l_img[y_offset:y_offset+s_img.shape[0], x_offset:x_offset+s_img.shape[1]] = s_img

#l_img[0:s_img.shape[0],0:s_img.shape[1]]=s_img
for i in range(0, 200):
    for j in range(0, 200):
        #print(s_img[i,j][3])
        if s_img[i, j][3] != 0:
            l_img[0 +i, 0 + j] = s_img[i, j]

cv2.imshow("Image", l_img)
cv2.waitKey(0)