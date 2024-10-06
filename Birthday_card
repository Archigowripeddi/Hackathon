import turtle

# Set up the screen
screen = turtle.Screen()
screen.title("Happy Birthday!")
screen.bgcolor("lightblue")

# Create a turtle named "pen"
pen = turtle.Turtle()
pen.speed(2)

# Function to draw a cake
def draw_cake():
    pen.penup()
    pen.goto(-50, -50)
    pen.pendown()
    pen.color("pink")
    pen.begin_fill()
    for _ in range(2):
        pen.forward(100)
        pen.left(90)
        pen.forward(50)
        pen.left(90)
    pen.end_fill()
    
    pen.color("brown")
    pen.penup()
    pen.goto(-40, 0)
    pen.pendown()
    pen.begin_fill()
    for _ in range(2):
        pen.forward(80)
        pen.left(90)
        pen.forward(20)
        pen.left(90)
    pen.end_fill()

# Function to draw candles
def draw_candles():
    pen.color("yellow")
    for x in range(-40, 50, 30):
        pen.penup()
        pen.goto(x, 20)
        pen.pendown()
        pen.begin_fill()
        pen.forward(5)
        pen.left(90)
        pen.forward(15)
        pen.left(90)
        pen.forward(5)
        pen.left(90)
        pen.forward(15)
        pen.left(90)
        pen.end_fill()
        pen.penup()
        pen.goto(x + 2.5, 35)
        pen.pendown()
        pen.color("red")
        pen.dot(5)

# Function to write Happy Birthday message
def write_message():
    pen.penup()
    pen.goto(-150, 100)
    pen.pendown()
    pen.color("purple")
    pen.write("Happy Birthday!", font=("Arial", 24, "bold"))
    
    pen.penup()
    pen.goto(-140, 60)
    pen.pendown()
    pen.color("black")
    pen.write("Wishing you all the best!", font=("Arial", 16, "normal"))

# Function to draw balloons
def draw_balloon(x, y):
    pen.penup()
    pen.goto(x, y)
    pen.pendown()
    pen.color("red")
    pen.begin_fill()
    pen.circle(20)
    pen.end_fill()
    
    pen.color("black")
    pen.right(90)
    pen.forward(60)
    pen.left(90)

# Drawing the birthday card
draw_cake()
